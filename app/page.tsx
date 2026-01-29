import { Hero } from "@/components/Hero/Hero";
import { SEO_URL } from "@/helper/CONST";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TravelTrucks | Rent the best campervans in Ukraine",
  description:
    "Find the perfect campervan for your next road trip adventure with TravelTrucks.",
  openGraph: {
    title: "TravelTrucks | Campervan Rental",
    description: "Rent affordable and comfortable campervans.",
    images: [{ url: "/hero.webp" }],
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TravelTrucks",
    url: SEO_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO_URL}/catalog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />;
    </>
  );
}
