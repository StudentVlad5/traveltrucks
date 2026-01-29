import Image from "next/image";
import StarIcon from "@/helper/icons/star_pressed.svg";
import MapIcon from "@/helper/icons/active_map.svg";
import { Camper } from "@/types/truck";
import Link from "next/link";

interface RatingProps {
  camper: Camper | undefined;
  variant?: "catalog" | "details";
}

export const Rating = ({ camper, variant = "catalog" }: RatingProps) => {
  const isDetails = variant === "details";

  return (
    <div className={isDetails ? "mb-8" : "mb-2 pr-8"}>
      <h2
        className={`font-semibold text-main truncate ${
          isDetails ? "text-[32px] mb-2" : "text-lg md:text-2xl"
        }`}
      >
        {camper?.name}
      </h2>

      <div
        className={`flex items-center gap-4 text-main ${isDetails ? "text-base" : "text-sm md:text-base"}`}
      >
        <Link
          href={`/catalog/${camper?.id}/reviews`}
          className="flex items-center gap-1 group"
        >
          <Image
            src={StarIcon}
            alt="star"
            className="w-4 h-4 text-accent-yellow"
          />
          <span className="underline font-medium group-hover:text-accent-red transition-colors">
            {camper?.rating} ({camper?.reviews?.length || 0} Reviews)
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <Image src={MapIcon} alt="map" className="w-4 h-4" />
          <span
            className={!isDetails ? "truncate max-w-[150px] md:max-w-none" : ""}
          >
            {camper?.location}
          </span>
        </div>
      </div>

      {isDetails && (
        <p className="text-2xl font-semibold mt-4">
          €{camper?.price.toFixed(0)}
        </p>
      )}
    </div>
  );
};
