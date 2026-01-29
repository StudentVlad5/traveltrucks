import { SEO_URL } from "@/helper/CONST";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Не індексувати внутрішні API запити
        "/_next/", // Не індексувати службові файли Next.js
      ],
    },
    sitemap: `${SEO_URL}/sitemap.xml`,
  };
}
