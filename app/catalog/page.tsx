import { Metadata } from "next";
import { getCampers } from "@/helper/api/api";
import Catalog from "@/components/CatalogPage/CatalogPage";
import { Camper } from "@/types/truck";
import { SEO_URL } from "@/helper/CONST";
export const dynamic = "force-dynamic";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const { total } = await getCampers();

  return {
    title: `Catalog (${total}) | TravelTrucks`,
    description:
      "Find your perfect campervan. Explore our wide range of vehicles for any adventure.",
    openGraph: {
      title: `TravelTrucks Catalog - ${total} Vehicles Available`,
      description: "Book your campervan today.",
      type: "website",
    },
  };
}

export default async function CatalogPage() {
  const data = await getCampers({});
  const items = data?.items || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Campervan Rental Catalog",
    itemListElement: items
      .slice(0, 10)
      .map((camper: Camper, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: camper.name,
          image: camper.gallery[0]?.original,
          description: camper.description.substring(0, 100) + "...",
          url: `${SEO_URL}/catalog/${camper.id}`,
        },
      })),
  };

  return (
    <>
      <Script
        id="catalog-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Catalog />
    </>
  );
}
