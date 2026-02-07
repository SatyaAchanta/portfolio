const contactLinks = [
  {
    label: "Email",
    value: "satya.achantavenkata@gmail.com",
    href: "mailto:satya.achantavenkata@gmail.com",
  },
  {
    label: "Phone",
    value: "+1 (813) 538-1113",
    href: "tel:+18135381113",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/itsmesav",
    href: "https://www.linkedin.com/in/itsmesav",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-block" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">
        Contact
      </h2>
      <p className="section-intro">
        Open to senior engineering opportunities and product-focused collaboration.
      </p>

      <div className="surface p-5">
        <a
          href="mailto:satya.achantavenkata@gmail.com"
          className="inline-block rounded-md border px-4 py-2 text-sm font-medium"
          style={{ borderColor: "var(--border)" }}
        >
          Email Me
        </a>

        <dl className="mb-0 mt-5 grid gap-3">
          {contactLinks.map((item) => (
            <div key={item.label} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:items-center">
              <dt className="text-sm font-semibold">{item.label}</dt>
              <dd className="m-0 text-sm" style={{ color: "var(--muted)" }}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
