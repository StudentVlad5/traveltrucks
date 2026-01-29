import { Hero } from "@/components/Hero/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TravelTrucks | Rent the best campervans in Ukraine",
  description:
    "Find the perfect campervan for your next road trip adventure with TravelTrucks.",
  openGraph: {
    title: "TravelTrucks | Campervan Rental",
    description: "Rent affordable and comfortable campervans.",
    images: [{ url: "/og-main.jpg" }],
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TravelTrucks",
    url: "https://your-domain.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://your-domain.com/catalog?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      return <Hero />;
    </>
  );
}
