export const FilterSkeleton = () => {
  return (
    <aside className="w-full lg:w-[360px] flex flex-col gap-8 animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="h-4 w-20 bg-gray-ghost rounded" />
        <div className="h-14 w-full bg-gray-ghost rounded-xl" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="h-5 w-16 bg-gray-ghost rounded" />

        <div>
          <div className="h-8 w-full border-b border-gray-light mb-6" />
          <div className="flex flex-wrap gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-[110px] h-[95px] bg-gray-ghost rounded-xl"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="h-8 w-full border-b border-gray-light mb-6" />
          <div className="flex flex-wrap gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-[110px] h-[95px] bg-gray-ghost rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-14 w-[173px] bg-gray-ghost rounded-full" />
    </aside>
  );
};
