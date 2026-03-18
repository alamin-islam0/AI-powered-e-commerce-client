'use client';

import { useTheme } from './providers/theme-provider';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="border border-slate-200/60 dark:border-slate-800/70 rounded-full"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
}
