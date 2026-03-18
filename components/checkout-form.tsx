'use client';

import { FormEvent, useState } from 'react';
import { Button } from './ui/button';

export function CheckoutForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    cvc: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [errors, setErrors] = useState<string[]>([]);

  const validate = () => {
    const errs: string[] = [];
    if (form.name.length < 2) errs.push('Name must be at least 2 characters.');
    if (!form.email.includes('@')) errs.push('Enter a valid email.');
    if (form.address.length < 8) errs.push('Provide a full street address.');
    if (form.city.length < 2) errs.push('City is required.');
    if (form.zip.length < 4) errs.push('ZIP should be 4+ digits.');
    if (form.card.replace(/\s/g, '').length < 12) errs.push('Card number looks too short.');
    if (form.cvc.length < 3) errs.push('CVC must be 3+ digits.');
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (errs.length) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm text-slate-600 dark:text-slate-300">
          Full name
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            required
          />
        </label>
        <label className="text-sm text-slate-600 dark:text-slate-300">
          Email
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            required
          />
        </label>
      </div>
      <label className="text-sm text-slate-600 dark:text-slate-300">
        Street address
        <input
          className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          value={form.address}
          onChange={(e) => updateField('address', e.target.value)}
          required
        />
      </label>
      <div className="grid gap-3 md:grid-cols-3">
        <label className="text-sm text-slate-600 dark:text-slate-300">
          City
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            value={form.city}
            onChange={(e) => updateField('city', e.target.value)}
            required
          />
        </label>
        <label className="text-sm text-slate-600 dark:text-slate-300">
          ZIP
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            value={form.zip}
            onChange={(e) => updateField('zip', e.target.value)}
            required
          />
        </label>
        <label className="text-sm text-slate-600 dark:text-slate-300">
          Country
          <input
            value="United States"
            readOnly
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-4 py-3 text-slate-500"
          />
        </label>
      </div>

      <div className="grid gap-3 md:grid-cols-[2fr_1fr_1fr]">
        <label className="text-sm text-slate-600 dark:text-slate-300">
          Card number
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            value={form.card}
            onChange={(e) => updateField('card', e.target.value)}
            placeholder="4242 4242 4242 4242"
            required
          />
        </label>
        <label className="text-sm text-slate-600 dark:text-slate-300">
          Expiry
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            placeholder="MM/YY"
            required
          />
        </label>
        <label className="text-sm text-slate-600 dark:text-slate-300">
          CVC
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            value={form.cvc}
            onChange={(e) => updateField('cvc', e.target.value)}
            placeholder="123"
            required
          />
        </label>
      </div>

      {errors.length > 0 && (
        <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {status === 'success' && (
        <div className="rounded-xl border border-green-200 bg-green-50 text-green-700 p-4 text-sm">
          Payment authorized. You will receive a receipt and delivery window in seconds.
        </div>
      )}

      <Button type="submit" loading={status === 'loading'} fullWidth>
        {status === 'loading' ? 'Authorizing...' : 'Confirm and pay'}
      </Button>
    </form>
  );
}
