import Image from "next/image";
import { getHomepageContent } from "@/lib/getHomepageContent";
import ServicesSection from "@/pages/home/sections/ServicesSection";
import styles from "./ServicesPage.module.css";

export default async function ServicesPage() {
  const content = await getHomepageContent();

  return (
    <main className={`main-wrap ${styles.pageMain}`}>
      <section className="hero-shell">
        <article className={`promo-banner ${styles.servicesHero}`}>
          <Image src="/services.jpg" alt="Our Services" fill priority className={`banner-bg-image ${styles.servicesHeroImage}`} />

          <div className="banner-grid">
            <div className="banner-layout">
              <div className={`banner-copy ${styles.servicesHeroCopy}`}>
                <h1 className={`banner-main ${styles.servicesHeroTitle}`}>OUR SERVICES</h1>
                <p className={`banner-sub ${styles.servicesHeroSubtitle}`}>
                  Delivering reliable solutions tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="section shell">
        <article className={`panel copy-panel single-page-panel ${styles.servicesIntroCard}`}>
          <p className={styles.servicesIntroText}>
            There are various mounting solutions available to help you efficiently organize your workspace by securely
            mounting monitors, keyboards, CPUs, and printers. These systems free up valuable desk space, creating a
            cleaner and more productive environment. By elevating your equipment, you can position screens at a
            comfortable eye level, reducing neck and shoulder strain while promoting better posture throughout the day.
          </p>
          <p className={styles.servicesIntroText}>
            Adjustable and articulating arms provide flexibility to move and reposition your devices as needed,
            helping you avoid staying in one position for too long. In addition, built-in cable management features
            reduce clutter by organizing loose cables on your desk and floor. Overall, mounting solutions enhance
            comfort, improve workspace organization, and create a more professional and ergonomic setup.
          </p>
        </article>
      </section>

      <div className="shell">
        <ServicesSection
          services={content.services}
          showCta={false}
          showHeading={false}
          showIntro={false}
          stackCards={true}
        />
      </div>
    </main>
  );
}
