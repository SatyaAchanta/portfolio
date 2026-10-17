export default function About() {
  return (
    <section id="about" className="section-block" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        About
      </h2>
      <p className="section-intro">
        Building useful products and helping engineering teams work more effectively.
      </p>

      <div className="surface p-5">
        <ul className="m-0 list-disc space-y-2 pl-5">
          <li>10+ years delivering full-stack products, from responsive interfaces and APIs to data models and cloud deployments.</li>
          <li>Strong hands-on stack across React, TypeScript, Python, Java/Spring, PostgreSQL, AWS, Kubernetes, and CI/CD.</li>
          <li>Contribute to company internal tools and improve developer experience through automation, repo conventions, and onboarding support.</li>
          <li>Experience delivering OpenAI-powered features, RAG workflows, embeddings-based retrieval, and AI-assisted development practices.</li>
          <li>Proven track record driving architecture decisions, modernization efforts, testing standards, and developer velocity.</li>
          <li>Mentor engineers through design reviews, debugging, onboarding, and responsible review of AI-generated code.</li>
        </ul>
      </div>
    </section>
  );
}
