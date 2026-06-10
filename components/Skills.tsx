const skillCategories = [
  {
    title: "AI and Intelligent Systems",
    items: [
      "OpenAI API",
      "AI-Assisted Development",
      "RAG Workflows",
      "Embeddings-Based Retrieval",
      "LangChain",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
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
    title: "Delivery and Tooling",
    items: ["GitLab CI", "GitHub Actions", "Jenkins", "Testing Automation", "CI/CD Pipelines"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <p className="section-intro">Core technologies used to ship production software and AI-forward product experiences.</p>

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
