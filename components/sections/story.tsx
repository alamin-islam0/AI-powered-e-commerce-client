'use client';

import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function Story() {
  const [joined, setJoined] = useState(false);

  return (
    <section id="story" className="max-w-[1200px] mx-auto section-padding py-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
      <div className="space-y-4">
        <Badge label="Why we exist" />
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Designed like a flagship. Delivered like a startup.</h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          We ship fewer products on purpose. Every item passes repairability checks, material traceability, and durability stress tests. Our packaging is curbside recyclable and we offset last-mile emissions.
        </p>
        <div className="grid gap-3 text-sm text-slate-500 dark:text-slate-400">
          <div className="card p-4">
            <p className="font-semibold text-slate-900 dark:text-white">Measured design language</p>
            <p>Consistent 12pt spacing, 16px radii on cards, and paired typography (Space Grotesk + Inter) keep the interface coherent.</p>
          </div>
          <div className="card p-4">
            <p className="font-semibold text-slate-900 dark:text-white">Operational transparency</p>
            <p>Live inventory counts, delivery promises stated upfront, and warranty coverage for 24 months on electronics.</p>
          </div>
        </div>
      </div>
      <div className="card p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Membership</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">Aether Black</p>
          </div>
          <Badge label="Founding" />
        </div>
        <p className="text-slate-600 dark:text-slate-300">
          Unlock concierge support, 10% credit on every order, and early access to limited drops like the Solstice Smart Mirror.
        </p>
        <div className="flex gap-3">
          <Button onClick={() => setJoined(true)}>{joined ? 'Welcome to Aether Black' : 'Join for $120/yr'}</Button>
          <Button
            variant="secondary"
            onClick={() =>
              alert('Benefits: concierge chat, early drops like Solstice, 10% credit on every order, repair concierge, and priority support.')
            }
          >
            View benefits
          </Button>
        </div>
        {joined && <p className="text-sm text-green-600">You’re confirmed for the Aether Black founding cohort.</p>}
        <div className="grid grid-cols-3 gap-4 text-sm text-slate-500 dark:text-slate-300">
          <div>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">48h</p>
            <p>Express delivery window</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">2 yrs</p>
            <p>Electronics warranty</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">92%</p>
            <p>Repeat purchase rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
