const skillCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "Django", "Java", "Spring Boot", "Node.js"],
  },
  {
    title: "Cloud and DevOps",
    items: ["AWS", "Kubernetes", "Docker", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Data and API",
    items: ["MySQL", "Postgres", "Elasticsearch", "GraphQL", "REST API Design"],
  },
  {
    title: "Tooling",
    items: ["Git", "JIRA", "Agile Delivery", "Testing Automation", "CI/CD Pipelines"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <p className="section-intro">Core technologies used to ship production software.</p>

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
