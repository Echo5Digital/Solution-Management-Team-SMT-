import { getHomepageContent } from "@/lib/getHomepageContent";
import HeroSection from "@/pages/home/sections/HeroSection";
import AboutSection from "@/pages/home/sections/AboutSection";
import ProductsSection from "@/pages/home/sections/ProductsSection";
import MediaSplitSection from "@/pages/home/sections/MediaSplitSection";
import ServicesSection from "@/pages/home/sections/ServicesSection";
import BenefitsSection from "@/pages/home/sections/BenefitsSection";
import ContactSection from "@/pages/home/sections/ContactSection";
import styles from "./HomePage.module.css";

export default async function HomePage() {
  const content = await getHomepageContent();

  return (
    <main className={`main-wrap ${styles.homeResponsive}`}>
      <HeroSection hero={content.hero} />
      <AboutSection about={content.about} topBenefits={content.topBenefits} />
      <ProductsSection products={content.products} />
      <MediaSplitSection
        imageSrc="/wallmount/772248-wall-mounted-monitor-arm-removebg-preview.png"
        videoSrc="/videos/Untitled video.mp4"
      />
      <MediaSplitSection
        imageSrc="/wallmount/772264-01-removebg-preview.png"
        videoSrc="/videos/Untitled video (2).mp4"
        reverse
      />
      <ServicesSection services={content.services} />
      <BenefitsSection benefits={content.benefits} />
      <ContactSection contact={content.contact} />
    </main>
  );
}
