/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smoothBounce: {
          '0%, 100%': { transform: 'translateY(-3.5px)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'translateY(3.5px)', animationTimingFunction: 'ease-in-out' },
        },
      },
      animation: {
        smoothBounce: 'smoothBounce 2.5s infinite',
      },
    },
  },
  plugins: [],
}