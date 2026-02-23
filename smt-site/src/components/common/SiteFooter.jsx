"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { homepageContent } from "@/content/homepage";
import styles from "./SiteFooter.module.css";

const COMPANY_NAME = "SMT";
const COMPANY_FULL = "Solution Management Team";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact-us" },
];

const OTHER_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "Quote", href: "/SmtProducts/Quote" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "X", href: "#", icon: "x" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "YouTube", href: "#", icon: "youtube" },
];

export default function SiteFooter() {
  const pathname = usePathname();
  const showHomeCta = pathname === "/";
  const { email, phone } = homepageContent.contact ?? {};
  const year = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className={`shell ${styles.footerInner}`}>
        {showHomeCta ? (
          <section className={styles.footerCta} aria-label="Footer call to action">
            <div className={styles.footerCtaLeft}>
              <p className={styles.footerKicker}>
                <span>Designed for Function. Built to Last.</span>
                <i aria-hidden />
              </p>
              <h2 className={styles.footerCtaTitle}>Smart Mounting Solutions for Modern Healthcare.</h2>
              <span className={styles.footerCtaDivider} aria-hidden />
              <p className={styles.footerCtaSub}>
                Tell us your needs, and we'll provide customized systems that enhance comfort, safety, and productivity.
              </p>
            </div>

            <Link href="/contact-us" className={styles.footerCtaVisual} aria-label="Get in touch">
              <span className={styles.footerCtaLogoWrap}>
                <Image
                  src="/Logo%201-01.png"
                  alt="SMT logo"
                  fill
                  sizes="(max-width: 720px) 70vw, 340px"
                  className={styles.footerCtaLogo}
                />
              </span>
            </Link>
          </section>
        ) : null}

        <div className={styles.topSection}>
          <div className={styles.logoLineWrap}>
            <span className={styles.logoLine} aria-hidden />
            <Link href="/" className={styles.footerLogo} aria-label={`${COMPANY_NAME} home`}>
              <span className={styles.footerLogoImageWrap}>
                <Image
                  src="/Logo%201-01.png"
                  alt="SMT logo"
                  fill
                  sizes="(max-width: 480px) 140px, 180px"
                  className={styles.footerLogoImage}
                />
              </span>
            </Link>
            <span className={styles.logoLine} aria-hidden />
          </div>
          <div className={styles.socialWrap} aria-label="Social links">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.icon}
                href={item.href}
                className={styles.socialIcon}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.middleSection}>
          <nav className={styles.quickLinks} aria-label="Quick links">
            {QUICK_LINKS.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.contactBlock}>
            <span className={styles.verticalRule} aria-hidden />
            <div className={styles.contactDetails}>
              {email ? <a href={`mailto:${email}`}>{email}</a> : null}
              {phone ? <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a> : null}
            </div>
          </div>
          <nav className={styles.otherLinks} aria-label="More links">
            {OTHER_LINKS.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className={`shell ${styles.footerLegal}`}>
        <span>
          Copyright &copy; {year} {COMPANY_FULL}
        </span>
        <span className={styles.legalSep} aria-hidden />
        <Link href="/privacy">Privacy Policy</Link>
        <span className={styles.legalSep} aria-hidden />
        <Link href="/sitemap">Sitemap</Link>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const className = styles.socialSvg;
  switch (name) {
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "x":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
