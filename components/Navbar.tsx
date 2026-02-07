import { useState } from "react";
import { navLinks } from "./navLinks";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const primaryLinks = navLinks.filter((link) =>
    ["About", "Experience", "Projects", "Contact"].includes(link.name),
  );
  const moreLinks = navLinks.filter((link) =>
    ["Skills", "Certifications", "Education"].includes(link.name),
  );

  return (
    <header className="sticky top-0 z-10 border-b" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
      <div className="page-container py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Satya Achanta
          </a>

          <button
            type="button"
            className="rounded-md border px-3 py-1.5 text-sm md:hidden"
            style={{ borderColor: "var(--border)" }}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>

        <div className="mt-3 hidden items-center justify-between gap-3 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-4 text-sm">
            {primaryLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:underline">
                {link.name}
              </a>
            ))}

            <details className="relative">
              <summary className="cursor-pointer list-none rounded-md border px-3 py-1.5">
                More
              </summary>
              <div
                className="absolute right-0 mt-2 min-w-[220px] rounded-md border p-2"
                style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
              >
                <ul className="m-0 space-y-1 p-0">
                  {moreLinks.map((link) => (
                    <li key={link.name} className="list-none">
                      <a href={link.href} className="block rounded px-2 py-1.5 hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li className="list-none">
                    <a href="/cover-letter.pdf" download className="block rounded px-2 py-1.5 hover:underline">
                      Cover Letter
                    </a>
                  </li>
                </ul>
              </div>
            </details>
          </nav>

          <div className="flex items-center gap-2 text-sm">
            <a href="/resume.pdf" download className="rounded-md border px-3 py-1.5" style={{ borderColor: "var(--border)" }}>
              Resume
            </a>
          </div>
        </div>

        {mobileOpen ? (
          <div id="mobile-nav-panel" className="mt-3 rounded-md border p-3 md:hidden" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
            <nav aria-label="Mobile">
              <ul className="m-0 space-y-1.5 p-0 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name} className="list-none">
                    <a
                      href={link.href}
                      className="block rounded px-2 py-1.5 hover:underline"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="list-none pt-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="block rounded px-2 py-1.5 hover:underline"
                    onClick={() => setMobileOpen(false)}
                  >
                    Resume
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="/cover-letter.pdf"
                    download
                    className="block rounded px-2 py-1.5 hover:underline"
                    onClick={() => setMobileOpen(false)}
                  >
                    Cover Letter
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
