import Image from "next/image";
import StarIcon from "@/helper/icons/star_pressed.svg";
import StarIconUnpressed from "@/helper/icons/star_default.svg";
import { Review } from "@/types/truck";
import { motion } from "framer-motion";

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <motion.div
      id={`camper-${review.comment}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <div className="w-[60px] h-[60px] rounded-full bg-badges flex items-center justify-center text-accent-red text-2xl font-semibold shrink-0">
          {review.reviewer_name.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-main">
            {review.reviewer_name}
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={i < review.reviewer_rating ? StarIcon : StarIconUnpressed}
                alt="star"
                className="w-4 h-4"
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-text leading-[1.5] text-[16px] leading-[1.5] font-normal">
        {review.comment}
      </p>
    </motion.div>
  );
};
