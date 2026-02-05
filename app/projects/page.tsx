import projects from "@/content/projects.json";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="h1">Projects</h1>
      <p className="p">Small list. Real artifacts.</p>

      <div className="grid" style={{ marginTop: 18 }}>
        {projects.map((p) => (
          <div className="card" key={p.name}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <strong>{p.name}</strong>
              <span className="kbd">{p.status}</span>
            </div>
            <p className="p">{p.description}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {p.links?.map((l: any) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
