/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        "birthday-pink": '#DF80AC',
        "birthday-blue": '#579FF4',
        "birthday-yellow": '#FCB325',
        "birthday-green": '#098E27',
      },
    },
  },
  plugins: [],
};
