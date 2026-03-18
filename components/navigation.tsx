'use client';

import Link from 'next/link';
import { navigation, categories } from '@/lib/data';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { useCart } from './providers/cart-provider';
import { useState } from 'react';

export function Navigation() {
  const { items } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const baseLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '#collections' },
    { label: 'Categories', href: '#categories' },
    { label: 'About', href: '#story' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#footer' },
    { label: 'Dashboard', href: '#dashboard' },
  ];

  const visibleLinks = loggedIn ? baseLinks.slice(0, 7) : baseLinks.slice(0, 5);

  const handleScroll = () => {
    setMenuOpen(false);
    setShowExplore(false);
    setShowProfile(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/70">
      <div className="mx-auto max-w-[1200px] section-padding py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={handleScroll}>
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white grid place-items-center font-semibold shadow-soft">
            Æ
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900 dark:text-white">Aether Commerce</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">AI-led shopping</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-200 relative">
          {visibleLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-primary transition-colors"
              onClick={handleScroll}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setShowExplore(true)}
            onMouseLeave={() => setShowExplore(false)}
          >
            <button
              className="hover:text-brand-primary transition-colors"
              onClick={() => setShowExplore((s) => !s)}
              aria-expanded={showExplore}
            >
              Mega Menu ▾
            </button>
            {showExplore && (
              <div className="absolute right-0 mt-3 w-[520px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card p-4 grid grid-cols-2 gap-4">
                {categories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat}
                    href="#collections"
                    className="rounded-xl px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/70"
                    onClick={handleScroll}
                  >
                    <p className="font-semibold text-slate-900 dark:text-white">{cat}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Curated picks refreshed weekly</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="#ai" className="hidden lg:block">
            <Button variant="secondary" size="sm">AI Concierge</Button>
          </Link>
          {loggedIn ? (
            <div className="relative">
              <button
                className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-semibold"
                onClick={() => setShowProfile((p) => !p)}
                aria-label="Profile menu"
              >
                JT
              </button>
              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card py-2 text-sm">
                  <Link href="#dashboard" className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleScroll}>Dashboard</Link>
                  <Link href="#orders" className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleScroll}>Orders</Link>
                  <Link href="#settings" className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleScroll}>Settings</Link>
                  <button className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => { setLoggedIn(false); setShowProfile(false); }}>Sign out</button>
                </div>
              )}
            </div>
          ) : (
            <Button size="sm" variant="secondary" onClick={() => setLoggedIn(true)}>Sign in</Button>
          )}
          <Link href="/cart">
            <Button variant="primary" size="sm" aria-label="Cart">
              Cart · {cartCount}
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden h-10 w-10 rounded-xl border border-slate-200/70 dark:border-slate-800/70 grid place-items-center"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200/70 dark:border-slate-800/70 bg-white/95 dark:bg-slate-950/95">
          <div className="section-padding py-4 flex flex-col gap-4 text-slate-800 dark:text-slate-100">
            <div className="flex justify-between items-center">
              <p className="text-sm">{loggedIn ? 'Signed in as Jordan' : 'Guest'}</p>
              <Button size="sm" variant="secondary" onClick={() => setLoggedIn((v) => !v)}>
                {loggedIn ? 'Sign out' : 'Sign in'}
              </Button>
            </div>
            {visibleLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={handleScroll} className="py-1">
                {item.label}
              </Link>
            ))}
            <details className="rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-2">
              <summary className="text-sm">Advanced menu</summary>
              <div className="grid grid-cols-2 gap-2 pt-2 text-sm">
                {categories.slice(0, 6).map((cat) => (
                  <Link key={cat} href="#collections" onClick={handleScroll} className="rounded-lg bg-slate-50 dark:bg-slate-800/70 px-2 py-2">
                    {cat}
                  </Link>
                ))}
              </div>
            </details>
            <div className="flex gap-2 pt-2">
              <ThemeToggle />
              <Link href="/cart" className="flex-1">
                <Button fullWidth variant="primary" size="sm" onClick={handleScroll}>
                  Cart · {cartCount}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
