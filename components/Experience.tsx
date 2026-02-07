const experiences = [
  {
    company: "Ithaka",
    role: "Senior Software Engineer",
    location: "Ann Arbor, MI",
    period: "Nov 2019 - Present",
    highlights: [
      "Reduced end-user feedback loop by 50% by introducing a real-time feedback widget.",
      "Built and improved CI/CD automation across GitHub Actions, GitLab, Jenkins, Docker, and Kubernetes.",
      "Migrated legacy services to AWS Step Functions and Lambda for better scalability.",
      "Partnered with product stakeholders to improve sprint planning and delivery predictability.",
    ],
  },
  {
    company: "Infor",
    role: "Software Engineer",
    location: "Ann Arbor, MI",
    period: "May 2015 - Nov 2019",
    highlights: [
      "Delivered enterprise features using Angular and Spring-based REST APIs.",
      "Improved database design and query performance using Hibernate and SQL optimizations.",
      "Led front-end modernization across Angular versions 2 to 8.",
      "Improved analyst productivity by 30% through custom EDI mapping automation.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-block" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title">
        Experience
      </h2>
      <p className="section-intro">Recent roles and measurable delivery impact.</p>

      <div className="grid gap-4">
        {experiences.map((item) => (
          <article key={item.company} className="surface p-5">
            <h3 className="m-0 text-lg font-semibold">{item.role}</h3>
            <p className="m-0 text-sm" style={{ color: "var(--muted)" }}>
              {item.company} | {item.location} | {item.period}
            </p>
            <ul className="mb-0 mt-3 list-disc space-y-1.5 pl-5">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
