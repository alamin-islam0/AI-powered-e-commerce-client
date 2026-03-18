import { brands } from '@/lib/data';
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function BrandWall() {
  return (
    <section id="brands" className="max-w-[1200px] mx-auto section-padding py-12 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-secondary font-semibold">Trusted by teams</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Collections curated with leading studios</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 card-grid">
        {brands.map((brand) => (
          <Card key={brand.name} className="p-4 flex flex-col gap-3 items-start">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image src={brand.logo} alt={brand.name} fill className="object-cover" sizes="48px" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">{brand.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{brand.tagline}</p>
            </div>
            <Link href={brand.url} className="text-sm text-brand-primary">View collab →</Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
