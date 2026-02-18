/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-sans)', 'sans-serif'],
        'display': ['var(--font-display)', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#000000',
          white: '#ffffff',
          neutral: '#404040'
        },
        zinc: {
          DEFAULT: '#000000',
          200: '#e4e4e7',
          300: '#d4d4d8',
          500: '#71717a',
          800: '#27272a',
        },
        error: {
          DEFAULT: '#ef4444',
        }
      }
    },  
  },
  plugins: [],
}

