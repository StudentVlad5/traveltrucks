const Shimmer = () => (
  <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
);

const SkeletonBox = ({ className }: { className: string }) => (
  <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
    <Shimmer />
  </div>
);

export default function FeaturesSkeleton() {
  return (
    <div className="bg-inputs p-6 md:p-10 rounded-2xl">
      <div className="flex flex-wrap gap-2 mb-10">
        {[...Array(6)].map((_, i) => (
          <SkeletonBox key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>

      <div className="mb-6 border-b border-gray-light pb-6">
        <SkeletonBox className="h-7 w-40 rounded" />
      </div>

      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between">
            <SkeletonBox className="h-5 w-24 rounded" />
            <SkeletonBox className="h-5 w-32 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
