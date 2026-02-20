import Image from "next/image";

export default function MediaSplitSection({
  imageSrc = "/wallmount/772248-wall-mounted-monitor-arm-removebg-preview.png",
  videoSrc = "/videos/Untitled video.mp4",
  reverse = false,
} = {}) {
  return (
    <section className="section shell after-products-media">
      <div className={`after-products-grid${reverse ? " reverse" : ""}`}>
        <article className="after-products-item">
          <div className="after-products-media-wrap">
            <Image src={imageSrc} alt="Wall mount showcase" fill className="after-products-image" />
          </div>
        </article>

        <article className="after-products-item">
          <div className="after-products-media-wrap">
            <video
              className="after-products-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </article>
      </div>
    </section>
  );
}
