import Link from "next/link";

export default function ContactUsPage() {
  return (
    <main className="page-main">
      <section className="section shell">
        <article className="panel copy-panel single-page-panel">
          <p className="eyebrow">Contact US</p>
          <h1 className="page-title">Contact Us</h1>
          <p>
            This is a dummy Contact Us page. Replace this section with your final form fields and
            API integration.
          </p>

          <div className="form-grid">
            <input className="field-control" type="text" placeholder="Your Name" />
            <input className="field-control" type="email" placeholder="Your Email" />
            <textarea className="field-control field-textarea" rows={5} placeholder="Message" />
          </div>

          <div className="hero-actions">
            <button className="button button-primary" type="button">
              Send Message
            </button>
            <Link className="button button-outline" href="/">
              Back Home
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
