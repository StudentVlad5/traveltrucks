import Image from "next/image";
import { Camper } from "@/types/truck";

import CupIcon from "@/assets/icons/cup-hot.svg";
import StarIcon from "@/assets/icons/star_pressed.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import WindIcon from "@/assets/icons/wind.svg";
import DiagramIcon from "@/assets/icons/diagram.svg";
import FuelIcon from "@/assets/icons/fuel-pump.svg";
import MapIcon from "@/assets/icons/active_map.svg";
import { Badge } from "../UI/Badge/Badge";
import { ButtonLink } from "../UI/ButtonLink/ButtonLink";

export const CamperCard = ({ camper }: { camper: Camper }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 border border-gray-light rounded-2xl bg-white">
      {/* Галерея */}
      <div className="relative w-full md:w-[290px] h-[200px] md:h-[310px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src={camper.gallery[0].thumb}
          alt={camper.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Інфо */}
      <div className="flex-1 flex flex-col min-w-0">
        {" "}
        {/* min-w-0 допомагає truncate працювати в flex */}
        <div className="flex justify-between items-start mb-2 gap-2">
          <h2 className="text-lg md:text-2xl font-semibold text-main truncate">
            {camper.name}
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-lg md:text-2xl font-semibold">
              €{camper.price.toFixed(0)}
            </span>
            <button
              type="button"
              title="favorites"
              className="hover:text-accent-red transition-colors"
            >
              <Image
                src={HeartIcon}
                alt="favorites"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
          </div>
        </div>
        {/* Рейтинг та Локація */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 md:mb-6 text-sm md:text-base text-main">
          <div className="flex items-center gap-1">
            <Image
              src={StarIcon}
              alt="rating"
              className="w-3.5 h-3.5 md:w-4 md:h-4"
            />
            <span className="underline">
              {camper.rating}({camper.reviews.length} Reviews)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={MapIcon}
              alt="map"
              className="w-3.5 h-3.5 md:w-4 md:h-4"
            />
            <span className="truncate max-w-[150px] md:max-w-none">
              {camper.location}
            </span>
          </div>
        </div>
        <p className="text-gray-dark text-sm md:text-base line-clamp-2 md:line-clamp-1 mb-4 md:mb-6">
          {camper.description}
        </p>
        {/* Теги характеристик */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge icon={DiagramIcon} label={camper.transmission} />
          <Badge icon={FuelIcon} label={camper.engine} />
          {camper.kitchen && <Badge icon={CupIcon} label="Kitchen" />}
          {camper.AC && <Badge icon={WindIcon} label="AC" />}
        </div>
        <ButtonLink
          variant="primary"
          href={`/catalog/${camper.id}`}
          className="mt-auto self-start"
        >
          Show more
        </ButtonLink>
      </div>
    </div>
  );
};
