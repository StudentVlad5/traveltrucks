const Shimmer = () => (
  <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
);

const SkeletonBox = ({ className }: { className: string }) => (
  <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
    <Shimmer />
  </div>
);

export default function ReviewSkeleton() {
  return (
    <div className="flex flex-col gap-11">
      {/* Генеруємо 2-3 картки відгуків */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* Аватар */}
            <SkeletonBox className="w-[60px] h-[60px] rounded-full shrink-0" />

            <div className="flex flex-col gap-2">
              {/* Ім'я */}
              <SkeletonBox className="h-5 w-32 rounded" />
              {/* Зірочки */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <SkeletonBox key={i} className="w-4 h-4 rounded-sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Текст коментаря */}
          <div className="space-y-2">
            <SkeletonBox className="h-4 w-full rounded" />
            <SkeletonBox className="h-4 w-[90%] rounded" />
            <SkeletonBox className="h-4 w-[40%] rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
