'use client';

import { products } from '@/lib/data';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { useCart } from '../providers/cart-provider';

export function Featured() {
  const featured = products.filter((p) => p.featured);
  const { addToCart } = useCart();

  return (
    <section id="featured" className="max-w-[1200px] mx-auto section-padding py-14 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Badge label="Featured" />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Limited drops, guaranteed delivery</h2>
        </div>
        <Link href="/checkout">
          <Button variant="secondary">Fast checkout</Button>
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 card-grid">
        {featured.map((product) => (
          <Card key={product.id} className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <Badge label={product.badge ?? 'Featured'} />
              <p className="text-sm text-slate-500 dark:text-slate-400">{product.inventory} in stock</p>
            </div>
            <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 320px, 100vw" />
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{product.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{product.highlights[0]}</p>
              </div>
              <p className="text-xl font-semibold text-slate-900 dark:text-white">${product.price}</p>
            </div>
            <div className="flex gap-2">
              <Button fullWidth onClick={() => addToCart(product.id)}>Add to cart</Button>
              <Link href={`/products/${product.slug}`} className="w-full">
                <Button fullWidth variant="secondary">View</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
