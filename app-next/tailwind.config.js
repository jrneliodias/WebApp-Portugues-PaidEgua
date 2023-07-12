/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        'moto-g4':'360px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'cardcolor': '#6548a0',
        'navApp':'#8055bd',
        'secondaryColor':'#F7B801',
        'alternativeColor':'#3D348B',
        'alternativeSecColor':'#7678ED',
      }
    },
  },
  plugins: [],
}
