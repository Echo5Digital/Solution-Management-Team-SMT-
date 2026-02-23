import Link from "next/link";
import { homepageContent } from "@/content/homepage";
import styles from "./ContactUsPage.module.css";

export default function ContactUsPage() {
  const contact = homepageContent.contact || {};

  return (
    <main className={`page-main ${styles.pageMain}`}>
      <div className={styles.pageBackground} aria-hidden="true" />

      <section className="section shell">
        <article className="panel copy-panel single-page-panel">
          <p className="eyebrow">Contact US</p>
          <h1 className="page-title">Are you a customer who needs help?</h1>
          <p>
            Contact SMT today for expert guidance, onsite evaluations, and reliable ergonomic mounting solutions tailored to your needs.
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

      <section className="section shell contact-elegant">
        <article className="panel contact-elegant-card single-page-panel">
          <p className="company-line">{contact.company}</p>

          <div className="contact-elegant-grid">
            <a className="contact-elegant-item" href={`tel:${contact.phone}`}>
              <p className="contact-elegant-label">Phone</p>
              <p className="contact-elegant-value">{contact.phone}</p>
            </a>

            <a className="contact-elegant-item" href={`mailto:${contact.email}`}>
              <p className="contact-elegant-label">Email</p>
              <p className="contact-elegant-value">{contact.email}</p>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
