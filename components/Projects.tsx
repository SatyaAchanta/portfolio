const projects = [
  {
    name: "Fantasy League MichCA",
    role: "Full-Stack Engineer & Product Owner",
    link: "https://www.fantasyleaguemichca.org",
    summary:
      "Prediction-based fantasy cricket platform for Michigan Cricket Association fans.",
    outcomes: [
      "Reduced result calculation time from 30 minutes to 15 seconds with scoring automation.",
      "Built with Next.js, TypeScript, Prisma, Neon Postgres, and Vercel deployment.",
      "Implemented modular architecture and PWA support for reliability and reach.",
    ],
  },
  {
    name: "Personal Portfolio",
    role: "Solo Builder",
    link: "https://www.itsmesatya.info",
    summary:
      "Career-focused portfolio for recruiters with concise experience, project, and credential highlights.",
    outcomes: [
      "Designed a clear one-page structure for fast scanning and direct outreach.",
      "Published resume and cover letter access alongside straightforward contact paths.",
      "Maintained with Next.js and TypeScript for clean, maintainable updates.",
    ],
  },
  {
    name: "AI/ML Learning Work",
    role: "Hands-on Exploration",
    link: "",
    summary:
      "Ongoing work with LangChain, LangGraph, and LangSmith to build practical agent and RAG workflows.",
    outcomes: [
      "Built Python-based RAG experiments for resume Q&A and standup-note assistance.",
      "Applied vector embeddings and tool-calling patterns in proof-of-concept projects.",
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
