import { ReviewCard } from "./ReviewCard";
import { Review } from "@/types/truck";

export const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-medium italic">No reviews yet.</p>;
  }

  return (
    <div className="flex flex-col gap-11">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};
