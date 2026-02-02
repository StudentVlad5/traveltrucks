"use client";

import { useAppSelector } from "@/store/hooks";
import { CamperCard } from "./CamperCard";
import { CamperSkeleton } from "./CamperSkeleton";
import { Button } from "../UI/Button/Button";
import { AnimatePresence, motion } from "framer-motion";

export const CamperList = ({
  visibleCount,
  setVisibleCount,
}: {
  visibleCount: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { items, isLoading } = useAppSelector((state) => state.vehicles);
  const campers = items.items;

  const handleLoadMore = () => {
    const firstNewCardIndex = visibleCount;
    setVisibleCount((prev) => prev + 4);
    setTimeout(() => {
      const nextCard = document.getElementById(`camper-${firstNewCardIndex}`);
      if (nextCard) {
        const offset = 100;
        const top =
          nextCard.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  if (isLoading && campers.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        {[...Array(visibleCount)].map((_, i) => (
          <CamperSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!isLoading && campers.length === 0) {
    return (
      <div className="text-center text-xl text-gray-medium py-10">
        Probably we can`t find anything
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <AnimatePresence>
        <ul>
          {campers.slice(0, visibleCount).map((camper, index) => (
            <motion.li
              key={camper.id}
              id={`camper-${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <CamperCard key={camper.id} camper={camper} />
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
      {visibleCount < campers.length && (
        <div className="flex justify-center mt-8">
          <Button
            variant="secondary"
            isLoading={isLoading}
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};
