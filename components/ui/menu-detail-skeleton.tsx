export const MenuDetailSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 animate-pulse space-y-6">
      <div className="h-64 bg-gray-200 rounded-xl" />

      <div className="h-6 w-1/2 bg-gray-200 rounded" />

      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-3/4 bg-gray-200 rounded" />

      <div className="space-y-2">
        <div className="h-4 w-1/3 bg-gray-200 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
      </div>
    </div>
  );
};