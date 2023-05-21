/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: 'var(--font-barlow)',
        barlowCondensed: 'var(--font-barlow-condensed)',
        bellefair: 'var(--font-bellefair)',
      },
    },
  },
  plugins: [],
}
