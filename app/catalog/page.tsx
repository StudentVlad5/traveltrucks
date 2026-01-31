import { Metadata } from "next";
import { getCampers } from "@/helper/api/api";
import Catalog from "@/components/CatalogPage/CatalogPage";
import { Camper } from "@/types/truck";
import { SEO_URL } from "@/helper/CONST";
export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const { total } = await getCampers(resolvedParams);

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

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const resolvedParams = await searchParams;
  const data = await getCampers(resolvedParams);
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Catalog />
    </>
  );
}
