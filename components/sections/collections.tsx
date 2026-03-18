'use client';

import { useEffect, useState } from 'react';
import { products, categories } from '@/lib/data';
import { ProductCard } from '../product-card';
import { ProductCardSkeleton } from '../skeletons/product-card-skeleton';
import { Button } from '../ui/button';

export function Collections() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="collections" className="max-w-[1200px] mx-auto section-padding py-14 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-brand-secondary font-semibold">Collections</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Curated gear by category</h2>
          <p className="text-slate-500 dark:text-slate-400">Every item vetted for longevity, repairability, and carbon impact.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCategory === 'All' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setActiveCategory('All')}
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={activeCategory === cat ? 'primary' : 'secondary'}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 card-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
          : filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
