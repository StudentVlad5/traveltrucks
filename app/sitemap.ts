// app/sitemap.ts
import { MetadataRoute } from "next";
import { getCampers } from "@/helper/api/api";
import { Camper } from "@/types/truck";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://your-camper-rent.com"; // Замініть на ваш домен

  // 1. Отримуємо всі кемпери з API для створення посилань
  let campers: Camper[] = [];
  try {
    const res = await getCampers(); // Припустимо, повертає масив або об'єкт з даними
    campers = res.items || res;
  } catch (error) {
    console.error("Sitemap: Failed to fetch campers", error);
  }

  // 2. Створюємо записи для кожного кемпера
  const camperEntries = campers.map((camper) => ({
    url: `${baseUrl}/catalog/${camper.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Статичні сторінки
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/catalog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...camperEntries,
  ];
}
