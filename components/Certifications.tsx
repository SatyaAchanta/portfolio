import Image from "next/image";

const certifications = [
  {
    id: "ckad",
    title: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    issued: "February 2025",
    certificationId: "LF-hfc7lb3taq",
    image: "/ckad.png",
    skills: [
      "Pod design and configuration",
      "Services and networking",
      "Observability and troubleshooting",
      "State persistence and deployment workflows",
    ],
  },
  {
    id: "cba",
    title: "Certified Backstage Associate (CBA)",
    issuer: "The Linux Foundation",
    issued: "November 2025",
    certificationId: "LF-sa3hh6zbfo",
    image: "/cba.png",
    skills: [
      "Backstage catalog and workflows",
      "Plugin customization",
      "TypeScript and React integration",
      "Developer platform enablement",
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-block" aria-labelledby="certifications-title">
      <h2 id="certifications-title" className="section-title">
        Certifications
      </h2>
      <p className="section-intro">Credentials that support platform and cloud-native expertise.</p>

      <div className="grid gap-4">
        {certifications.map((certification) => (
          <article key={certification.id} className="surface p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border" style={{ borderColor: "var(--border)" }}>
                <Image
                  src={certification.image}
                  alt={`${certification.title} badge`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="m-0 text-lg font-semibold">{certification.title}</h3>
                <p className="m-0 text-sm" style={{ color: "var(--muted)" }}>
                  {certification.issuer} | {certification.issued}
                </p>
                <p className="mb-0 mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  Certification ID: {certification.certificationId}
                </p>
                <ul className="mb-0 mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  {certification.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
