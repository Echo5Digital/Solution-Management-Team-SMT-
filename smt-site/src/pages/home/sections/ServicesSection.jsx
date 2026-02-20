import Image from "next/image";
import { homepageContent } from "@/content/homepage";

export default function ServicesSection({ services = homepageContent.services } = {}) {
  const data = { ...homepageContent.services, ...services };
  const detailSections = Array.isArray(data.detailSections) ? data.detailSections : [];

  return (
    <section id="services" className="section shell services-elegant">
      <article className="panel services-head-card">
        <p className="eyebrow">{data.heading}</p>
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </article>

      <article className="panel services-feature-card">
        <div className="services-feature-media">
          <Image src={data.introImage} alt="SMT services" fill className="media-image" />
        </div>
        <div className="services-feature-copy">
          <p className="services-feature-label">Coverage</p>
          <div className="services-chip-list">
            {detailSections.map((item) => (
              <span className="services-chip" key={item.heading}>
                {item.heading}
              </span>
            ))}
          </div>
        </div>
      </article>

      <div className="services-cards-grid">
        {detailSections.map((item, index) => (
          <article
            className={`panel service-elegant-card${index % 2 === 1 ? " is-reverse" : ""}`}
            key={item.heading}
          >
            <div className="service-elegant-content">
              <p className="service-elegant-index">{String(index + 1).padStart(2, "0")}</p>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>

              {item.bullets ? (
                <ul className="service-elegant-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {item.footnote ? <p className="service-elegant-footnote">{item.footnote}</p> : null}
            </div>

            <div className="service-elegant-media">
              <Image src={item.image} alt={item.heading} fill className="media-image" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
