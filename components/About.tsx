export default function About() {
  return (
    <section id="about" className="section-block" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        About
      </h2>
      <p className="section-intro">
        Engineering summary aligned with the latest resume.
      </p>

      <div className="surface p-5">
        <ul className="m-0 list-disc space-y-2 pl-5">
          <li>10+ years building scalable web platforms, APIs, and AI-forward product experiences.</li>
          <li>Strong hands-on stack across React, TypeScript, Python, Java/Spring, PostgreSQL, AWS, Kubernetes, and CI/CD.</li>
          <li>Experience delivering OpenAI-powered features, RAG workflows, embeddings-based retrieval, and AI-assisted development practices.</li>
          <li>Proven track record driving architecture decisions, modernization efforts, testing standards, and developer velocity.</li>
          <li>Mentor engineers through design reviews, debugging, onboarding, and responsible review of AI-generated code.</li>
        </ul>
      </div>
    </section>
  );
}
