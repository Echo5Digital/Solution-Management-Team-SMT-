import type { HomepageContent } from "@/types/content";

export const homepageContent: HomepageContent = {
  companyName: "Solution Management Team",
  hero: {
    kicker: "Healthcare Ergonomic Specialists",
    title: "Safer, Smarter Clinical Workspaces Built Around Care Teams",
    subtitle:
      "SMT provides ergonomic mounting systems and lifecycle support for hospitals, clinics, and medical offices that need reliable, clean, and adaptable workstations.",
    primaryCta: { label: "Request Free Evaluation", href: "#contact" },
    secondaryCta: { label: "Explore Products", href: "#products" },
    metrics: [
      { label: "Trusted Brands", value: "Humanscale, Ergotron, Capsa" },
      { label: "Service Focus", value: "Install + Bi-Annual Maintenance" },
      { label: "Primary Market", value: "Hospitals, Clinics, Medical Offices" },
    ],
  },
  about: {
    title: "About SMT",
    text: "We help healthcare facilities deploy ergonomic wall mounts, monitor arms, CPU holders, keyboard trays, and workstation accessories that improve comfort, reduce strain, and support efficient patient care. Our team handles planning, installation, and long-term upkeep.",
  },
  products: {
    title: "Product Categories",
    text: "Designed to be headless-friendly: each item can be managed from a CMS collection and rendered here without redesign work.",
    categories: [
      {
        title: "Wall Mount Workstations",
        description:
          "Space-saving wall configurations that keep charting stations clean and accessible.",
        brand: "Ergotron",
      },
      {
        title: "Monitor Arms",
        description:
          "Flexible arm systems for imaging, nursing stations, and multi-display workflows.",
        brand: "Humanscale",
      },
      {
        title: "CPU Holders & Printer Shelves",
        description:
          "Integrated hardware support built for durability, cable management, and easy servicing.",
        brand: "Capsa",
      },
      {
        title: "Keyboard Trays",
        description:
          "Ergonomic tray systems that help clinicians maintain neutral posture during charting.",
        brand: "Humanscale",
      },
      {
        title: "Medical Carts & Mobile Solutions",
        description:
          "Mobile mounting options that move with care teams across patient areas.",
        brand: "Capsa",
      },
      {
        title: "Accessory Ecosystem",
        description:
          "Task lights, cable channels, and add-on modules for complete workstation setups.",
        brand: "Ergotron",
      },
    ],
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Free Evaluation",
        details:
          "On-site or remote workspace assessment with recommendations by room type and workflow.",
      },
      {
        title: "Professional Installation",
        details:
          "Code-conscious, low-disruption implementation by trained installation specialists.",
      },
      {
        title: "Bi-Annual Maintenance",
        details:
          "Routine inspections, adjustments, and replacement planning to keep systems reliable.",
      },
    ],
  },
  benefits: {
    title: "Why Healthcare Teams Choose SMT",
    items: [
      {
        title: "Built for Clinical Reality",
        details:
          "Layouts are planned around day-to-day clinician movement, sanitation needs, and uptime requirements.",
      },
      {
        title: "Brand-Agnostic Expertise",
        details:
          "We match Humanscale, Ergotron, and Capsa products to your use case instead of forcing one-size setups.",
      },
      {
        title: "Future-Proof Product Catalog",
        details:
          "New products, specs, and media can be added through CMS entries without redesigning templates.",
      },
    ],
  },
  videos: {
    title: "AI Product Demo Video Plan",
    text: "Recommended as 5-8 short clips (15-45 seconds) for product pages and sales follow-up.",
    demos: [
      {
        title: "Monitor Arm Range of Motion",
        length: "25s",
        scenario: "Nurse station positioning and posture improvement.",
      },
      {
        title: "Wall Mount Installation Snapshot",
        length: "40s",
        scenario: "Fast, clean installation sequence in active care area.",
      },
      {
        title: "CPU Holder + Cable Management",
        length: "20s",
        scenario: "Before/after cleanliness and maintenance access.",
      },
      {
        title: "Keyboard Tray Ergonomic Setup",
        length: "18s",
        scenario: "Correct wrist positioning for charting workflows.",
      },
      {
        title: "End-to-End Room Transformation",
        length: "45s",
        scenario: "Complete workstation upgrade in outpatient clinic.",
      },
    ],
  },
  contact: {
    title: "Talk with the SMT Team",
    text: "Share your facility type and workstation goals. We will suggest the right mix of products and service scope.",
    phone: "(866) 754-6875",
    email: "info@solutionmanagementteam.com",
  },
};
