import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        az: {
          bg:        'var(--az-bg)',
          'bg-off':  'var(--az-bg-off)',
          card:      'var(--az-card)',
          border:    'var(--az-border)',
          muted:     'var(--az-muted)',
          secondary: 'var(--az-secondary)',
          primary:   'var(--az-primary)',
          inverse:   'var(--az-inverse)',
        },
      },
      fontFamily: {
        display: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        card:  '10px',
        pill:  '999px',
        input: '8px',
        tag:   '6px',
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card:         '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.14)',
        btn:          '0 4px 16px rgba(0,0,0,0.20)',
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'beam-shimmer': {
          '0%':   { transform: 'translateX(-120%) skewX(-15deg)' },
          '100%': { transform: 'translateX(220%) skewX(-15deg)' },
        },
      },
      animation: {
        'fade-in-up':   'fade-in-up 0.6s ease both',
        'fade-in':      'fade-in 0.4s ease both',
        'beam-shimmer': 'beam-shimmer 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
