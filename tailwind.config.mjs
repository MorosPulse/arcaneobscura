/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mystical: ['Cinzel', 'serif'],
      },
      dropShadow: {
        'lg': '0 0 8px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
}