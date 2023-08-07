/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
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
      colors:{
        'cardcolor': '#6548a0',
        'navApp':'#8055bd',
        'secondaryColor':'#F7B801',
        'alternativeColor':'#3D348B',
        'alternativeSecColor':'#7678ED',
      },
      customClass: {
        color: 'blue',
      },
    },
  },
  plugins: [],
}
