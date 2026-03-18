'use client';

import Link from 'next/link';
import { useCart } from '@/components/providers/cart-provider';
import { CheckoutForm } from '@/components/checkout-form';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CheckoutPage() {
  const { items, total } = useCart();

  return (
    <div className="max-w-[1200px] mx-auto section-padding py-12 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-secondary font-semibold">Secure checkout</p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Confirm your order</h1>
        </div>
        <Link href="/cart">
          <Button variant="secondary">Back to cart</Button>
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-6 space-y-4">
          <CheckoutForm />
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Order summary</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Ships in 48h</p>
          </div>
          <div className="space-y-3">
            {items.length === 0 ? (
              <p className="text-slate-600 dark:text-slate-300">No items yet. Add a product to place an order.</p>
            ) : (
              items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 dark:text-white">{product.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Qty {quantity}</p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">${product.price * quantity}</p>
                </div>
              ))
            )}
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$12.00</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
              <span>Total</span>
              <span>${(total + 12).toFixed(2)}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
