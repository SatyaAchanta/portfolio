const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/itsmesav",
    href: "https://www.linkedin.com/in/itsmesav",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-block"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="section-title">
        Contact
      </h2>
      <p className="section-intro">
        Open to senior engineering roles, AI-forward product work, and
        product-focused collaboration.
      </p>

      <div className="surface p-5">
        <dl className="m-0 grid gap-3">
          {contactLinks.map((item) => (
            <div
              key={item.label}
              className="grid gap-1 sm:grid-cols-[120px_1fr] sm:items-center"
            >
              <dt className="text-sm font-semibold">{item.label}</dt>
              <dd className="m-0 text-sm" style={{ color: "var(--muted)" }}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="underline"
                >
                  {item.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
