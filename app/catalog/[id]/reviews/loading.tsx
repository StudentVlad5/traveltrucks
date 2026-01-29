export default function ReviewsLoading() {
  return (
    <div className="flex flex-col gap-11 animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] rounded-full bg-gray-200" />
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-gray-200 rounded w-32" />
              <div className="h-4 bg-gray-200 rounded w-24" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
}
