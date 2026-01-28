"use client";

import { useAppSelector } from "@/store/hooks";
import { CamperCard } from "./CamperCard";
import { CamperSkeleton } from "./CamperSkeleton";
import { Button } from "../UI/Button/Button";

export const CamperList = ({
  visibleCount,
  setVisibleCount,
}: {
  visibleCount: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { items, isLoading } = useAppSelector((state) => state.vehicles);
  const campers = items.items;

  if (isLoading && campers.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        {[...Array(visibleCount)].map((_, i) => (
          <CamperSkeleton key={i} />
        ))}
      </div>
    );
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="flex flex-col gap-6">
      {campers.slice(0, visibleCount).map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}

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
