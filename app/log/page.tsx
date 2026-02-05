import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function LogIndex() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="h1">Log</h1>
      <p className="p">Short updates. One artifact each.</p>

      <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        {posts.map((p) => (
          <div className="card" key={p.slug}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <strong>
                <Link href={`/log/${p.slug}`}>{p.meta.title}</Link>
              </strong>
              <span className="kbd">{p.meta.date}</span>
            </div>
            {p.meta.tags?.length ? (
              <p className="p">Tags: {p.meta.tags.join(", ")}</p>
            ) : null}
            {p.meta.summary ? <p className="p">{p.meta.summary}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
