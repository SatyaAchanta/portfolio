export default function Hero() {
  return (
    <section className="py-8 md:py-10" aria-labelledby="hero-name">
      <p
        className="mb-2 text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--muted)" }}
      >
        Senior Full-Stack Engineer | Developer Experience
      </p>
      <h1
        id="hero-name"
        className="m-0 text-4xl font-semibold tracking-tight md:text-5xl"
      >
        Satya Achanta
      </h1>
      <p
        className="mt-3 max-w-3xl text-base md:text-lg"
        style={{ color: "var(--muted)" }}
      >
        Senior Full-Stack Engineer with 10+ years of experience building
        scalable web platforms and APIs, from React and TypeScript frontends to
        Python and Java/Spring services. I contribute to company internal tools
        and improve developer experience through clearer workflows, reliable
        CI/CD, and AI-assisted development.
      </p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <a
          href="/sav-resume.pdf"
          download="Satya-Achanta-Resume.pdf"
          className="rounded-md border px-3 py-2"
          style={{ borderColor: "var(--border)" }}
        >
          Download Resume (PDF)
        </a>
        <a
          href="https://www.linkedin.com/in/itsmesav"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border px-3 py-2"
          style={{ borderColor: "var(--border)" }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
