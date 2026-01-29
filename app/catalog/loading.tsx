export default function CatalogLoading() {
  return (
    <div className="container mx-auto pt-[48px] pb-[80px]">
      <div className="flex flex-col gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 p-6 border border-gray-light rounded-2xl animate-pulse"
          >
            <div className="w-full md:w-[290px] h-[310px] bg-gray-200 rounded-xl shrink-0" />

            <div className="flex-1 space-y-4">
              <div className="flex justify-between">
                <div className="h-8 bg-gray-200 rounded w-1/3" />
                <div className="h-8 bg-gray-200 rounded w-1/4" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-20 bg-gray-200 rounded w-full" />
              <div className="flex gap-2">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="h-10 w-24 bg-gray-200 rounded-full" />
                ))}
              </div>
              <div className="h-12 w-40 bg-gray-200 rounded-full mt-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
