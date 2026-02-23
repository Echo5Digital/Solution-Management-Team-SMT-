"use client";

import Image from "next/image";
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
        <div className={styles.inlineTopWrap}>
          <div className={styles.inlineTopCard}>
            <div className={styles.inlineLeft}>
              <h3>{formData.heading || "Request a Site Evaluation"}</h3>
              <div className={styles.inlineLine}>{fields.name || "Full Name"}</div>
              <div className={styles.inlineLine}>{fields.email || "Work Email"}</div>
              <div className={styles.inlineLine}>{fields.phone || "Phone Number"}</div>
              <div className={styles.inlineLine}>{fields.organization || "Organization"}</div>
              <p className={styles.inlineLabel}>{fields.message || "Tell us about your project"}</p>
           <button type="button" className={`ripple-button ${styles.inlineNext}`}>
  {formData.submitLabel || "Send Request"}
</button>

            </div>

            <div className={styles.inlineRight}>
              <div className={styles.inlineImageWrap}>
                <Image
                  src="/about-ban.jpg"
                  alt="Contact preview"
                  fill
                  sizes="(max-width: 800px) 70vw, 300px"
                  className={styles.inlineImage}
                />
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className={styles.contactGrid}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
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
            <button type="submit" className={`ripple-button ${styles.submit}`}>
              {formData.submitLabel || "Send Message"}
            </button>
          </form>
        </div> */}
      </article>
    </section>
  );
}
