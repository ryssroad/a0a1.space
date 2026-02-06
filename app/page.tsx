import Link from "next/link";
import { getLatestPosts, getPostBySlug } from "@/lib/posts";

const FEATURED_SLUG = "2026-02-06-the-shift-software-that-negotiates";

export default async function Home() {
  const [latestRaw, featured] = await Promise.all([
    getLatestPosts(6),
    getPostBySlug(FEATURED_SLUG),
  ]);

  // Avoid showing the featured post twice.
  const latest = latestRaw.filter((p) => p.slug !== FEATURED_SLUG).slice(0, 4);

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

      {featured ? (
        <div style={{ marginTop: 34 }}>
          <h2>Featured</h2>
          <div className="card" style={{ marginTop: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <strong>{featured.meta.title}</strong>
              <span className="kbd">{featured.meta.date}</span>
            </div>
            <p className="p">{featured.meta.summary ?? ""}</p>
            <Link href={`/log/${featured.slug}`}>Read →</Link>
          </div>
        </div>
      ) : null}

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
