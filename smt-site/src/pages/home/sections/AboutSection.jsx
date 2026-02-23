"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { homepageContent } from "@/content/homepage";
import styles from "./AboutSection.module.css";

export default function AboutSection(
  { about = homepageContent.about, topBenefits = homepageContent.topBenefits ?? [] } = {},
) {
  const data = { ...homepageContent.about, ...about };
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const stats = data.stats ?? [];

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnded = () => setIsPlaying(false);
  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`shell ${styles.aboutWrap}`}>
        <div className={styles.twoCol}>
          <div className={styles.copyCol}>
            {data.subtitle && (
              <p className={styles.subtitle}>{data.subtitle}</p>
            )}
            <h2 className={styles.title}>
              {data.title || data.heading}
            </h2>
            <p className={styles.text}>{data.text}</p>
            {topBenefits.length > 0 && (
              <ul className={styles.pillList} aria-label="SMT benefits">
                {topBenefits.slice(0, 4).map((benefit) => (
                  <li key={benefit} className={styles.pill}>
                    {benefit}
                  </li>
                ))}
              </ul>
            )}
            <Link href="/about-us" className={`ripple-button ${styles.readMore}`}>
              Read More
            </Link>
          </div>

          <div className={styles.mediaCol}>
            <div className={styles.videoWrap}>
              {data.video ? (
                <>
                  <video
                    ref={videoRef}
                    className={styles.video}
                    src={data.video}
                    poster={data.image}
                    preload="metadata"
                    loop
                    playsInline
                    onEnded={handleVideoEnded}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                  />
                  <button
                    type="button"
                    className={styles.playOverlay}
                    onClick={toggleVideo}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    aria-hidden={isPlaying}
                  >
                    <span className={styles.playIcon} aria-hidden>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                </>
              ) : (
                <div className={styles.videoFallback}>
                  <Image src={data.image} alt="About SMT" fill className={styles.mediaImage} />
                </div>
              )}
            </div>

            {stats.length > 0 && (
              <div className={styles.statsGrid}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.statCard}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
