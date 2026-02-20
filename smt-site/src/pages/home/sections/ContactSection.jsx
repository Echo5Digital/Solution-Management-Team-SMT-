import { homepageContent } from "@/content/homepage";

export default function ContactSection({ contact = homepageContent.contact } = {}) {
  const data = { ...homepageContent.contact, ...contact };

  return (
    <section id="contact" className="section shell contact-elegant">
      <article className="panel contact-elegant-card">
        <div className="contact-elegant-top">
          <div>
            <p className="eyebrow">{data.heading}</p>
            <h2>{data.heading}</h2>
            <p className="company-line">{data.company}</p>
          </div>

          <a className="button button-primary" href={`mailto:${data.email}`}>
            Send Email
          </a>
        </div>

        <div className="contact-elegant-grid">
          <a className="contact-elegant-item" href={`tel:${data.phone}`}>
            <p className="contact-elegant-label">Phone</p>
            <p className="contact-elegant-value">{data.phone}</p>
          </a>

          <a className="contact-elegant-item" href={`mailto:${data.email}`}>
            <p className="contact-elegant-label">Email</p>
            <p className="contact-elegant-value">{data.email}</p>
          </a>
        </div>
      </article>
    </section>
  );
}
