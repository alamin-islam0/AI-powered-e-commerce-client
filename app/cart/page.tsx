'use client';

import Link from 'next/link';
import { useCart } from '@/components/providers/cart-provider';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function CartPage() {
  const { items, total, updateQty, removeFromCart, clear } = useCart();

  return (
    <div className="max-w-[1200px] mx-auto section-padding py-12 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Cart</h1>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={clear} disabled={!items.length}>Clear</Button>
          <Link href="/checkout">
            <Button disabled={!items.length}>Checkout</Button>
          </Link>
        </div>
      </div>

      {items.length === 0 ? (
        <Card className="p-6 text-slate-600 dark:text-slate-300">
          Your cart is empty. Explore featured products and add something you love.
          <div className="pt-4">
            <Link href="/">
              <Button variant="secondary">Browse collections</Button>
            </Link>
          </div>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-3">
            {items.map(({ product, quantity }) => (
              <Card key={product.id} className="p-4 flex gap-4 items-center">
                <div className="relative h-24 w-24 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-semibold text-slate-900 dark:text-white">{product.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{product.category}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">${product.price}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <label className="text-xs text-slate-500 dark:text-slate-400">Qty</label>
                    <input
                      type="number"
                      min={1}
                      max={product.inventory}
                      value={quantity}
                      onChange={(e) => updateQty(product.id, Number(e.target.value))}
                      className="w-20 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-3 py-2"
                    />
                    <Button size="sm" variant="ghost" onClick={() => removeFromCart(product.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Summary</h2>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Express shipping</span>
              <span>$12.00</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
              <span>Total</span>
              <span>${(total + 12).toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <Button fullWidth>Secure checkout</Button>
            </Link>
          </Card>
        </div>
      )}
    </div>
  );
}
