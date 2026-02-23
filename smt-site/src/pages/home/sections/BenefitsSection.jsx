import { homepageContent } from "@/content/homepage";
import styles from "./BenefitsSection.module.css";

const NUMBER_MEDIA = [
  "/about-ban.jpg",
  "/about_img.jpg",
  "/wallmount/flameonepage-img-970x647-02.webp",
  "/wallmount/flameonepage-img-970x647-05.webp",
  "/about-ban.jpg",
  "/about-ban.jpg",
];

export default function BenefitsSection({ benefits = homepageContent.benefits } = {}) {
  const data = { ...homepageContent.benefits, ...benefits };
  const items = Array.isArray(data.items) ? data.items : [];

  return (
    <section id="benefits" className={`section shell ${styles.benefitsSection}`}>
      <div className={styles.benefitsHead}>
        <h2>{data.heading}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div className={styles.benefitsTimeline}>
        {items.map((item, index) => {
          const number = String(index + 1).padStart(2, "0");
          const reverse = index % 2 === 1;

          return (
            <article key={item.title} className={`${styles.timelineRow}${reverse ? ` ${styles.isReverse}` : ""}`}>
              <span
                className={styles.timelineNumber}
                style={{ backgroundImage: `url('${NUMBER_MEDIA[index % NUMBER_MEDIA.length]}')` }}
                aria-hidden
              >
                {number}
              </span>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
