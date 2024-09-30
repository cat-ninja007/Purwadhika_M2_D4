// import { transform } from 'typescript';

// import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0B0C0E',
        'dark-gray': '#3C3D3E',
        'light-gray': '#C7D0D9',  // note 'light-gray' instead of 'light-grey' for consistency
        'off-white': '#F4F7FA',
      },
      animation:{
        "loop-scroll": "loop-scroll 10s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"}
        }
      }
    },
  },
  plugins: [],
}