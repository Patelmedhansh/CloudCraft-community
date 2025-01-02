import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        dark: {
          100: '#1a1b1e',
          200: '#141517',
          300: '#0e0f11',
          400: '#08090a',
          500: '#020304',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#fff',
            a: {
              color: '#0072f5',
              '&:hover': {
                color: '#338ef7',
              },
            },
            h1: {
              color: '#fff',
              fontWeight: '700',
            },
            h2: {
              color: '#fff',
              fontWeight: '600',
            },
            h3: {
              color: '#fff',
              fontWeight: '600',
            },
            code: {
              color: '#fff',
              background: '#1a1b1e',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};