"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About US", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact-us" },
];

const QUOTE_LINK = "/SmtProducts/Quote";

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

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
      <div className={styles.navPillWrap}>
        <div className={`${styles.navPill} shell`}>
          <Link href="/" className={styles.logoMark} aria-label="SMT Home">
            <span className={styles.logoImageWrap}>
              <Image
                src="/Logo%201-01.png"
                alt="SMT logo"
                fill
                sizes="(max-width: 520px) 150px, 240px"
                className={styles.logoImage}
              />
            </span>
          </Link>

          <nav className={styles.mainNav} aria-label="Main navigation">
            {NAV_LINKS.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.navActions}>
            <Link href={QUOTE_LINK} className={styles.iconBtn} aria-label="Cart / Quote">
              <BagIcon />
            </Link>
            <Link href="/contact-us" className={styles.iconBtn} aria-label="Account / Contact">
              <UserIcon />
            </Link>
            <button type="button" className={styles.iconBtn} aria-label="Search">
              <SearchIcon />
            </button>
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
      </div>

      <div id="mobile-main-nav" className={`${styles.mobilePanel}${isMenuOpen ? ` ${styles.isOpen}` : ""}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link className={`ripple-button ${styles.mobileQuote}`} href={QUOTE_LINK} onClick={closeMenu}>
            Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
