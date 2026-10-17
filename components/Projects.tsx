const projects = [
  {
    name: "Fantasy League MichCA / michcausa.org",
    role: "Product Builder",
    link: "https://michcausa.org",
    summary:
      "Conceived, architected, and delivered a production-grade fantasy sports and MichCA platform experience, owning the product lifecycle from ideation and UX design through deployment and ongoing optimization.",
    outcomes: [
      "Designed a serverless full-stack architecture with Next.js, Prisma, and Neon Postgres, reducing match-result computation from 30 minutes to 15 seconds.",
      "Built core product capabilities including admin workflows, leaderboards, database design, Excel ingestion flows, and a mobile-responsive application experience.",
      "Developed admin workflows for managing users, teams, and weekly operations, reducing operational effort for league administration.",
      "Designed data models for historical fantasy picks by user/week, leaderboard and scoring history, and team/user relationships to support downstream analytics and AI-based analysis.",
      "Built a production-ready AI analysis feature using the OpenAI API to evaluate users' historical picks and generate strengths, weaknesses, recommendations, and relative standings.",
      "Aggregated structured historical data from the database and sent it to the OpenAI API for LLM-generated analysis over structured inputs.",
      "Continuously monitored performance, iterated on APIs and data models, and optimized the platform for sustainable growth and low operational overhead.",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-block"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>
      <p className="section-intro">
        Production work with scope, stack, and impact.
      </p>

      <div className="grid gap-4">
        {projects.map((project) => (
          <article key={project.name} className="surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="m-0 text-lg font-semibold">{project.name}</h3>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline"
                  style={{ color: "var(--accent-strong)" }}
                >
                  Visit Project
                </a>
              ) : null}
            </div>
            <p className="m-0 text-sm" style={{ color: "var(--muted)" }}>
              {project.role}
            </p>
            <p className="mb-0 mt-3">{project.summary}</p>
            <ul className="mb-0 mt-3 list-disc space-y-1.5 pl-5">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
