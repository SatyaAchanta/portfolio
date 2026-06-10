export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6" style={{ borderColor: "var(--border)" }}>
      <div className="page-container flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0" style={{ color: "var(--muted)" }}>
          Satya Achanta | AI-Forward Full-Stack Engineer
        </p>
        <p className="m-0" style={{ color: "var(--muted)" }}>
          © {currentYear} Satya Achanta
        </p>
      </div>
    </footer>
  );
}
