export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="section shell contact-elegant">
      <article className="panel contact-elegant-card">
        <div className="contact-elegant-top">
          <div>
            <p className="eyebrow">{contact.heading}</p>
            <h2>{contact.heading}</h2>
            <p className="company-line">{contact.company}</p>
          </div>

          <a className="button button-primary" href={`mailto:${contact.email}`}>
            Send Email
          </a>
        </div>

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
  );
}
