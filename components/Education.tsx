export default function Education() {
  return (
    <section id="education" className="section-block" aria-labelledby="education-title">
      <h2 id="education-title" className="section-title">
        Education
      </h2>
      <p className="section-intro">Academic background relevant to software engineering foundations.</p>

      <article className="surface p-5">
        <h3 className="m-0 text-lg font-semibold">Master of Science in Computer Science</h3>
        <p className="m-0 text-sm" style={{ color: "var(--muted)" }}>
          Eastern Michigan University | Ypsilanti, Michigan | Sep 2013 - Apr 2015
        </p>
        <ul className="mb-0 mt-3 list-disc space-y-1.5 pl-5">
          <li>GPA: 3.75</li>
          <li>Built strong grounding in algorithms, systems, and software design.</li>
        </ul>
      </article>
    </section>
  );
}
