import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About US", href: "/about-us" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact-us" },
];

const QUOTE_LINK = "/SmtProducts/Quote";

export default function Navbar() {
  return (
    <header className="top-nav">
      <div className="shell nav-inner">
        <Link href="/" className="logo-mark" aria-label="SMT Home">
          <span>SMT</span>
          <small>Solution Management Team</small>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="cta-mini" href={QUOTE_LINK}>
          Quote
        </Link>
      </div>
    </header>
  );
}
