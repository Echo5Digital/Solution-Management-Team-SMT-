import Image from "next/image";
import { homepageContent } from "@/content/homepage";

export default function HeroSection({ hero = homepageContent.hero } = {}) {
  const data = { ...homepageContent.hero, ...hero };

  return (
    <section id="top" className="hero-shell">
      <article className="promo-banner">
        {data.video ? (
          <video
            key={data.video}
            className="banner-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={data.image}
          >
            <source src={data.video} type="video/mp4" />
          </video>
        ) : (
          <Image src={data.image} alt="SMT banner" fill priority className="banner-bg-image" />
        )}

        <div className="banner-overlay" />

        <div className="banner-grid">
          <div className="banner-layout">
            <div className="banner-copy">
              <p className="banner-top">{data.heading}</p>
              <h1 className="banner-main">{data.title}</h1>
              <p className="banner-sub">{data.subtitle}</p>

              <div className="hero-actions">
                <a className="button button-primary" href={data.primaryCta.href}>
                  {data.primaryCta.label}
                </a>
                <a className="button button-outline" href={data.secondaryCta.href}>
                  {data.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
