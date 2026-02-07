const projects = [
  {
    name: "Fantasy League MichCA",
    role: "Product Builder",
    link: "https://www.fantasyleaguemichca.org",
    summary:
      "Conceived, architected, and delivered a production-grade fantasy sports platform, owning the full lifecycle from ideation and UX through deployment and optimization.",
    outcomes: [
      "Designed a serverless backend using Next.js App Router, Prisma, and Neon Postgres, reducing match-result computation from 30 minutes to 15 seconds.",
      "Made architecture choices across Next.js, Clerk Auth, Vercel, and ShadCN UI to balance velocity and maintainability.",
      "Built modular UI with ShadCN and Tailwind for consistency, accessibility, and responsive behavior.",
      "Added PWA capabilities for partial offline support during live matches.",
      "Monitored performance and iterated on APIs/data models to support growth with low infrastructure overhead.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-block" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>
      <p className="section-intro">Selected projects with scope, stack, and impact.</p>

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
