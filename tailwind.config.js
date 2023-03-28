/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'krungthep': ['Krungthep','sans-serif'],
        'montserrat': ['Montserrat','sans-serif'],
      },
      fontSize:{
        qxl: '3.9rem',
        pxl:['1.23rem',{
          lineHeight: '1.45rem',
        }],
        txl:['1.20rem',{
          lineHeight: '1.5rem',
        }],
      },
    },
    screens:{
      'mobile1': {'max': '500px'},
      'tablet1': {'min': '501px','max': '900px'},
      'larger1': {'min': '1500px'},
      'larger2': {'min': '1800px'},
    },
  },
  plugins: [],
}
