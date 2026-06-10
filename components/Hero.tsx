export default function Hero() {
  return (
    <section className="py-8 md:py-10" aria-labelledby="hero-name">
      <p
        className="mb-2 text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--muted)" }}
      >
        Senior Software Engineer | AI-Forward Full-Stack Engineer
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
        scalable web platforms, APIs, and AI-forward products. I combine React,
        Python, Java/Spring, AWS, Kubernetes, CI/CD, OpenAI-powered features,
        RAG workflows, and AI-assisted development to accelerate delivery
        without lowering engineering standards.
      </p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <a
          href="mailto:satya.achantavenkata@gmail.com"
          className="rounded-md border px-3 py-2"
          style={{ borderColor: "var(--border)" }}
        >
          Email Me
        </a>
        <a
          href="tel:+17343830393"
          className="rounded-md border px-3 py-2"
          style={{ borderColor: "var(--border)" }}
        >
          (734) 383-0393
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
