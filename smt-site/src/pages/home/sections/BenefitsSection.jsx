"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { homepageContent } from "@/content/homepage";
import styles from "./BenefitsSection.module.css";

export default function BenefitsSection({ benefits = homepageContent.benefits } = {}) {
  const data = { ...homepageContent.benefits, ...benefits };
  const items = Array.isArray(data.items) ? data.items : [];
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const hasMedia = data.image || data.video;

  return (
    <section id="benefits" className={`section shell ${styles.benefitsSection}`}>
      <div className={styles.benefitsHead}>
        <p className={styles.eyebrow}>Benefits</p>
        <h2>{data.heading}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div className={styles.benefitsGrid}>
        {items.map((item) => (
          <article key={item.title} className={styles.benefitCard}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      {hasMedia && (
        <div className={styles.benefitsMediaRow}>
          {data.image && (
            <div className={styles.benefitsMediaItem}>
              <div className={styles.benefitsMediaWrap}>
                <Image src={data.image} alt="Why Choose SMT" fill className={styles.benefitsMediaImage} />
              </div>
            </div>
          )}
          {data.video && (
            <div className={styles.benefitsMediaItem}>
              <div className={styles.benefitsMediaWrap}>
                <video
                  ref={videoRef}
                  className={styles.benefitsVideo}
                  src={data.video}
                  poster={data.image}
                  preload="metadata"
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />
                <button
                  type="button"
                  className={styles.benefitsPlayOverlay}
                  onClick={toggleVideo}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  aria-hidden={isPlaying}
                >
                  <span className={styles.benefitsPlayIcon} aria-hidden>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
