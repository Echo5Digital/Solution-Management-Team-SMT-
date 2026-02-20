import Image from "next/image";

export default function ProductsSection({ products }) {
  return (
    <section id="products" className="section shell products-showcase">
      <div className="products-copy">
        <h2>{products.heading}</h2>
        <p>{products.subtitle}</p>
      </div>

      <div className="products-scroll-row">
        {products.items.map((item) => (
          <article className="product-showcase-card" key={item.heading}>
            <div className="product-showcase-info">
              <p className="product-showcase-kicker">SMT PRODUCT</p>
              <h3 className="product-showcase-item-title">{item.heading}</h3>
              <p className="product-showcase-link">Shop Now -&gt;</p>
            </div>

            <div className="product-showcase-media">
              <Image src={item.image} alt={item.heading} fill className="product-showcase-image" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
