import { BASE_URL } from "@/helper/CONST";
import { cache } from "react";

export const getCamperById = cache(async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      return { total: 0, items: [] };
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching camper ${id}:`, error);
    return null;
  }
});

export const getCampers = cache(async (searchParams) => {
  try {
    const cleanParams = { ...searchParams };

    const params = new URLSearchParams(cleanParams);
    const res = await fetch(`${BASE_URL}?${params.toString()}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { total: 0, items: [] };

    return res.json();
  } catch (error) {
    console.error("Error fetching campers:", error);
    return { items: [], total: 0 };
  }
});
