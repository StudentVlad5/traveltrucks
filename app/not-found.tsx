"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/catalog");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-accent-red mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page not found</h2>
      <p className="text-gray-dark mb-8">
        The page you are looking for doesnt exist. You will be redirected to the
        catalog in 5 seconds.
      </p>
      <Link
        href="/catalog"
        className="px-8 py-4 bg-accent-red text-white rounded-full font-medium hover:bg-red-600 transition-colors"
      >
        Go to Catalog now
      </Link>
    </div>
  );
}
