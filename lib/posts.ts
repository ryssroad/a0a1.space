import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  title: string;
  date: string;
  tags?: string[];
  summary?: string;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  html: string;
};

const LOG_DIR = path.join(process.cwd(), "content", "log");

export async function getAllSlugs(): Promise<string[]> {
  const files = await fs.readdir(LOG_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort()
    .reverse();
}

export async function getAllPosts(): Promise<Array<{ slug: string; meta: PostMeta }>> {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(slugs.map((s) => getPostBySlug(s)));
  return posts
    .filter(Boolean)
    .map((p) => ({ slug: p!.slug, meta: p!.meta }))
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export async function getLatestPosts(n: number) {
  const all = await getAllPosts();
  return all.slice(0, n);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const file = path.join(LOG_DIR, `${slug}.md`);
  let raw: string;
  try {
    raw = await fs.readFile(file, "utf8");
  } catch {
    return null;
  }

  const parsed = matter(raw);
  const meta = parsed.data as PostMeta;
  const processed = await remark().use(html).process(parsed.content);

  return {
    slug,
    meta,
    html: processed.toString(),
  };
}
