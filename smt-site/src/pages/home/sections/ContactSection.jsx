"use client";

import styles from "./ContactSection.module.css";
import { homepageContent } from "@/content/homepage";

export default function ContactSection({ contact = homepageContent.contact } = {}) {
  const data = { ...homepageContent.contact, ...contact };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const values = new FormData(form);
    const name = values.get("name") || "";
    const email = values.get("email") || "";
    const message = values.get("message") || "";

    const subject = encodeURIComponent(`Website Inquiry from ${name || "SMT Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`shell ${styles.contactInner}`}>

        {/* Left — info */}
        <div className={styles.infoSide}>
          <h2 className={styles.infoHeading}>Get in Touch</h2>
          <p className={styles.infoSub}>
            Have a project in mind or need expert advice on mounting solutions? We&rsquo;d love to hear from you.
          </p>
          <ul className={styles.contactList}>
            {data.email && (
              <li>
                <EnvelopeIcon />
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </li>
            )}
            {data.phone && (
              <li>
                <PhoneIcon />
                <a href={`tel:${data.phone.replace(/\s/g, "")}`}>{data.phone}</a>
              </li>
            )}
          </ul>
        </div>

        {/* Right — form card */}
        <div className={styles.formCard}>
          <h3 className={styles.formHeading}>Say Something</h3>
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <input className={styles.field} name="name" type="text" placeholder="Your Name..." required />
            <input className={styles.field} name="email" type="email" placeholder="Your Mail..." required />
            <textarea
              className={`${styles.field} ${styles.message}`}
              name="message"
              rows={4}
              placeholder="Message..."
              required
            />
            <button type="submit" className={`ripple-button ${styles.sendBtn}`}>
              Send
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
