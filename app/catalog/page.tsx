import { Metadata } from "next";
import { getCampers } from "@/helper/api/api";
import Catalog from "@/components/CatalogPage/CatalogPage";
import { Camper } from "@/types/truck";
import { SEO_URL } from "@/helper/CONST";
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCampers();
  const items = data.items.slice(0, 10);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Campervan Rental Catalog",
    itemListElement: items.map((camper: Camper, index: number) => ({
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

  return {
    title: `Catalog (${data.total}) | TravelTrucks`,
    description:
      "Find your perfect campervan. Explore our wide range of vehicles for any adventure.",
    openGraph: {
      title: `TravelTrucks Catalog - ${data.total} Vehicles Available`,
      description: "Book your campervan today.",
      type: "website",
    },
    other: {
      "application/ld+json": JSON.stringify(jsonLd),
    },
  };
}

export default async function CatalogPage() {
  return <Catalog />;
}
