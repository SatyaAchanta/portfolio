import { navLinks } from "./navLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
      <div className="page-container flex flex-wrap items-center justify-between gap-3 py-3">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Satya Achanta
        </a>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:underline">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-sm">
          <a href="/resume.pdf" download className="rounded-md border px-3 py-1.5" style={{ borderColor: "var(--border)" }}>
            Resume
          </a>
          <a href="/cover-letter.pdf" download className="rounded-md border px-3 py-1.5" style={{ borderColor: "var(--border)" }}>
            Cover Letter
          </a>
        </div>
      </div>
    </header>
  );
}
