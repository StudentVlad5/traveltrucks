import { Metadata } from "next";
import { getCamperById } from "@/helper/api/api";
import Script from "next/script";
import Features from "@/components/Features/Features";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const camper = await getCamperById(id);
  if (!camper) return { title: "Camper not found" };

  return {
    title: `${camper.name} | Rent for $${camper.price}`,
    description: camper.description.substring(0, 160),
    openGraph: {
      images: [camper.gallery[0]?.original],
    },
  };
}
type Props = {
  params: Promise<{ id: string }>;
};

export default async function CamperDetailPage(props: Props) {
  const { id } = await props.params;
  const camper = await getCamperById(id);

  if (!camper) return null;

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

  return (
    <>
      <Script
        id="camper-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Features initialData={camper} />
    </>
  );
}
