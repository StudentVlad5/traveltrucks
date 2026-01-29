"use client";
import { ReviewList } from "@/components/Reviews/ReviewList";
import { selectCurrentItem } from "@/store/Camper/camperSelectors";
import { useAppSelector } from "@/store/hooks";

export default function ReviewsPage() {
  const camper = useAppSelector(selectCurrentItem);
  return camper?.reviews && <ReviewList reviews={camper?.reviews} />;
}
