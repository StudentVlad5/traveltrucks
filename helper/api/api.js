import { BASE_URL } from "@/helper/CONST";

export async function getCamperById(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      if (!res.ok) return { items: [], total: 0 };
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getCampers() {
  try {
    const res = await fetch(BASE_URL, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch campers");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
