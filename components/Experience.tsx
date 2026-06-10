const experiences = [
  {
    company: "Ithaka",
    role: "Sr Software Engineer",
    location: "Ann Arbor, MI",
    period: "Nov 2019 - Present",
    highlights: [
      "Act as a lead-minded engineer across admin portals, reporting workflows, and public APIs, owning ambiguous initiatives end to end.",
      "Led modernization by decomposing legacy services into AWS Lambda and Step Functions workflows, improving scalability and reducing operational overhead.",
      "Improved release velocity by 3x through AI-assisted development workflows that accelerated implementation, debugging, testing, and developer self-sufficiency.",
      "Applied AI-enabled engineering practices with Codex and Copilot for code scaffolding, refactoring, testing, and full-stack feature implementation.",
      "Created skills and instructions that helped AI tools understand repo conventions, generate tests in the team's style, and support onboarding.",
      "Encouraged responsible adoption of AI-assisted workflows and helped shape expectations for reviewing AI-generated code effectively.",
      "Drove engineering standards through clearer repo patterns, stronger testing practices, improved linting, and more consistent frontend architecture decisions.",
      "Partnered with product owners and stakeholders to shape technical roadmaps, identify delivery risks, and reduce execution bottlenecks.",
      "Designed and maintained CI/CD pipelines with GitHub Actions, GitLab, Jenkins, Docker, and Kubernetes.",
      "Introduced a real-time feedback mechanism that reduced the customer feedback loop by 50%.",
      "Mentored junior and mid-level engineers through debugging support, design reviews, onboarding, and day-to-day technical guidance.",
    ],
  },
  {
    company: "Infor",
    role: "Software Engineer",
    location: "Ann Arbor, MI",
    period: "May 2015 - Nov 2019",
    highlights: [
      "Built and maintained enterprise-grade applications for automotive clients using Angular and Java/Spring.",
      "Partnered with the Principal Architect to review designs, evaluate tradeoffs, and improve long-term maintainability across modules.",
      "Led frontend modernization across legacy Angular codebases, introducing linting and coding standards that improved consistency and reduced defects.",
      "Optimized data access layers using Hibernate and SQL to improve reporting performance and reliability.",
      "Contributed to Agile delivery and CI practices through automated testing and Jenkins pipelines.",
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
