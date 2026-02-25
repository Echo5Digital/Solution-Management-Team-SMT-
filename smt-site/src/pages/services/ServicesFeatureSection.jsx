"use client";

import { useRef, useCallback } from "react";
import styles from "./ServicesFeatureSection.module.css";

const FEATURES = [
  {
    icon: "strength",
    title: "Engineered for Strength & Durability",
    body: "Our products are manufactured using premium-grade materials and precision engineering standards. Designed for demanding environments, they ensure structural stability, long-term performance, and minimal maintenance.",
  },
  {
    icon: "custom",
    title: "Customizable for Every Application",
    body: "No two workspaces are the same. Our mounting and support systems are fully adaptable to meet specific operational needs, allowing flexible configurations for equipment, monitors, tools, and devices.",
  },
  {
    icon: "ergonomic",
    title: "Designed for Ergonomic Efficiency",
    body: "We prioritize user comfort and productivity. Our solutions enhance accessibility, improve workflow, and reduce physical strain, making them ideal for professional and high-usage environments.",
  },
  {
    icon: "support",
    title: "Reliable Support & Nationwide Service",
    body: "From consultation to installation, our team provides dependable support and streamlined delivery. We ensure fast turnaround times and responsive service to keep your operations running smoothly.",
  },
];

/* Parallax depth per card — higher = moves more */
const PARALLAX_DEPTH = [0.55, 0.95, 0.75, 0.45];
const MAX_SHIFT = 18;

function StrengthIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden>
      <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="2.2" />
      <path d="M15 22l5.5 5.5L29.5 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4v5M22 35v5M4 22h5M35 22h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function CustomIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden>
      <line x1="7" y1="13" x2="37" y2="13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="7" y1="22" x2="27" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="7" y1="31" x2="19" y2="31" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="33" cy="31" r="5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="32" cy="22" r="5" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function ErgonomicIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden>
      <circle cx="22" cy="10" r="4.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M22 16v14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 22c1.8-4.5 4.8-6 8-6s6.2 1.5 8 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 31l5 6 5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden>
      <path d="M13 19v-3a9 9 0 0 1 18 0v3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="9" y="19" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <rect x="29" y="19" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M35 29v2a6 6 0 0 1-6 6h-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="37" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const ICON_MAP = {
  strength: StrengthIcon,
  custom: CustomIcon,
  ergonomic: ErgonomicIcon,
  support: SupportIcon,
};

export default function ServicesFeatureSection() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;

    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      const f = PARALLAX_DEPTH[i] ?? 0.6;
      el.style.transform = `translate(${cx * MAX_SHIFT * f}px, ${cy * MAX_SHIFT * f}px)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;
      el.style.transform = "translate(0, 0)";
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.featureSection}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`shell ${styles.featureInner}`}>
        <div className={styles.featureGrid}>
          {FEATURES.map((feat, i) => {
            const Icon = ICON_MAP[feat.icon];
            return (
              <div
                key={feat.icon}
                className={styles.featureItem}
                ref={(el) => { itemsRef.current[i] = el; }}
              >
                <div className={styles.featureIconBox}>
                  <Icon />
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureBody}>{feat.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
