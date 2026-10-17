const skillCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "ShadCN UI"],
  },
  {
    title: "Backend",
    items: ["Python", "Java", "Spring", "PostgreSQL", "API Development"],
  },
  {
    title: "Cloud and DevOps",
    items: ["AWS", "AWS Lambda", "Step Functions", "Kubernetes", "Docker"],
  },
  {
    title: "Data and Architecture",
    items: ["Prisma", "ORM Tools", "Database Design", "GraphQL", "Design Systems"],
  },
  {
    title: "Developer Experience and Internal Tools",
    items: ["Internal Tooling", "Developer Workflows", "Repo Conventions", "Onboarding", "Testing Automation"],
  },
  {
    title: "Delivery and Tooling",
    items: ["GitLab CI", "GitHub Actions", "Jenkins", "CI/CD Pipelines"],
  },
  {
    title: "AI and Intelligent Systems",
    items: ["OpenAI API", "AI-Assisted Development", "AI Agent Automation", "RAG Workflows", "Embeddings-Based Retrieval", "LangChain"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <p className="section-intro">Technologies and practices for full-stack products, internal tools, and reliable delivery.</p>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <article key={category.title} className="surface p-5">
            <h3 className="m-0 text-base font-semibold">{category.title}</h3>
            <ul className="mb-0 mt-3 list-disc space-y-1 pl-5 text-sm">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
