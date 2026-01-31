"use client";
import { ReviewList } from "@/components/Reviews/ReviewList";
import { selectCurrentItem } from "@/store/Camper/camperSelectors";
import { useAppSelector } from "@/store/hooks";
import ReviewSkeleton from "@/components/Skeletons/ReviewSkeleton";
import { useEffect, useState } from "react";

export default function ReviewsPage() {
  const camper = useAppSelector(selectCurrentItem);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <ReviewSkeleton />;
  }
  return camper?.reviews && <ReviewList reviews={camper?.reviews} />;
}
