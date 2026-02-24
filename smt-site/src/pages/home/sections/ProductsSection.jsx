import Image from "next/image";
import { homepageContent } from "@/content/homepage";

export default function ProductsSection({ products = homepageContent.products } = {}) {
  const data = { ...homepageContent.products, ...products };
  const items = Array.isArray(data.items) ? data.items : [];

  return (
    <section id="products" className="section shell products-showcase">
      <div className="products-copy">
        <h2>{data.heading}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div className="products-scroll-row">
        {items.map((item) => (
          <article className="product-showcase-card" key={item.heading}>
            <div className="product-showcase-info">
              <p className="product-showcase-kicker">SMT PRODUCT</p>
              <h3 className="product-showcase-item-title">{item.heading}</h3>
              <p className="product-showcase-link">Shop Now -&gt;</p>
            </div>

            <div className="product-showcase-media">
              <Image src={item.image} alt={item.heading} fill className="product-showcase-image" />
              {item.smallImage ? (
                <span className="product-showcase-small-wrap">
                  <Image
                    src={item.smallImage}
                    alt={`${item.heading} detail`}
                    fill
                    sizes="150px"
                    className="product-showcase-small-image"
                  />
                </span>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
