'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/components/providers/cart-provider';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  if (!product) return notFound();

  const handleAdd = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart(product.id);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-[1200px] mx-auto section-padding py-12 space-y-10">
      <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
        <Link href="/">Home</Link>
        <span>·</span>
        <Link href="#collections">Collections</Link>
        <span>·</span>
        <span>{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-4">
          <div className="relative h-[480px] w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
          </div>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color) => (
              <span
                key={color.hex}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 px-3 py-2 text-sm"
              >
                <span className="h-4 w-4 rounded-full" style={{ backgroundColor: color.hex }} />
                {color.name}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge label={product.badge ?? 'Featured'} />
            <p className="text-sm text-slate-500 dark:text-slate-400">{product.inventory} units left</p>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{product.name}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">{product.description}</p>
            <p className="text-3xl font-semibold text-slate-900 dark:text-white">${product.price}</p>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            {product.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Button size="lg" onClick={handleAdd} loading={loading}>
              Add to cart
            </Button>
            <Link href="/checkout">
              <Button size="lg" variant="secondary">
                Buy now
              </Button>
            </Link>
          </div>
          <Card className="p-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between">
              <p>Delivery</p>
              <p>48 hours (US)</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Warranty</p>
              <p>24 months on electronics</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Returns</p>
              <p>30 days, free pickup</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
