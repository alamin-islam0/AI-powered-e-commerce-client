import { Card } from '../ui/card';

export function ProductCardSkeleton() {
  return (
    <Card className="p-4 animate-shimmer bg-[length:200%_100%]">
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="h-5 w-24 rounded-full shimmer" />
          <div className="h-4 w-12 rounded-full shimmer" />
        </div>
        <div className="h-48 w-full rounded-2xl shimmer" />
        <div className="h-6 w-32 rounded-full shimmer" />
        <div className="h-4 w-full rounded-full shimmer" />
        <div className="h-3 w-24 rounded-full shimmer" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="h-10 rounded-full shimmer" />
        <div className="h-10 rounded-full shimmer" />
      </div>
    </Card>
  );
}
