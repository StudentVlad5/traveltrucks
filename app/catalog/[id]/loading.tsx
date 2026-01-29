export default function CamperLayoutSkeleton() {
  return (
    <div className="container mx-auto pt-[48px] pb-[80px] animate-pulse">
      <div className="mb-8 space-y-3">
        <div className="h-6 w-64 bg-gray-200 rounded" />
        <div className="h-4 w-40 bg-gray-200 rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-[310px] bg-gray-200 rounded-xl" />
        ))}
      </div>

      <div className="mb-10 space-y-3 max-w-[1232px]">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-[90%]" />
        <div className="h-4 bg-gray-200 rounded w-[80%]" />
      </div>

      <div className="border-b border-gray-soft mb-[56px] flex gap-10">
        <div className="h-6 w-24 bg-gray-200 rounded" />
        <div className="h-6 w-24 bg-gray-200 rounded" />
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 h-[400px] bg-gray-200 rounded-2xl" />
        <div className="w-full lg:w-[641px] h-[520px] bg-gray-200 rounded-2xl" />
      </div>
    </div>
  );
}
