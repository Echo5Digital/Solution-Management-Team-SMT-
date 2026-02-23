"use client";

import styles from "./ContactSection.module.css";
import { homepageContent } from "@/content/homepage";

export default function ContactSection({ contact = homepageContent.contact } = {}) {
  const data = { ...homepageContent.contact, ...contact };
  const formData = { ...homepageContent.contact.form, ...(contact?.form || {}) };
  const fields = formData.fields || {};

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const values = new FormData(form);
    const name = values.get("name") || "";
    const email = values.get("email") || "";
    const phone = values.get("phone") || "";
    const organization = values.get("organization") || "";
    const message = values.get("message") || "";

    const subject = encodeURIComponent(`Website Inquiry from ${name || "SMT Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${organization}\n\nProject Details:\n${message}`,
    );

    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <section id="contact" className={`section shell ${styles.contactSection}`}>
      <article className={styles.contactCard}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <p className={styles.eyebrow}>{data.heading}</p>
            <h2>{data.heading}</h2>
            <p className={styles.company}>{data.company}</p>

            <div className={styles.contactBlocks}>
              <a className={styles.contactBlock} href={`tel:${data.phone}`}>
                <p>Phone</p>
                <span>{data.phone}</span>
              </a>

              <a className={styles.contactBlock} href={`mailto:${data.email}`}>
                <p>Email</p>
                <span>{data.email}</span>
              </a>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3>{formData.heading || "Send us a message"}</h3>
            <input className={styles.field} name="name" type="text" placeholder={fields.name || "Full Name"} required />
            <input
              className={styles.field}
              name="email"
              type="email"
              placeholder={fields.email || "Email Address"}
              required
            />
            <input className={styles.field} name="phone" type="tel" placeholder={fields.phone || "Phone Number"} />
            <input
              className={styles.field}
              name="organization"
              type="text"
              placeholder={fields.organization || "Organization"}
            />
            <textarea
              className={`${styles.field} ${styles.message}`}
              name="message"
              rows={4}
              placeholder={fields.message || "Tell us about your needs"}
              required
            />
            <button type="submit" className={styles.submit}>
              {formData.submitLabel || "Send Message"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
