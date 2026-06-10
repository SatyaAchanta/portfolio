export default function About() {
  return (
    <section id="about" className="section-block" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        About
      </h2>
      <p className="section-intro">
        Engineering summary from resume.
      </p>

      <div className="surface p-5">
        <ul className="m-0 list-disc space-y-2 pl-5">
          <li>10+ years designing and scaling enterprise web platforms and APIs.</li>
          <li>Proven track record of driving architectural decisions and platform modernization.</li>
          <li>Improved developer velocity and business impact through automation.</li>
          <li>Strong advocate for reliability, clean abstractions, and maintainability.</li>
          <li>Mentor engineers across the SDLC and support high ownership culture.</li>
        </ul>
      </div>
    </section>
  );
}
