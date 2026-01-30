"use client";
import { ReviewList } from "@/components/Reviews/ReviewList";
import {
  selectCamperLoading,
  selectCurrentItem,
} from "@/store/Camper/camperSelectors";
import { useAppSelector } from "@/store/hooks";
import ReviewSkeleton from "@/components/Skeletons/ReviewSkeleton";

export default function ReviewsPage() {
  const camper = useAppSelector(selectCurrentItem);
  const isLoading = useAppSelector(selectCamperLoading);
  if (isLoading || !camper) {
    return <ReviewSkeleton />;
  }
  return camper?.reviews && <ReviewList reviews={camper?.reviews} />;
}
