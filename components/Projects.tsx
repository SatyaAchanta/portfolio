const projects = [
  {
    name: "MichCA Portal",
    role: "Full-Stack Product Builder",
    link: "https://www.michcausa.org",
    summary:
      "Built the official MichCA platform as a central operating system for a large local cricket league, giving players, volunteers, and administrators one place to manage schedules, training, certification, and league information.",
    outcomes: [
      "Turned a fragmented, manual league workflow into a self-serve digital experience where users can browse schedules, grounds, committees, forms, and league documents without depending on back-and-forth coordinator support.",
      "Added authenticated umpiring-training registration so volunteers can submit and update their details, preferred dates, dietary preferences, and questions in one flow instead of through scattered messages and spreadsheets.",
      "Created admin tooling for reviewing registrations, updating outcomes, and managing training-related workflows, reducing operational overhead for league organizers during the season.",
      "Designed the experience around a real sports community at scale, with homepage messaging and season stats that reflect 100+ teams and 500+ matches, helping the association communicate clearly with players and sponsors.",
    ],
  },
  {
    name: "CricSwap",
    role: "Full-Stack Product Builder",
    link: "https://cricswap.com",
    summary:
      "Built a focused marketplace for cricketers to buy and sell used gear locally, making it easier for players to recover value from unused equipment and for other players to find affordable gear quickly.",
    outcomes: [
      "Improved discoverability with search across titles, descriptions, cities, and tags so buyers can find relevant bats, pads, helmets, and other gear without digging through generic social posts or chat threads.",
      "Made listing creation practical for everyday users with structured forms, multi-image uploads, cover-photo selection, price and condition fields, and direct seller contact details after sign-in.",
      "Added account tools for sellers to manage their own listings, edit details, mark items as sold, and stay within simple listing limits, keeping the marketplace current instead of filling with stale posts.",
      "Introduced an approval workflow with admin moderation, rejection reasons, and hidden-until-approved publishing so the marketplace can build trust and stay usable as activity grows.",
      "Modeled the product around community reuse and accessibility, helping newer players access lower-cost equipment while giving existing players a cleaner path to circulate gear back into the cricket ecosystem.",
    ],
  },
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
    <section
      id="projects"
      className="section-block"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>
      <p className="section-intro">
        Selected projects with scope, stack, and impact.
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
