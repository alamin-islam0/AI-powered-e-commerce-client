'use client';

import { FormEvent, useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function AIConcierge() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || email.length < 5) {
      setStatus('error');
      setMessage('Enter a business or personal email to join the waitlist.');
      return;
    }
    setStatus('loading');
    setMessage('');
    setTimeout(() => {
      setStatus('success');
      setMessage('You are in. Expect your invite before April 30, 2026.');
      setEmail('');
    }, 900);
  };

  return (
    <section id="ai" className="max-w-[1200px] mx-auto section-padding py-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
      <div className="space-y-4">
        <Badge label="AI concierge" />
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">A personal outfitter that learns your calendar.</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Launching soon: Aether AI reviews your agenda, weather, and training load to suggest what to wear, what to carry, and when to reorder consumables.
        </p>
        <ul className="grid gap-2 text-slate-600 dark:text-slate-300">
          <li>• Look-ahead packs for travel weeks based on your flight schedule.</li>
          <li>• Style pairings that keep cards, footwear, and outerwear consistent.</li>
          <li>• Health-aware nudges when sleep debt or recovery drops.</li>
        </ul>
      </div>

      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">Join the early access waitlist</p>
          <Badge label="April 2026" />
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm text-slate-600 dark:text-slate-300">
            Work email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="you@studio.com"
              required
            />
          </label>
          <Button type="submit" fullWidth loading={status === 'loading'}>
            {status === 'success' ? 'Joined' : 'Request invite'}
          </Button>
        </form>
        {status === 'error' && <p className="text-sm text-red-500">{message}</p>}
        {status === 'success' && <p className="text-sm text-green-500">{message}</p>}
        {status === 'idle' && <p className="text-sm text-slate-500 dark:text-slate-400">We respect your inbox—one email when your slot is ready.</p>}
      </Card>
    </section>
  );
}
