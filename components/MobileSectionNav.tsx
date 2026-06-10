import { navLinks } from "./navLinks";

type SectionNavProps = {
  className?: string;
};

export default function MobileSectionNav({ className = "" }: SectionNavProps) {
  return (
    <nav className={className} aria-label="Section navigation">
      <ul className="m-0 flex flex-wrap gap-2 p-0">
        {navLinks.map((link) => (
          <li key={link.name} className="list-none">
            <a href={link.href} className="text-sm underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
