import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="post">
      <h1>{post.meta.title}</h1>
      <p className="p">
        <span className="kbd">{post.meta.date}</span>
        {post.meta.tags?.length ? (
          <> · Tags: {post.meta.tags.join(", ")}</>
        ) : null}
      </p>
      {post.meta.summary ? <p className="p">{post.meta.summary}</p> : null}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
