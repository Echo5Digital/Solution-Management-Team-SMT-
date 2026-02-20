import Image from "next/image";
import Link from "next/link";
import { getHomepageContent } from "@/lib/getHomepageContent";

export default async function AboutUsPage() {
  const content = await getHomepageContent();

  return (
    <main className="page-main">
      <section className="section shell split-panel">
        <article className="panel media-panel">
          <div className="media-box">
            <Image src={content.about.image} alt="About SMT" fill className="media-image" />
          </div>
        </article>
        <article className="panel copy-panel">
          <p className="eyebrow">{content.about.heading}</p>
          <h1 className="page-title">{content.about.heading}</h1>
          <p>{content.about.text}</p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/contact-us">
              Contact Us
            </Link>
            <Link className="button button-outline" href="/">
              Back Home
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
