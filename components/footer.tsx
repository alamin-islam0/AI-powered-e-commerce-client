import Link from 'next/link';
import { navigation } from '@/lib/data';

export function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200/70 dark:border-slate-800/70 mt-16">
      <div className="max-w-[1200px] mx-auto section-padding py-10 grid gap-8 md:grid-cols-[1.5fr_1fr] items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white grid place-items-center font-semibold shadow-soft">
              Æ
            </div>
            <div>
              <p className="font-semibold text-lg text-slate-900 dark:text-white">Aether Commerce</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Precision-built essentials with an AI concierge on deck.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Crafted to feel like a five-figure design sprint—measured typography, elevated materials, and responsive interactions tuned for conversion.
          </p>
        </div>

        <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex flex-wrap gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-primary">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/checkout" className="hover:text-brand-primary">Checkout</Link>
            <Link href="/cart" className="hover:text-brand-primary">Cart</Link>
            <Link href="mailto:concierge@aether.com" className="hover:text-brand-primary">concierge@aether.com</Link>
            <Link href="tel:+18885551234" className="hover:text-brand-primary">+1 (888) 555-1234</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="https://twitter.com" className="hover:text-brand-primary" target="_blank">Twitter</Link>
            <Link href="https://www.linkedin.com" className="hover:text-brand-primary" target="_blank">LinkedIn</Link>
            <Link href="https://www.instagram.com" className="hover:text-brand-primary" target="_blank">Instagram</Link>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500">48h delivery in the US · 24-month warranty · Plastic-free packaging</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">© 2026 Aether Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
