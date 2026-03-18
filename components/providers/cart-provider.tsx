'use client';

import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { products } from '@/lib/data';
import { Product } from '@/lib/types/product';

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  total: number;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQty: (productId: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.min(item.quantity + 1, product.inventory) }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQty = (productId: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, Math.min(quantity, item.product.inventory)) }
          : item,
      ),
    );
  };

  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [items],
  );

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clear, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
