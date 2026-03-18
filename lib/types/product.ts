export type ColorOption = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  badge?: string;
  description: string;
  highlights: string[];
  colors: ColorOption[];
  rating: number;
  reviews: number;
  inventory: number;
  image: string;
  featured: boolean;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
  rating: number;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  published: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Brand = {
  name: string;
  logo: string;
  url: string;
  tagline: string;
};
