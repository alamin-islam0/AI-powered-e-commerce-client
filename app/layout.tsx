import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { CartProvider } from '@/components/providers/cart-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Aether Commerce | Premium AI-powered storefront',
  description: 'Premium, sustainable essentials with a concierge-level checkout and upcoming AI outfitter.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.className} ${body.className} bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-slate-100`}>
        <ThemeProvider>
          <CartProvider>
            <Navigation />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
