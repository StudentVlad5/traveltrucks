export const CamperDetailsSkeleton = () => {
  return (
    <div className="container mx-auto pt-[48px] pb-[80px] animate-pulse">
      <div className="h-8 w-1/3 bg-gray-ghost rounded mb-2" />
      <div className="h-6 w-1/4 bg-gray-ghost rounded mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-[310px] bg-gray-ghost rounded-xl" />
        ))}
      </div>

      <div className="space-y-3 mb-10">
        <div className="h-4 w-full bg-gray-ghost rounded" />
        <div className="h-4 w-full bg-gray-ghost rounded" />
        <div className="h-4 w-2/3 bg-gray-ghost rounded" />
      </div>

      <div className="border-b border-gray-soft mb-[56px] flex gap-10">
        <div className="h-8 w-24 bg-gray-ghost rounded" />
        <div className="h-8 w-24 bg-gray-ghost rounded" />
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-4">
          <div className="h-64 bg-gray-ghost rounded-2xl" />
        </div>
        <div className="w-full lg:w-[641px] h-[500px] bg-gray-ghost rounded-2xl" />
      </div>
    </div>
  );
};
