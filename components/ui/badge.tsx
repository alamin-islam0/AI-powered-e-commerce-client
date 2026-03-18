import clsx from 'clsx';

export function Badge({ label, tone = 'brand' }: { label: string; tone?: 'brand' | 'muted' }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        tone === 'brand'
          ? 'bg-brand-secondary/15 text-brand-secondary border border-brand-secondary/20'
          : 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
      )}
    >
      {label}
    </span>
  );
}
