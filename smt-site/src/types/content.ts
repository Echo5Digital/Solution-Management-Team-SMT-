export type HeroMetric = {
  label: string;
  value: string;
};

export type ProductCategory = {
  title: string;
  description: string;
  brand: string;
};

export type ServiceItem = {
  title: string;
  details: string;
};

export type BenefitItem = {
  title: string;
  details: string;
};

export type VideoDemo = {
  title: string;
  length: string;
  scenario: string;
};

export type HomepageContent = {
  companyName: string;
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    metrics: HeroMetric[];
  };
  about: {
    title: string;
    text: string;
  };
  products: {
    title: string;
    text: string;
    categories: ProductCategory[];
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  benefits: {
    title: string;
    items: BenefitItem[];
  };
  videos: {
    title: string;
    text: string;
    demos: VideoDemo[];
  };
  contact: {
    title: string;
    text: string;
    phone: string;
    email: string;
  };
};
