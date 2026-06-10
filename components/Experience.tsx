const experiences = [
  {
    company: "Ithaka",
    role: "Sr Software Engineer",
    location: "Ann Arbor, MI",
    period: "November 2019 - Present",
    highlights: [
      "Acted as technical lead for initiatives across admin portals, reporting workflows, and public APIs with COUNTER compliance.",
      "Led modernization by decomposing legacy services into AWS Lambda and Step Functions workflows.",
      "Drove a 3x increase in release velocity through AI-assisted development workflows and automated testing standards.",
      "Partnered with product owners to shape quarterly roadmaps, identify risks, and remove delivery bottlenecks.",
      "Designed and maintained CI/CD pipelines with GitHub Actions, GitLab, Jenkins, Docker, and Kubernetes.",
      "Introduced a real-time feedback mechanism that reduced customer feedback loop time by 50%.",
      "Mentored engineers across frontend and backend on React architecture, testing strategies, system design, and Kubernetes.",
      "Owned delivery end-to-end from design review and implementation through production rollout and post-release stability.",
    ],
  },
  {
    company: "Infor",
    role: "Software Engineer",
    location: "Ann Arbor, MI",
    period: "May 2015 - November 2019",
    highlights: [
      "Built and maintained enterprise-grade applications for automotive clients using Angular and Java (Spring).",
      "Partnered with the Principal Architect to review designs, discuss tradeoffs, and improve maintainability.",
      "Led front-end modernization of legacy Angular codebases and introduced linting/coding standards.",
      "Optimized data access layers using Hibernate and SQL to improve reporting performance and reliability.",
      "Contributed to Agile and CI practices for more predictable releases and improved quality through Jenkins pipelines.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-block" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title">
        Experience
      </h2>
      <p className="section-intro">Experience aligned with resume.</p>

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
