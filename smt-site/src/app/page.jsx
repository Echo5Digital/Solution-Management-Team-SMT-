import Image from "next/image";
import { getHomepageContent } from "@/lib/getHomepageContent";

export default async function Home() {
  const content = await getHomepageContent();

  return (
    <>
      <div className="page-chrome" />

      <header className="top-nav">
        <div className="shell nav-inner">
          <a href="#top" className="logo-mark" aria-label="SMT Home">
            <span>SMT</span>
            <small>Solution Management Team</small>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {content.nav.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="cta-mini" href={content.hero.secondaryCta.href}>
            Quote
          </a>
        </div>
      </header>

      <main id="top" className="main-wrap">
        <section className="hero-shell">
          <div className="shell">
            <article className="promo-banner">
              <div className="banner-glow" />
              <div className="banner-grid">
                <div className="banner-copy">
                  <p className="banner-top">SMT- Solution Management Team</p>
                  <h1 className="banner-main">
                    We Provide Mounting Solutions for Your Business
                  </h1>
                  <p className="banner-sub">{content.hero.subtitle}</p>

                  <div className="hero-actions">
                    <a className="button button-primary" href={content.hero.primaryCta.href}>
                      {content.hero.primaryCta.label}
                    </a>
                    <a className="button button-outline" href={content.hero.secondaryCta.href}>
                      {content.hero.secondaryCta.label}
                    </a>
                  </div>
                </div>

                <div className="banner-art">
                  <Image
                    src={content.hero.image}
                    alt="SMT mounting solution"
                    fill
                    priority
                    className="hero-image"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="section shell split-panel">
          <article className="panel media-panel">
            <div className="media-box">
              <Image
                src={content.about.image}
                alt="About SMT"
                fill
                className="media-image"
              />
            </div>
          </article>
          <article className="panel copy-panel">
            <p className="eyebrow">{content.about.heading}</p>
            <h2>{content.about.heading}</h2>
            <p>{content.about.text}</p>
          </article>
        </section>

        <section id="products" className="section shell">
          <article className="panel section-head">
            <p className="eyebrow">{content.products.heading}</p>
            <h2>{content.products.heading}</h2>
            <p>{content.products.subtitle}</p>
          </article>

          <div className="card-grid products-grid">
            {content.products.items.map((item) => (
              <article className="panel product-card" key={item.heading}>
                <div className="product-media">
                  <Image src={item.image} alt={item.heading} fill className="media-image" />
                </div>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section shell">
          <div className="card-grid service-intro">
            <article className="panel copy-panel">
              <p className="eyebrow">{content.services.heading}</p>
              <h2>{content.services.heading}</h2>
              <p>{content.services.intro}</p>
            </article>
            <article className="panel media-panel">
              <div className="media-box">
                <Image
                  src={content.services.introImage}
                  alt="SMT services"
                  fill
                  className="media-image"
                />
              </div>
            </article>
          </div>

          <div className="service-stack">
            {content.services.detailSections.map((item) => (
              <article className="panel service-detail" key={item.heading}>
                <div className="service-content">
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>

                  {item.bullets ? (
                    <ul className="bullet-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {item.footnote ? <p>{item.footnote}</p> : null}
                </div>

                <div className="service-image-wrap">
                  <Image src={item.image} alt={item.heading} fill className="media-image" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section shell">
          <article className="panel contact-panel">
            <div>
              <p className="eyebrow">{content.contact.heading}</p>
              <h2>{content.contact.heading}</h2>
              <p className="company-line">{content.contact.company}</p>
            </div>

            <div className="contact-block">
              <p>
                <strong>Phone</strong>
                <br />
                {content.contact.phone}
              </p>
              <p>
                <strong>Email</strong>
                <br />
                {content.contact.email}
              </p>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>{new Date().getFullYear()} {content.companyName}</p>
        </div>
      </footer>
    </>
  );
}
