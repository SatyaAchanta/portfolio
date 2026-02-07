export default function About() {
  return (
    <section id="about" className="section-block" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        About
      </h2>
      <p className="section-intro">
        I deliver scalable, testable products by combining strong engineering
        fundamentals with pragmatic execution.
      </p>

      <div className="surface p-5">
        <ul className="m-0 list-disc space-y-2 pl-5">
          <li>10+ years in full-stack development across enterprise and SaaS products.</li>
          <li>Modernized legacy systems into cloud-native workflows using AWS Lambda and Step Functions.</li>
          <li>Built CI/CD pipelines with GitHub Actions, GitLab, Jenkins, Docker, and Kubernetes.</li>
          <li>Mentor engineers and drive cross-team delivery through documentation and clean ownership.</li>
          <li>Based in Michigan. M.S. in Computer Science from Eastern Michigan University.</li>
        </ul>
      </div>
    </section>
  );
}
