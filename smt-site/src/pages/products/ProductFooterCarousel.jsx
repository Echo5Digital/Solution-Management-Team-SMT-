"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProductsPage.module.css";

const SLIDES = [
  "/carosal1.1.jpg",
  "/carosal1.3.jpg",
  "/carosal1.2.jpg",
];

const AUTO_MS = 3000;

export default function ProductFooterCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, AUTO_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.footerCarouselSection} aria-label="Product highlights">
      <div className={styles.footerCarouselTrack} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {SLIDES.map((src, index) => (
          <div className={styles.footerCarouselSlide} key={`${src}-${index}`}>
            <Image
              src={src}
              alt={`Product highlight ${index + 1}`}
              fill
              sizes="100vw"
              className={styles.footerCarouselImage}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className={styles.footerCarouselDots} aria-hidden="true">
        {SLIDES.map((_, index) => (
          <span
            key={`dot-${index}`}
            className={`${styles.footerCarouselDot}${index === activeIndex ? ` ${styles.isActive}` : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
