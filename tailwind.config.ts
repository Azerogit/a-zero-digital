import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052FF',
          cyan: '#00D4FF',
        },
        surface: {
          base:     'var(--color-surface-base)',
          card:     'var(--color-surface-card)',
          elevated: 'var(--color-surface-elevated)',
          border:   'var(--color-surface-border)',
          muted:    'var(--color-surface-muted)',
        },
        text: {
          primary:   'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted:     'var(--color-text-muted)',
          disabled:  'var(--color-text-disabled)',
          inverse:   'var(--color-text-inverse)',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        form: ['Barlow', 'sans-serif'],
        logo: ['"Allerta Stencil"', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        pill: '56px',
        circle: '100px',
        input: '8px',
        tag: '12px',
      },
      maxWidth: {
        container: '1596px',
      },
    },
  },
  plugins: [],
}

export default config
