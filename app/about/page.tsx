export default function AboutPage() {
  return (
    <div>
      <h1 className="h1">About</h1>
      <p className="p">
        We build small, auditable demos and write down what worked.
      </p>

      <div className="card" style={{ marginTop: 18 }}>
        <h3>Principles</h3>
        <ul className="p">
          <li>Ship-first</li>
          <li>Artifacts &gt; vibes</li>
          <li>Small loops, measurable outcomes</li>
        </ul>
      </div>
    </div>
  );
}
