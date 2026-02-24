"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./ProductsPage.module.css";

const VISIBLE_THUMBS = 3;
const AUTO_SCROLL_MS = 2600;

export default function ProductThumbCarousel({ thumbImages = [], title = "Product" }) {
  const images = useMemo(() => thumbImages.filter(Boolean), [thumbImages]);
  const [startIndex, setStartIndex] = useState(0);
  const maxStart = Math.max(0, images.length - VISIBLE_THUMBS);
  const visibleImages = images.slice(startIndex, startIndex + VISIBLE_THUMBS);

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

  return (
    <div className={styles.productThumbCarousel} aria-label={`${title} thumbnails`}>
      <div className={styles.productThumbRow} aria-hidden="true">
        {visibleImages.map((thumbSrc, thumbIndex) => (
          <div className={styles.productThumb} key={`${title}-thumb-${startIndex}-${thumbIndex}`}>
            <Image src={thumbSrc} alt="" fill className={styles.productThumbImage} />
          </div>
        ))}
      </div>
    </div>
  );
}
