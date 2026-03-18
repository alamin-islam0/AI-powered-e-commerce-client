import { Product, Stat, Testimonial, BlogPost, FAQ, Brand } from './types/product';

export const products: Product[] = [
  {
    id: 'p-astraflex',
    name: 'AstraFlex Runner',
    slug: 'astraflex-runner',
    price: 228,
    category: 'Footwear',
    badge: 'Bestseller',
    description: 'Featherweight running shoes engineered with kinetic foam that returns 84% energy on every stride.',
    highlights: [
      'Kinetic foam midsole with 84% energy return',
      'Adaptive knit upper that ventilates as you heat up',
      'Recycled outsole rubber with micro-grip for wet ground',
    ],
    colors: [
      { name: 'Arctic White', hex: '#f8fafc' },
      { name: 'Cobalt Pulse', hex: '#1b4dff' },
      { name: 'Storm Gray', hex: '#475569' },
    ],
    rating: 4.8,
    reviews: 1842,
    inventory: 62,
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'p-lumen',
    name: 'Lumen Arc Smart Lamp',
    slug: 'lumen-arc-smart-lamp',
    price: 189,
    category: 'Home',
    badge: 'New',
    description:
      'Adaptive lighting that tunes to your circadian rhythm, with gesture control and glare-free diffusion.',
    highlights: [
      'Auto-tunes warmth to your chronotype',
      'Palm hover to dim or switch scenes',
      'Aluminum unibody with hidden cable routing',
    ],
    colors: [
      { name: 'Soft Silver', hex: '#e2e8f0' },
      { name: 'Matte Black', hex: '#0f172a' },
    ],
    rating: 4.7,
    reviews: 623,
    inventory: 34,
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'p-nimbus',
    name: 'Nimbus Air Purifier',
    slug: 'nimbus-air-purifier',
    price: 312,
    category: 'Home',
    description:
      'Triple-stage filtration with live air-quality scoring and an ultra-quiet brushless motor.',
    highlights: [
      'PM2.5 and VOC sensing with live dashboard',
      'Carbon mesh plus HEPA H13 stack',
      'Whisper mode at 22dB for bedrooms',
    ],
    colors: [
      { name: 'Cloud', hex: '#e5e7eb' },
      { name: 'Ink', hex: '#0b1220' },
    ],
    rating: 4.9,
    reviews: 1182,
    inventory: 28,
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'p-carbonedge',
    name: 'CarbonEdge Backpack',
    slug: 'carbonedge-backpack',
    price: 248,
    category: 'Carry',
    badge: 'Editor pick',
    description:
      'Slim travel backpack in recycled carbon fabric with magnetic ladder locks and a luggage passthrough.',
    highlights: [
      '19L to 24L expandable main cavity',
      'Magnetic ladder locks rated to 40kg',
      'TSA-flat laptop cradle up to 16"',
    ],
    colors: [
      { name: 'Graphite', hex: '#111827' },
      { name: 'Sea Glass', hex: '#0fb9b1' },
    ],
    rating: 4.6,
    reviews: 421,
    inventory: 88,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  {
    id: 'p-halo',
    name: 'Halo Sound Pro',
    slug: 'halo-sound-pro',
    price: 268,
    category: 'Audio',
    description: 'Spatial audio earbuds with adaptive ANC and ceramic drivers tuned for studio warmth.',
    highlights: [
      'Spatial audio with head tracking',
      'Adaptive ANC that maps ear canal pressure',
      'Ceramic drivers for low distortion warmth',
    ],
    colors: [
      { name: 'Pearl', hex: '#f8fafc' },
      { name: 'Obsidian', hex: '#0f172a' },
      { name: 'Aurora', hex: '#1b4dff' },
    ],
    rating: 4.7,
    reviews: 954,
    inventory: 52,
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  {
    id: 'p-vela',
    name: 'Vela Health Band',
    slug: 'vela-health-band',
    price: 209,
    category: 'Wearables',
    badge: 'Ships in 48h',
    description:
      'Medical-grade sensors that capture HRV, SpO₂, and skin temp with weekly recovery coaching.',
    highlights: [
      'HRV + SpO₂ + skin temp tri-sensor',
      'Glass bead strap that stays cool on skin',
      'Battery lasts 7 days with rapid charge',
    ],
    colors: [
      { name: 'Moon White', hex: '#f1f5f9' },
      { name: 'Night', hex: '#0b1220' },
    ],
    rating: 4.5,
    reviews: 702,
    inventory: 73,
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  {
    id: 'p-aria',
    name: 'Aria Brew Kettle',
    slug: 'aria-brew-kettle',
    price: 165,
    category: 'Kitchen',
    description:
      'Precision gooseneck kettle with 1°F control, fast ramp, and balanced spout geometry.',
    highlights: [
      '1°F control with 1200W rapid heat',
      'Balanced spout for uninterrupted flow',
      'Hold temp for 30 minutes',
    ],
    colors: [
      { name: 'Matte White', hex: '#f8fafc' },
      { name: 'Onyx', hex: '#111827' },
    ],
    rating: 4.8,
    reviews: 541,
    inventory: 91,
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  {
    id: 'p-solstice',
    name: 'Solstice Smart Mirror',
    slug: 'solstice-smart-mirror',
    price: 980,
    category: 'Home',
    badge: 'Limited',
    description:
      'Full-height smart mirror that pairs with our AI stylist to assemble outfits and track posture.',
    highlights: [
      'AR overlays for fit checks',
      'Posture coaching with haptic cues',
      'Dual studio-grade LED channels',
    ],
    colors: [
      { name: 'Polished Chrome', hex: '#d1d5db' },
      { name: 'Graphite', hex: '#1f2937' },
    ],
    rating: 4.9,
    reviews: 204,
    inventory: 12,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
];

export const stats: Stat[] = [
  { label: 'Carbon saved', value: '2.8M kg', detail: 'through recycled textiles and packaging' },
  { label: 'Average rating', value: '4.8/5', detail: 'across 6,000+ verified customers' },
  { label: 'Delivery speed', value: '48 hrs', detail: 'express fulfillment in continental US' },
  { label: 'Warranty', value: '24 months', detail: 'on all electronics and wearables' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Taylor Stone',
    title: 'Founder, Tempo Studios',
    quote:
      'Every touchpoint feels intentional. The fit recommendations actually matched my training cadence and cut my returns in half.',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
  {
    name: 'Priya Desai',
    title: 'Product Lead, Northwind',
    quote:
      'Shipping was under 48 hours and the packaging was plastic-free. The Nimbus purifier is quieter than our studio fridge.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
  {
    name: 'Jordan Alvarez',
    title: 'Marathoner & Engineer',
    quote:
      'The AstraFlex bounce feels closer to plated race shoes but with better daily stability. Zero hotspots after 80 miles.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
];

export const navigation = [
  { label: 'Collections', href: '#collections' },
  { label: 'Why Us', href: '#story' },
  { label: 'Featured', href: '#featured' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'AI Concierge', href: '#ai' },
];

export const categories = [
  'Footwear',
  'Home',
  'Carry',
  'Audio',
  'Wearables',
  'Kitchen',
];

export const blogPosts: BlogPost[] = [
  {
    title: 'How AI predicts your weekly essentials',
    slug: 'ai-predicts-weekly-essentials',
    excerpt: 'We combine order history, travel plans, and weather to surface what you actually need—before you run out.',
    category: 'Product',
    readTime: '4 min read',
    published: 'Mar 8, 2026',
  },
  {
    title: 'Designing tactile hardware for calmer homes',
    slug: 'tactile-hardware-calm-homes',
    excerpt: 'Why we chose carbon fabrics, ceramic drivers, and brushed aluminum for a quieter visual language.',
    category: 'Design',
    readTime: '6 min read',
    published: 'Feb 27, 2026',
  },
  {
    title: 'Sustainability report: 2.8M kg carbon saved',
    slug: 'sustainability-report-2026',
    excerpt: 'A transparent look at recycled inputs, packaging, and our commitments through 2026.',
    category: 'Impact',
    readTime: '5 min read',
    published: 'Jan 30, 2026',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'When does the AI concierge launch?',
    answer: 'We open invites on April 30, 2026, starting with members and US customers.',
  },
  {
    question: 'What is your delivery promise?',
    answer: '48-hour express delivery in the continental US with carbon offsets included.',
  },
  {
    question: 'Do you support returns?',
    answer: 'Yes—30 day free pickups on all items; footwear must be tried indoors.',
  },
  {
    question: 'How does warranty work?',
    answer: 'Electronics and wearables include a 24-month warranty; textiles include a 12-month craftsmanship guarantee.',
  },
];

export const brands: Brand[] = [
  {
    name: 'Tempo Studios',
    logo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80',
    url: '#',
    tagline: 'Performance design lab for endurance athletes.',
  },
  {
    name: 'Northwind Supply',
    logo: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=200&q=80',
    url: '#',
    tagline: 'Minimal carry engineered for modern travel.',
  },
  {
    name: 'Studio Lumen',
    logo: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=200&q=80',
    url: '#',
    tagline: 'Adaptive lighting crafted for circadian health.',
  },
  {
    name: 'Halo Audio',
    logo: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=200&q=80',
    url: '#',
    tagline: 'Ceramic drivers tuned with studio engineers.',
  },
];
