import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function Testimonials() {
  return (
    <section id="testimonials" className="max-w-[1200px] mx-auto section-padding py-14 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Badge label="Customers" />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">People who run on Aether</h2>
          <p className="text-slate-500 dark:text-slate-400">Verified buyers across product, design, endurance, and hospitality.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3 card-grid">
        {testimonials.map((item) => (
          <Card key={item.name} className="p-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.title}</p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">{item.quote}</p>
            <div className="flex gap-1 text-brand-accent">
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
