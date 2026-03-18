'use client';

import { faqs } from '@/lib/data';
import { useState } from 'react';
import { Card } from '../ui/card';

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="max-w-[1200px] mx-auto section-padding py-12 space-y-6">
      <div>
        <p className="text-sm text-brand-secondary font-semibold">FAQ</p>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Answers before you ask</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 card-grid">
        {faqs.map((item, idx) => (
          <Card key={item.question} className="p-4">
            <button
              className="w-full text-left flex items-center justify-between"
              onClick={() => setOpen(idx === open ? -1 : idx)}
              aria-expanded={open === idx}
            >
              <span className="font-semibold text-slate-900 dark:text-white">{item.question}</span>
              <span className="text-brand-primary">{open === idx ? '–' : '+'}</span>
            </button>
            {open === idx && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.answer}</p>}
          </Card>
        ))}
      </div>
    </section>
  );
}
