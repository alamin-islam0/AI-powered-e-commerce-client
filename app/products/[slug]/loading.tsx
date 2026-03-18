import { Card } from '@/components/ui/card';

export default function ProductLoading() {
  return (
    <div className="max-w-[1200px] mx-auto section-padding py-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="p-6 animate-shimmer bg-[length:200%_100%]"><div className="h-[420px] shimmer rounded-2xl" /></Card>
      <Card className="p-6 space-y-4 animate-shimmer bg-[length:200%_100%]">
        <div className="h-6 w-32 shimmer rounded" />
        <div className="h-10 w-60 shimmer rounded" />
        <div className="h-6 w-40 shimmer rounded" />
        <div className="h-24 shimmer rounded" />
        <div className="h-12 shimmer rounded" />
      </Card>
    </div>
  );
}
