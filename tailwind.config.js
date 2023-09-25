/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
],
    mode: 'jit',
  theme: {
    extend: {
      transitionProperty: {
        'left': 'left',
      },
      'translate-x-0': 'translateX(0)',
    'translate-x-full': 'translateX(100%)',
    },
  },
  plugins: [],
}

