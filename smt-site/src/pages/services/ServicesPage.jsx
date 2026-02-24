import { getHomepageContent } from "@/lib/getHomepageContent";
import ServicesSection from "@/pages/home/sections/ServicesSection";

export default async function ServicesPage() {
  const content = await getHomepageContent();

  return (
    <main className="page-main">
      <div className="shell">
        <ServicesSection services={content.services} showCta={false} />
      </div>
    </main>
  );
}
