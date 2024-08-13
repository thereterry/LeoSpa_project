/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      inset: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-4': '-1rem',
        '-8': '-2rem',
        '-16': '-4rem',
      },
      colors: {
        'custom-gray': '#888888',
        'custom-pink': '#e79fa1',
        'custom-red': '#F26A6C',
      },
      fontFamily: {
        'serif': ['Lora', 'serif'],
        'display': ['Playfair Display', 'serif'],

      },

    },
  },
  variants: {},
  plugins: [
    require('daisyui')
  ],
}
