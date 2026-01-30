import { Metadata } from "next";
import { getCamperById } from "@/helper/api/api";
import Features from "@/components/Features/Features";
import { SEO_URL } from "@/helper/CONST";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const camper = await getCamperById(id);

  if (!camper) {
    return { title: "Camper not found" };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: camper.name,
    image: camper.gallery.map((img: { original: string }) => img.original),
    description: camper.description,
    offers: {
      "@type": "Offer",
      price: camper.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: camper.rating,
      reviewCount: camper.reviews.length,
    },
  };

  return {
    title: `${camper.name} | TravelTrucks`,
    description: camper.description.substring(0, 160),
    metadataBase: new URL(SEO_URL),

    openGraph: {
      title: `${camper.name} | Rent for $${camper.price}`,
      description: camper.description.substring(0, 160),
      images: [
        {
          url: camper.gallery[0]?.original || "/hero.webp",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },

    other: {
      "application/ld+json": JSON.stringify(jsonLd),
    },
  };
}

export default async function CamperDetailPage() {
  return <Features />;
}
