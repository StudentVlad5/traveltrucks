import Image from "next/image";
import StarIcon from "@/helper/icons/star_pressed.svg";
import { Review } from "@/types/truck";

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {/* Аватар: коло з першою літерою імені */}
        <div className="w-[60px] h-[60px] rounded-full bg-badges flex items-center justify-center text-accent-red text-2xl font-semibold shrink-0">
          {review.reviewer_name.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-main">
            {review.reviewer_name}
          </p>
          <div className="flex gap-1">
            {/* Рендеримо 5 зірок, зафарбовуємо їх залежно від рейтингу */}
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={StarIcon}
                alt="star"
                className={`w-4 h-4 ${
                  i < review.reviewer_rating
                    ? "text-accent-yellow"
                    : "text-gray-ghost"
                }`}
                // Якщо іконка не змінює колір через className (якщо це <img>),
                // використовуй filter або різні іконки (сіру/жовту)
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-dark leading-[1.5]">{review.comment}</p>
    </div>
  );
};
