"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProductsPage.module.css";

const VISIBLE_THUMBS = 3;
const AUTO_SCROLL_MS = 3000;

export default function ProductThumbCarousel({ thumbImages = [], title = "Product" }) {
  const images = useMemo(() => thumbImages.filter(Boolean), [thumbImages]);
  const rowRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const maxStart = Math.max(0, images.length - VISIBLE_THUMBS);

  useEffect(() => {
    if (maxStart <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setStartIndex((current) => (current >= maxStart ? 0 : current + 1));
    }, AUTO_SCROLL_MS);

    return () => clearInterval(timer);
  }, [maxStart]);

  useEffect(() => {
    if (startIndex > maxStart) {
      setStartIndex(0);
    }
  }, [maxStart, startIndex]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) {
      return;
    }

    const firstItem = row.firstElementChild;
    if (!(firstItem instanceof HTMLElement)) {
      return;
    }

    const rowStyles = window.getComputedStyle(row);
    const gap = parseFloat(rowStyles.columnGap || rowStyles.gap || "0") || 0;
    const step = firstItem.offsetWidth + gap;

    row.scrollTo({
      left: startIndex * step,
      behavior: "smooth",
    });
  }, [startIndex, images.length]);

  return (
    <div className={styles.productThumbCarousel} aria-label={`${title} thumbnails`}>
      <div ref={rowRef} className={styles.productThumbRow}>
        {images.map((thumbSrc, thumbIndex) => (
          <div className={styles.productThumb} key={`${title}-thumb-${thumbIndex}`} aria-hidden="true">
            <Image src={thumbSrc} alt="" fill className={styles.productThumbImage} />
          </div>
        ))}
      </div>
    </div>
  );
}
