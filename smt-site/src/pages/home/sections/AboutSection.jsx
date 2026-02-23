import Image from "next/image";
import Link from "next/link";
import { homepageContent } from "@/content/homepage";
import styles from "./AboutSection.module.css";

export default function AboutSection(
  { about = homepageContent.about, topBenefits = homepageContent.topBenefits ?? [] } = {},
) {
  const data = { ...homepageContent.about, ...about };
  const titleText = data.title?.trim() || data.heading?.trim() || "About US";
  const subtitleText = data.subtitle?.trim() || "";
  const showSubtitle = subtitleText && subtitleText.toLowerCase() !== titleText.toLowerCase();
  const stats = data.stats ?? [];

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`shell ${styles.aboutWrap}`}>
        <div className={styles.twoCol}>
          <div className={styles.copyCol}>
            {showSubtitle && (
              <p className={styles.subtitle}>{subtitleText}</p>
            )}
            <h2 className={styles.title}>
              {titleText}
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
                <video
                  className={styles.video}
                  src={data.video}
                  poster={data.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
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
