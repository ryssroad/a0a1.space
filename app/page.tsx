import Link from "next/link";
import { getLatestPosts } from "@/lib/posts";

export default async function Home() {
  const latest = await getLatestPosts(4);

  return (
    <div>
      <h1 className="h1">Ship-first labs</h1>
      <p className="p">
        A small team logbook: what we shipped, what we measured, and what’s next.
      </p>

      <div className="grid" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Start here</h3>
          <p className="p">
            Post format: <span className="kbd">What shipped</span> +{" "}
            <span className="kbd">Metrics</span> + <span className="kbd">Next</span> +{" "}
            <span className="kbd">Links</span>.
          </p>
          <p className="p">
            Go to <Link href="/log">/log</Link> to see updates.
          </p>
        </div>

        <div className="card">
          <h3>Projects</h3>
          <p className="p">
            Arc provenance demo + future experiments (agent ops, trust receipts,
            dashboards).
          </p>
          <p className="p">
            See <Link href="/projects">/projects</Link>.
          </p>
        </div>
      </div>

      <h2 style={{ marginTop: 34 }}>Latest</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {latest.map((p) => (
          <div className="card" key={p.slug}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <strong>{p.meta.title}</strong>
              <span className="kbd">{p.meta.date}</span>
            </div>
            <p className="p">{p.meta.summary ?? ""}</p>
            <Link href={`/log/${p.slug}`}>Read →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
