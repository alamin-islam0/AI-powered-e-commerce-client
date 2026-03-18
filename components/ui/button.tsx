'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: ReactNode;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  'relative isolate inline-flex items-center justify-center gap-2 font-medium rounded-pill transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-[0_12px_40px_rgba(27,77,255,0.35)] hover:brightness-105 active:translate-y-[1px] dark:shadow-[0_12px_38px_rgba(15,185,177,0.35)]',
  secondary:
    'bg-white text-slate-900 border border-slate-200 shadow-soft hover:-translate-y-[1px] dark:bg-slate-900 dark:text-white dark:border-slate-800',
  ghost:
    'bg-transparent text-slate-800 hover:bg-slate-100/70 dark:text-slate-100 dark:hover:bg-slate-800/60',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-2.5',
  lg: 'text-base px-5 py-3',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth,
  loading,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      {...props}
    >
      <span className={clsx('flex items-center gap-2', loading && 'opacity-0')}>{children}</span>
      {icon && !loading && <span className="text-lg">{icon}</span>}
      {loading && (
        <span className="absolute inset-0 grid place-items-center">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
        </span>
      )}
    </button>
  );
}
