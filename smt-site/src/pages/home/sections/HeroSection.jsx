import Image from "next/image";

export default function HeroSection({ hero }) {
  return (
    <section id="top" className="hero-shell">
      <article className="promo-banner">
        {hero.video ? (
          <video
            key={hero.video}
            className="banner-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={hero.image}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <Image src={hero.image} alt="SMT banner" fill priority className="banner-bg-image" />
        )}

        <div className="banner-overlay" />

        <div className="banner-grid">
          <div className="banner-layout">
            <div className="banner-copy">
              <p className="banner-top">{hero.heading}</p>
              <h1 className="banner-main">{hero.title}</h1>
              <p className="banner-sub">{hero.subtitle}</p>

              <div className="hero-actions">
                <a className="button button-primary" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </a>
                <a className="button button-outline" href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
