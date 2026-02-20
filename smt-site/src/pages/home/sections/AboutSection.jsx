import Image from "next/image";
import { homepageContent } from "@/content/homepage";

export default function AboutSection(
  { about = homepageContent.about, topBenefits = homepageContent.topBenefits ?? [] } = {},
) {
  const data = { ...homepageContent.about, ...about };

  return (
    <section id="about" className="section shell about-section">
      <article className="panel about-unified-card">
        <div className="about-unified-grid">
          <div className="about-unified-media">
            {data.video ? (
              <video
                className="about-media-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={data.image}
              >
                <source src={data.video} type="video/mp4" />
              </video>
            ) : (
              <Image src={data.image} alt="About SMT" fill className="media-image" />
            )}
          </div>

          <div className="about-unified-content">
            <p className="eyebrow">{data.heading}</p>
            <h2 className="about-title">{data.heading}</h2>
            <p className="about-text">{data.text}</p>

            {topBenefits.length ? (
              <ul className="about-pill-list" aria-label="SMT benefits">
                {topBenefits.map((benefit) => (
                  <li key={benefit} className="about-pill">
                    {benefit}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </article>
    </section>
  );
}
