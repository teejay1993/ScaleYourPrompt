/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1220',
      },
      boxShadow: {
        card: '0 20px 60px -35px rgba(59, 130, 246, 0.55)',
      },
    },
  },
  plugins: [],
}
