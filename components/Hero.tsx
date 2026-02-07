export default function Hero() {
  return (
    <section className="py-8 md:py-10" aria-labelledby="hero-name">
      <p className="mb-2 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
        Senior Software Engineer
      </p>
      <h1 id="hero-name" className="m-0 text-4xl font-semibold tracking-tight md:text-5xl">
        Satya Achanta
      </h1>
      <p className="mt-3 max-w-3xl text-base md:text-lg" style={{ color: "var(--muted)" }}>
        10+ years building and modernizing large-scale web platforms. I focus on
        clear architecture, reliable delivery pipelines, and measurable product
        outcomes.
      </p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <a href="mailto:satya.achantavenkata@gmail.com" className="rounded-md px-3 py-2 text-white" style={{ backgroundColor: "var(--button-bg)" }}>
          Email Me
        </a>
        <a href="tel:+18135381113" className="rounded-md border px-3 py-2" style={{ borderColor: "var(--border)" }}>
          (813) 538-1113
        </a>
        <a href="https://www.linkedin.com/in/itsmesav" target="_blank" rel="noopener noreferrer" className="rounded-md border px-3 py-2" style={{ borderColor: "var(--border)" }}>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
