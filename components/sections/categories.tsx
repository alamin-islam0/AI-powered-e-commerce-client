'use client';

import { Card } from '../ui/card';
import { categories, products } from '@/lib/data';
import { Button } from '../ui/button';

const categoryImages: Record<string, string> = {
  Footwear: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80',
  Home: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
  Carry: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  Audio: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80',
  Wearables: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
  Kitchen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
};

export function FeaturedCategories() {
  return (
    <section id="categories" className="max-w-[1200px] mx-auto section-padding py-12 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-secondary font-semibold">Featured categories</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Shop by intent</h2>
        </div>
        <Button variant="secondary" size="sm">View all</Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 card-grid">
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          return (
            <Card key={cat} className="overflow-hidden p-0 flex flex-col">
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${categoryImages[cat]})` }}
                aria-label={cat}
              />
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cat}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{count} products · Fast ship</p>
                <div className="mt-auto">
                  <Button variant="secondary" size="sm">Explore {cat}</Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
