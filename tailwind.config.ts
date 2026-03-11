import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052FF',
          cyan: '#00D4FF',
        },
        surface: {
          base: '#FFFFFF',
          card: '#F7F7F7',
          elevated: '#F0F0F0',
          border: '#E0E0E0',
          muted: '#FAFAFA',
        },
        text: {
          primary: '#0F0F0F',
          secondary: '#4A4A4A',
          muted: '#717171',
          disabled: '#999999',
          inverse: '#FFFFFF',
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
