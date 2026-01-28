export const CamperSkeleton = () => (
  <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-light rounded-2xl animate-pulse">
    <div className="w-full md:w-[290px] h-[310px] bg-gray-ghost rounded-xl" />
    <div className="flex-1 space-y-4">
      <div className="flex justify-between">
        <div className="h-8 bg-gray-ghost w-1/3 rounded" />
        <div className="h-8 bg-gray-ghost w-1/4 rounded" />
      </div>
      <div className="h-4 bg-gray-ghost w-1/4 rounded" />
      <div className="h-20 bg-gray-ghost w-full rounded" />
      <div className="flex gap-2">
        <div className="h-10 bg-gray-ghost w-24 rounded-full" />
        <div className="h-10 bg-gray-ghost w-24 rounded-full" />
      </div>
    </div>
  </div>
);
