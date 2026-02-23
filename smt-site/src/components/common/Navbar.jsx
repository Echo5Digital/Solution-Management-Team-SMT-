"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About US", href: "/about-us" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact-us" },
];

const QUOTE_LINK = "/SmtProducts/Quote";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.topNav}>
      <div className={`shell ${styles.navInner}`}>
        <Link href="/" className={styles.logoMark} aria-label="SMT Home">
          <span>SMT</span>
          <small>Solution Management Team</small>
        </Link>

        <nav className={styles.mainNav} aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.navActions}>
          <Link className={styles.ctaMini} href={QUOTE_LINK}>
            Quote
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-main-nav"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-main-nav" className={`${styles.mobilePanel}${isMenuOpen ? ` ${styles.isOpen}` : ""}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link className={styles.mobileQuote} href={QUOTE_LINK} onClick={closeMenu}>
            Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
