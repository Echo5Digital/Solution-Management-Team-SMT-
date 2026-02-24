import Image from "next/image";
import Link from "next/link";
import { getHomepageContent } from "@/lib/getHomepageContent";
import ProductThumbCarousel from "./ProductThumbCarousel";
import ProductFooterCarousel from "./ProductFooterCarousel";
import styles from "./ProductsPage.module.css";

const DEFAULT_PRODUCT_IMAGE = "/wallmount/04-removebg-preview.png";
const BANNER_VIDEO = "/videos/Untitled video (4).mp4";

export default async function ProductsPage() {
  const content = await getHomepageContent();
  const products = content.products ?? {};
  const heading = products.heading ?? "Products";
  const subtitle = products.subtitle ?? "";
  const items = Array.isArray(products.items) ? products.items : [];
  const bannerTitle = heading === "Products" ? "Ergonomic Mounting Products" : heading;

  return (
    <main className={`page-main ${styles.pageMain}`}>
      <section className={styles.bannerSection}>
        <div className={styles.bannerShell}>
          <article className={styles.bannerCard}>
            <div className={styles.bannerCopy}>
              <p className={styles.bannerEyebrow}>SMT Product Catalog</p>
              <h1 className={styles.bannerTitle}>{bannerTitle}</h1>
              {subtitle ? <p className={styles.bannerText}>{subtitle}</p> : null}

              <div className={styles.actionRow}>
                <Link className="button button-primary" href="/SmtProducts/Quote">
                  Request Quote
                </Link>
                <Link className="button button-outline" href="/contact-us">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className={styles.circleStage} aria-hidden="true">
              <div className={styles.mediaCircle}>
                <video
                  className={styles.circleVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/image.png"
                >
                  <source src={BANNER_VIDEO} type="video/mp4" />
                </video>
              </div>
              <span className={styles.circleRing} />
            </div>
          </article>
        </div>
      </section>

      <section className={`section shell ${styles.productsSection}`}>
        <div className={styles.productsList}>
          {items.map((item, index) => {
            const title = item?.heading ?? `Product ${index + 1}`;
            const description = item?.text ?? "";
            const image = item?.image ?? DEFAULT_PRODUCT_IMAGE;
            const thumbCandidates = [
              item?.thumbImages?.[0],
              item?.thumbImages?.[1],
              item?.thumbImages?.[2],
              item?.thumbImages?.[3],
              item?.thumbImage,
              items[(index + 1) % items.length]?.image,
              items[(index + 2) % items.length]?.image,
              items[(index + 3) % items.length]?.image,
              image,
            ].filter(Boolean);
            while (thumbCandidates.length < 4) {
              thumbCandidates.push(image);
            }
            const thumbImages = thumbCandidates.slice(0, 4);
            const indexLabel = String(index + 1).padStart(2, "0");

            return (
              <article className={styles.productRow} key={`${title}-${index}`}>
                <div className={styles.productText}>
                  <p className={styles.productKicker}>SMT Product {indexLabel}</p>
                  <h2 className={styles.productTitle}>{title}</h2>
                  {description ? <p className={styles.productDescription}>{description}</p> : null}
                </div>

                <div className={styles.productMedia}>
                  <div className={styles.productMediaMain}>
                    <Image src={image} alt={title} fill className={styles.productImage} />
                  </div>
                  <ProductThumbCarousel thumbImages={thumbImages} title={title} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ProductFooterCarousel />
    </main>
  );
}
