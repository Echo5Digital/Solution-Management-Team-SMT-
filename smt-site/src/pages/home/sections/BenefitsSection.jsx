import { homepageContent } from "@/content/homepage";
import styles from "./BenefitsSection.module.css";

export default function BenefitsSection({ benefits = homepageContent.benefits } = {}) {
  const data = { ...homepageContent.benefits, ...benefits };
  const items = Array.isArray(data.items) ? data.items : [];

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
    </section>
  );
}
