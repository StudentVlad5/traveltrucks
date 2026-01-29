import Image from "next/image";
import { Camper } from "@/types/truck";
import HeartIcon from "@/helper/icons/heart.svg";
import PressedHeartIcon from "@/helper/icons/heart_pressed.svg";
import { ButtonLink } from "../UI/ButtonLink/ButtonLink";
import { Rating } from "@/components/Rating/Rating";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleFavorite } from "@/store/Favorites/favoritesSlice";
import { CamperFeatures } from "../CamperFeatures/CamperFeatures";

export const CamperCard = ({ camper }: { camper: Camper }) => {
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const isFavorite = favorites.includes(camper.id);

  const handleChangeFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 border border-gray-light rounded-2xl bg-white">
      <div className="relative w-full md:w-[290px] h-[200px] md:h-[310px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src={camper.gallery[0].thumb}
          alt={camper.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 290px"
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="relative">
          <button
            onClick={handleChangeFavorite}
            type="button"
            title="favorites"
            className="absolute right-0 top-1 hover:text-accent-red transition-colors z-10"
          >
            <Image
              src={isFavorite ? PressedHeartIcon : HeartIcon}
              alt="favorites"
              className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
            />
          </button>
          <Rating camper={camper} variant="catalog" />
        </div>

        <p className="text-gray-dark text-sm md:text-base line-clamp-2 md:line-clamp-1 mb-4 md:mb-6">
          {camper.description}
        </p>
        <CamperFeatures camper={camper} className="mb-6" />

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
