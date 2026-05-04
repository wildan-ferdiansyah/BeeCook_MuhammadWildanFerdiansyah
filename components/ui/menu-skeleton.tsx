export default function MenuSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-48 bg-gray-200 rounded-xl"></div>
      <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
      <div className="h-3 bg-gray-200 w-1/2 rounded"></div>
    </div>
  );
}