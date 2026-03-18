import { blogPosts } from '@/lib/data';
import { Card } from '../ui/card';
import Link from 'next/link';

export function BlogPreview() {
  return (
    <section id="blog" className="max-w-[1200px] mx-auto section-padding py-12 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-secondary font-semibold">Insights</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">From design lab to delivery</h2>
        </div>
        <Link href="#" className="text-sm text-brand-primary">View all posts</Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 card-grid">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="p-5 flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{post.category}</div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{post.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{post.readTime}</span>
              <span>{post.published}</span>
            </div>
            <Link href="#" className="text-sm text-brand-primary">Read article →</Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
