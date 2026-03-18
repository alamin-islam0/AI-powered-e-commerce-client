'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { stats, products } from '@/lib/data';
import { useCart } from './providers/cart-provider';
import { useState } from 'react';
import { Sparkles, ShoppingBag, ArrowRight, ShieldCheck, Clock3, Leaf, Star } from 'lucide-react';

export function Hero() {
  const { addToCart } = useCart();
  const featuredItems = products.filter((p) => p.featured).slice(0, 3);
  const [active, setActive] = useState(0);
  const featured = featuredItems[active] ?? featuredItems[0];
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {
    if (!featured) return;
    setLoading(true);
    setTimeout(() => {
      addToCart(featured.id);
      setLoading(false);
    }, 500);
  };

  return (
    <section
      className="relative overflow-visible lg:overflow-visible pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-20 lg:min-h-[70vh]"
      id="top"
    >
      <div className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl hero-blob" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-secondary/20 blur-3xl hero-blob" aria-hidden />

      <div className="max-w-[1200px] mx-auto section-padding grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-8 relative z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
            AI concierge opens April 30, 2026
          </div>
          <div className="space-y-4">
            <Badge label="Curated drops only" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-white leading-tight">
              Premium essentials designed for velocity and calm.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              We pair tactile hardware, sustainable textiles, and an upcoming AI concierge that understands your context—delivering fast, intentional shopping without the noise.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="#collections">
              <Button size="lg" icon={<ShoppingBag size={18} />}>
                Shop collections
              </Button>
            </Link>
            <Link href="#ai">
              <Button size="lg" variant="secondary" icon={<Sparkles size={18} />}>
                Meet the AI concierge
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const iconMap: Record<string, JSX.Element> = {
                'Carbon saved': <Leaf size={16} />,
                'Average rating': <Star size={16} />,
                'Delivery speed': <Clock3 size={16} />,
                Warranty: <ShieldCheck size={16} />,
              };
              return (
                <div
                  key={stat.label}
                  className="card p-3 flex flex-col justify-between bg-gradient-to-b from-white/80 to-white/50 dark:from-slate-900/70 dark:to-slate-900/40"
                  style={{ minHeight: '110px' }}
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    <span>{stat.label}</span>
                    <span className="text-brand-secondary">{iconMap[stat.label] ?? <Sparkles size={16} />}</span>
                  </div>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white leading-tight">{stat.value}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative order-1 lg:order-2 w-full">
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-primary/15 via-brand-secondary/20 to-brand-accent/15 blur-3xl" aria-hidden />
          <div className="card relative p-4 sm:p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <Badge label="Featured" />
              <p className="text-sm text-slate-500 dark:text-slate-400">48h delivery</p>
            </div>
            <div className="relative h-64 sm:h-72 lg:h-[22rem] w-full overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-900">
              <Image
                src={featured?.image ?? 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1600&q=80'}
                alt={featured?.name ?? 'Featured product'}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{featured?.name ?? 'AstraFlex Runner'}</p>
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">${featured?.price ?? 228}</p>
              </div>
              <Button size="sm" onClick={handleAdd} loading={loading} icon={<ArrowRight size={16} />}>
                Add to cart
              </Button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {featured?.description ??
                'Adaptive gear crafted for daily use—responsive, breathable, and tuned for calm performance.'}
            </p>
            <div className="flex gap-2 pt-2">
              {featuredItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActive(idx)}
                  className={`h-2.5 w-8 rounded-full transition-all ${idx === active ? 'bg-brand-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                  aria-label={`Show ${item.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
