import Image from "next/image";
import Link from "next/link";
import { getHomepageContent } from "@/lib/getHomepageContent";

export default async function AboutUsPage() {
  const content = await getHomepageContent();
  const pageData = content.aboutPage ?? {};

  const heading = pageData.heading ?? content.about?.heading ?? "About US";
  const title = pageData.title ?? heading;
  const description = pageData.text ?? content.about?.text ?? "";
  const strengths = pageData.strengths?.length ? pageData.strengths : content.topBenefits ?? [];

  const missionHeading = pageData.missionHeading ?? content.about?.missionHeading ?? "Our Mission";
  const missionText =
    pageData.missionText ??
    content.about?.missionText ??
    "Deliver safe, ergonomic, and durable mounting environments that support efficient care teams.";
  const missionPoints = pageData.missionPoints ?? [];

  const approachEyebrow = pageData.approachEyebrow ?? "Work With SMT";
  const approachTitle = pageData.approachTitle ?? "Plan, Install, Maintain";
  const approachText =
    pageData.approachText ??
    "From evaluation through maintenance, SMT supports the full lifecycle of ergonomic mounting solutions.";
  const approachPoints = pageData.approachPoints ?? [];

  const mediaImage = pageData.image ?? content.about?.image;
  const mediaVideo = pageData.video ?? content.about?.video;

  return (
    <main className="page-main">
      <section className="section shell about-section">
        <article className="panel about-unified-card">
          <div className="about-unified-grid">
            <div className="about-unified-media">
              {mediaVideo ? (
                <video
                  className="about-media-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={mediaImage}
                >
                  <source src={mediaVideo} type="video/mp4" />
                </video>
              ) : (
                <Image src={mediaImage} alt="About SMT" fill className="media-image" />
              )}
            </div>

            <div className="about-unified-content">
              <p className="eyebrow">{heading}</p>
              <h1 className="about-title">{title}</h1>
              <p className="about-text">{description}</p>

              {strengths.length ? (
                <ul className="about-pill-list" aria-label="SMT strengths">
                  {strengths.map((strength) => (
                    <li key={strength} className="about-pill">
                      {strength}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </article>
      </section>

      <section className="section shell split-panel">
        <article className="panel copy-panel">
          <p className="eyebrow">{missionHeading}</p>
          <h2>{missionHeading}</h2>
          <p>{missionText}</p>

          {missionPoints.length ? (
            <ul className="bullet-list">
              {missionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </article>

        <article className="panel copy-panel">
          <p className="eyebrow">{approachEyebrow}</p>
          <h2>{approachTitle}</h2>
          <p>{approachText}</p>

          {approachPoints.length ? (
            <ul className="bullet-list">
              {approachPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}

          <div className="hero-actions">
            <Link className="button button-primary" href="/contact-us">
              Contact Us
            </Link>
            <Link className="button button-outline" href="/SmtProducts/Quote">
              Request Quote
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
