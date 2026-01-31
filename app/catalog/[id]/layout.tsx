"use client";
import { fetchCamper } from "@/store/Camper/camperThunks";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import { Rating } from "@/components/Rating/Rating";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { BookingForm } from "@/components/BookingForm/BookingForm";
import { useRouter } from "next/navigation";
import { CamperDetailsSkeleton } from "@/components/Skeletons/CamperDetailsSkeleton";

export default function CamperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();
  const pathname = usePathname();
  const isReviews = useMemo(() => pathname.includes("reviews"), [pathname]);
  const router = useRouter();
  const {
    item: camper,
    isLoading,
    error,
  } = useAppSelector((state) => state.camper);
  const dispatch = useAppDispatch();

  const navigationLinks = useMemo(
    () => (
      <div className="border-b border-gray-soft mb-[56px] flex gap-10">
        <Link
          href={`/catalog/${id}`}
          className={`pb-6 border-b-4 font-semibold text-xl transition-all duration-200 ${
            !isReviews
              ? "border-accent-red text-main"
              : "border-transparent text-gray-dark hover:text-main"
          }`}
        >
          Features
        </Link>
        <Link
          href={`/catalog/${id}/reviews`}
          className={`pb-6 border-b-4 font-semibold text-xl transition-all duration-200 ${
            isReviews
              ? "border-accent-red text-main"
              : "border-transparent text-gray-dark hover:text-main"
          }`}
        >
          Reviews
        </Link>
      </div>
    ),
    [id, isReviews],
  );

  useEffect(() => {
    if (id && camper?.id !== id) {
      dispatch(fetchCamper(id as string));
    }
  }, [dispatch, id, camper?.id]);

  useEffect(() => {
    if (error?.includes("404")) {
      router.replace("/404");
    }
  }, [error, router]);

  useEffect(() => {
    if (camper?.id) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [camper?.id]);

  if (error)
    return (
      <div className="container mx-auto px-4 pt-[48px] md:px-16 text-red-500">
        {error}
      </div>
    );
  if (isLoading || !camper) {
    return <CamperDetailsSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 md:px-16  pt-[48px] pb-[80px]">
      {camper && <Rating camper={camper} variant="details" />}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${camper?.gallery?.length > 3 ? "md:grid-cols-4" : "md:grid-cols-3"} gap-4 mb-10`}
      >
        {camper?.gallery.map((img, index) => (
          <div
            key={index}
            className="relative h-[310px] rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              loading="eager"
              src={img?.original}
              alt={`${camper?.name} photo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      <p className="text-gray-dark text-lg leading-[1.5] mb-10 max-w-[1232px]">
        {camper?.description}
      </p>

      <div className="flex flex-col">
        <div className="flex-1 ">{navigationLinks}</div>
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          <div
            className={`w-full lg:flex-1 ${isReviews ? "bg-white" : "bg-inputs"} rounded-2xl`}
          >
            {children}
          </div>

          <div className="w-full lg:w-[641px] shrink-0">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
