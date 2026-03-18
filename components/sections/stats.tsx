import { stats } from '@/lib/data';
import { Card } from '../ui/card';

export function PlatformStats() {
  return (
    <section id="stats" className="max-w-[1200px] mx-auto section-padding py-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 card-grid">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4 flex flex-col justify-between min-h-[220px]">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{stat.label}</p>
            <p className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.detail}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
