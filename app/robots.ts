import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://your-camper-rent.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Не індексувати внутрішні API запити
        "/_next/", // Не індексувати службові файли Next.js
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
