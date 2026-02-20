import { getHomepageContent } from "@/lib/getHomepageContent";

export default async function Home() {
  const content = await getHomepageContent();

  return (
    <>
      <header className="site-header">
        <div className="shell nav">
          <a className="logo" href="#top">
            <span>SMT</span> Healthcare
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#benefits">Benefits</a>
            <a href="#videos">Demo Videos</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="shell hero-grid">
            <div>
              <p className="kicker">{content.hero.kicker}</p>
              <h1>{content.hero.title}</h1>
              <p>{content.hero.subtitle}</p>
              <div className="hero-actions">
                <a className="button primary" href={content.hero.primaryCta.href}>
                  {content.hero.primaryCta.label}
                </a>
                <a className="button secondary" href={content.hero.secondaryCta.href}>
                  {content.hero.secondaryCta.label}
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Value Highlights">
              <h2>Healthcare-Ready Outcomes</h2>
              <ul className="hero-list">
                {content.hero.metrics.map((metric) => (
                  <li key={metric.label}>
                    <strong>{metric.label}:</strong> {metric.value}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="shell">
            <h2>{content.about.title}</h2>
            <p className="section-lead">{content.about.text}</p>
          </div>
        </section>

        <section id="products" className="section">
          <div className="shell">
            <h2>{content.products.title}</h2>
            <p className="section-lead">{content.products.text}</p>
            <div className="card-grid three">
              {content.products.categories.map((category) => (
                <article className="card" key={category.title}>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="tag">{category.brand}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="shell">
            <h2>{content.services.title}</h2>
            <div className="card-grid three">
              {content.services.items.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="section">
          <div className="shell split">
            <div>
              <h2>{content.benefits.title}</h2>
              <ul className="benefits-list">
                {content.benefits.items.map((benefit) => (
                  <li key={benefit.title}>
                    <strong>{benefit.title}</strong>
                    <br />
                    {benefit.details}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Future CMS Integration</h3>
              <p>
                The homepage already uses a centralized content schema, so you can map
                these fields directly to Webflow CMS, WordPress custom post types, or
                another headless backend without changing layout code.
              </p>
            </div>
          </div>
        </section>

        <section id="videos" className="section">
          <div className="shell">
            <h2>{content.videos.title}</h2>
            <p className="section-lead">{content.videos.text}</p>
            <div className="card-grid two">
              {content.videos.demos.map((demo) => (
                <article className="card" key={demo.title}>
                  <h3>{demo.title}</h3>
                  <p>{demo.scenario}</p>
                  <p className="video-badge">Suggested runtime: {demo.length}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="shell split">
            <div>
              <h2>{content.contact.title}</h2>
              <p className="section-lead">{content.contact.text}</p>
              <p className="section-lead">
                <strong>Phone:</strong> {content.contact.phone}
                <br />
                <strong>Email:</strong> {content.contact.email}
              </p>
            </div>
            <div className="contact-wrap">
              <form className="form-grid">
                <input type="text" placeholder="Full Name" aria-label="Full Name" />
                <input type="email" placeholder="Work Email" aria-label="Work Email" />
                <input
                  type="text"
                  placeholder="Facility / Organization"
                  aria-label="Facility"
                />
                <textarea placeholder="Project details" aria-label="Project details" />
                <button type="submit" className="button primary">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          {new Date().getFullYear()} {content.companyName}. Ergonomic mounting systems
          for modern healthcare environments.
        </div>
      </footer>
    </>
  );
}
