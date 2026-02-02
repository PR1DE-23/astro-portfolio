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
        accent: 'var(--accent)',
        secondary: 'var(--secondary)',
      }
    },
  },
  plugins: [],
}

