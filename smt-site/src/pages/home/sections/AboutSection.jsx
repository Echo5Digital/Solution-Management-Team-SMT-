import Image from "next/image";

export default function AboutSection({ about, topBenefits = [] }) {
  return (
    <section id="about" className="section shell about-section">
      <article className="panel about-unified-card">
        <div className="about-unified-grid">
          <div className="about-unified-media">
            {about.video ? (
              <video
                className="about-media-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={about.image}
              >
                <source src={about.video} type="video/mp4" />
              </video>
            ) : (
              <Image src={about.image} alt="About SMT" fill className="media-image" />
            )}
          </div>

          <div className="about-unified-content">
            <p className="eyebrow">{about.heading}</p>
            <h2 className="about-title">{about.heading}</h2>
            <p className="about-text">{about.text}</p>

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
