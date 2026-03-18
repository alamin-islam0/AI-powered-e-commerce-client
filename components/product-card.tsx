"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types/product'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { useCart } from './providers/cart-provider'
import { useState } from 'react'

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setLoading(true)
    setTimeout(() => {
      addToCart(product.id)
      setAdded(true)
      setLoading(false)
      setTimeout(() => setAdded(false), 1600)
    }, 500)
  }

  return (
    <Card className="p-4 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          {product.badge ? <Badge label={product.badge} /> : <span className="text-xs text-slate-400">&nbsp;</span>}
          <span className="text-xs text-slate-500 dark:text-slate-400">{product.category}</span>
        </div>
        <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(min-width: 1024px) 300px, 100vw"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{product.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{product.description}</p>
          </div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">${product.price}</p>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>★ {product.rating} · {product.reviews} reviews</span>
          <span>48h ship</span>
        </div>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              key={color.hex}
              className="h-4 w-4 rounded-full border border-white shadow ring-1 ring-slate-200 dark:ring-slate-800"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button fullWidth size="sm" onClick={handleAdd} loading={loading}>
          {added ? 'Added' : 'Add to cart'}
        </Button>
        <Link href={`/products/${product.slug}`} className="w-full">
          <Button fullWidth size="sm" variant="secondary">
            View
          </Button>
        </Link>
      </div>
    </Card>
  )
}
