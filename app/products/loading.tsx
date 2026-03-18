import { ProductCardSkeleton } from '@/components/skeletons/product-card-skeleton';

export default function LoadingProducts() {
  return (
    <div className="max-w-[1200px] mx-auto section-padding py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 card-grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
