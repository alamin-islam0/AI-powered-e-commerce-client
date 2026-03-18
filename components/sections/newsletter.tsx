'use client';

import { useState, FormEvent } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section id="newsletter" className="max-w-[1200px] mx-auto section-padding py-12">
      <Card className="p-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-2">
          <p className="text-sm text-brand-secondary font-semibold">Stay ahead</p>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Weekly drops, AI concierge invites, zero spam.</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm">One concise email every Friday with curated picks, delivery windows, and feature releases.</p>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="text-sm text-slate-600 dark:text-slate-300">
            Work email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="you@team.com"
              required
            />
          </label>
          {status === 'error' && <p className="text-xs text-red-500">Add a valid email.</p>}
          {status === 'success' && <p className="text-xs text-green-500">Added to the Friday drop list.</p>}
          <Button type="submit" loading={status === 'loading'} fullWidth>
            {status === 'success' ? 'Added' : 'Join the list'}
          </Button>
        </form>
      </Card>
    </section>
  );
}
