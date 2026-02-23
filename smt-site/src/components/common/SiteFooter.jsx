import Link from "next/link";
import { homepageContent } from "@/content/homepage";
import styles from "./SiteFooter.module.css";

const COMPANY_NAME = "SMT- Solution Management Team";
const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact-us" },
];

export default function SiteFooter() {
  const contact = homepageContent.contact;

  return (
    <footer className={styles.siteFooter}>
      <div className={`shell ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <p className={styles.brandTitle}>{COMPANY_NAME}</p>
          <p className={styles.brandSub}>Ergonomic mounting solutions for healthcare and professional spaces.</p>
        </div>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.footerContact}>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>

      <div className={`shell ${styles.footerLegal}`}>
        <p>
          {new Date().getFullYear()} {COMPANY_NAME}
        </p>
      </div>
    </footer>
  );
}
