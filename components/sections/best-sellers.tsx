'use client';

import { products } from '@/lib/data';
import { ProductCard } from '../product-card';
import { ProductCardSkeleton } from '../skeletons/product-card-skeleton';
import { useEffect, useState } from 'react';

export function BestSellers() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const best = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <section id="best" className="max-w-[1200px] mx-auto section-padding py-12 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-secondary font-semibold">Best sellers</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Loved by 6,000+ customers</h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Sorted by rating and demand</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 card-grid">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
          : best.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
