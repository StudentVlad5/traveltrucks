// app/sitemap.ts
import { MetadataRoute } from "next";
import { getCampers } from "@/helper/api/api";
import { Camper } from "@/types/truck";
import { SEO_URL } from "@/helper/CONST";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let campers: Camper[] = [];
  try {
    const res = await getCampers();
    campers = res.items || res;
  } catch (error) {
    console.error("Sitemap: Failed to fetch campers", error);
  }

  const camperEntries = campers.map((camper) => ({
    url: `${SEO_URL}/catalog/${camper.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SEO_URL,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${SEO_URL}/catalog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...camperEntries,
  ];
}
