import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1b4dff',
          secondary: '#0fb9b1',
          accent: '#f59e0b',
        },
        surface: {
          light: '#f8fafc',
          dark: '#0b1220',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        pill: '999px',
      },
      boxShadow: {
        card: '0 18px 60px rgba(15, 23, 42, 0.12)',
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
