"use client";
import { fetchCamper } from "@/store/Camper/camperThunks";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { Rating } from "@/components/Rating/Rating";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { BookingForm } from "@/components/BookingForm/BookingForm";

export default function CamperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();
  const pathname = usePathname();
  const isReviews = pathname.includes("reviews");

  const {
    item: camper,
    isLoading,
    error,
  } = useAppSelector((state) => state.camper);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id as string));
    }
  }, [dispatch, id]);

  if (isLoading)
    return <div className="pt-24 container mx-auto">Loading...</div>;
  if (error)
    return <div className="pt-24 container mx-auto text-red-500">{error}</div>;
  if (!camper) return null;

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* 1. Header: Назва, Рейтинг, Локація */}

      {camper && <Rating camper={camper} variant="details" />}

      {/* 2. Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {camper?.gallery.map((img, index) => (
          <div
            key={index}
            className="relative h-[310px] rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              src={img?.original}
              alt={`${camper?.name} photo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* 3. Description */}
      <p className="text-gray-dark text-lg leading-[1.5] mb-10 max-w-[1232px]">
        {camper?.description}
      </p>

      {/* 4. Tabs & Details Section */}
      <div className="flex flex-col gap-10">
        <div className="flex-1 ">
          {/* Тут будуть таби Features / Reviews */}
          <div className="border-b border-gray-soft mb-10 flex gap-10">
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
        </div>
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Лівий блок (Контент табів) */}
          <div
            className={`w-full lg:flex-1 ${isReviews ? "bg-white" : "bg-inputs"} p-6 md:p-10 rounded-2xl`}
          >
            {children}
          </div>

          {/* Правий блок (Форма бронювання) */}
          <div className="w-full lg:w-[641px] shrink-0">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
