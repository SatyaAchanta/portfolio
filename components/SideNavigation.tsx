import { navLinks } from "./navLinks";

export default function SideNavigation() {
  return (
    <nav aria-label="Section navigation">
      <ul className="m-0 space-y-2 p-0">
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
