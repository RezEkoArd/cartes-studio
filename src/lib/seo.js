// SEO Configuration and Utilities
export const siteConfig = {
  name: "Cartes Studio",
  url: "https://cartesstudio.com",
  description:
    "Professional digital marketing and content creation services including TikTok, Instagram, livestreaming, and 3D animation",
  author: "Cartes Studio",
  locale: "id_ID",
  ogImage: "/logo.png",
  twitterHandle: "@cartesstudio",
};

// Generate structured data for different page types
export function generateBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    name: "Cartes Studio",
    description:
      "Professional digital marketing and content creation services including TikTok, Instagram, livestreaming, and 3D animation",
    url: "https://cartesstudio.com",
    telephone: "+62 878 8987 5535",
    email: "info@cartesstudio.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Gelatik VI No.1 blok G7, Pd. Kacang Tim.",
      addressLocality: "Pd. Aren",
      addressRegion: "Kota Tangerang Selatan, Banten",
      postalCode: "15226",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.2615",
      longitude: "106.7539",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    serviceArea: {
      "@type": "Country",
      name: "Indonesia",
    },
    sameAs: [
      "https://www.tiktok.com/@cartesstudio",
      "https://www.instagram.com/cartesstudio",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TikTok Content Creation",
            description:
              "Professional TikTok content creation services for viral marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instagram Management",
            description: "Complete Instagram content management and strategy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Livestreaming Services",
            description:
              "Professional livestreaming for product launches and promotions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3D Animation",
            description:
              "Creative 3D animation for branding and promotional content",
          },
        },
      ],
    },
  };
}

export function generateServiceSchema(serviceName, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Cartes Studio",
      url: "https://cartesstudio.com",
    },
    url: url,
    serviceType: "Digital Marketing",
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };
}

// SEO utility functions
export function generateSEOTags(pageData) {
  const {
    title = siteConfig.name,
    description = siteConfig.description,
    keywords = "",
    ogImage = siteConfig.ogImage,
    canonical = siteConfig.url,
    type = "website",
  } = pageData;

  return {
    title: title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`,
    description,
    keywords,
    ogImage: ogImage.startsWith("http")
      ? ogImage
      : `${siteConfig.url}${ogImage}`,
    canonical,
    type,
  };
}
