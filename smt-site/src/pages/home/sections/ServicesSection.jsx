import Image from "next/image";
import Link from "next/link";
import { homepageContent } from "@/content/homepage";
import styles from "./ServicesSection.module.css";

export default function ServicesSection({ services = homepageContent.services } = {}) {
  const data = { ...homepageContent.services, ...services };
  const detailSections = Array.isArray(data.detailSections) ? data.detailSections : [];
  const featuredServices = detailSections.slice(0, 3);
  const introText = typeof data.intro === "string" ? data.intro.trim() : "";
  const introPreview =
    introText.length > 195 ? `${introText.slice(0, 192).trimEnd().replace(/[.,;:!?-]*$/, "")}...` : introText;
  const fallbackImages = [
    "/about_img.jpg",
    "/wallmount/772744-medical-computer-floor-stand-with-printer-tray-removebg-preview.png",
    "/wallmount/772248-wall-mounted-monitor-arm-removebg-preview.png",
  ];

  const resolveImage = (item, index) => {
    const image = item?.image || "";

    if (!image || image.startsWith("/images/smt/")) {
      return fallbackImages[index % fallbackImages.length];
    }

    return image;
  };

  return (
    <section id="services" className={`section shell ${styles.servicesFeatured}`}>
      <div className={styles.servicesFeaturedHead}>
        <h2 className={styles.servicesFeaturedTitle}>{data.heading}</h2>
        <Link href="/contact-us" className={styles.servicesFeaturedCta}>
          Learn More
        </Link>
      </div>
      <p className={styles.servicesFeaturedSubtitle}>{introPreview}</p>

      <div className={styles.servicesFeaturedGrid}>
        {featuredServices.map((item, index) => (
          <article className={styles.servicesFeaturedCard} key={item.heading}>
            <div className={styles.servicesFeaturedCardHead}>
              <h3>{item.heading}</h3>
              <span className={styles.servicesFeaturedCardIndex}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p className={styles.servicesFeaturedCardText}>{item.text}</p>

            <div className={styles.servicesFeaturedCardMedia}>
              <Image
                src={resolveImage(item, index)}
                alt={item.heading}
                fill
                sizes="(max-width: 899px) 100vw, 33vw"
                className={styles.servicesFeaturedCardImage}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
