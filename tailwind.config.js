/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandgreen: '#134A39',
        lightgreen: '#EAF7F3',
        brandgray: '#1A1A1A',
        tertiary: '#415754',
        textgreen: '#134A39',
        primary500: '#2DB187',
        foundation: '#207E60',
        'transparent': 'rgba(0, 0, 0, 50%)',
      },
      gridTemplateColumns: {
        'temp': '2.5fr 2fr',
        'temp2': 'repeat(auto-fit, minmax(300px, 1fr))',
        'temp3': 'auto 1.5fr',
        'temp4': 'repeat(3, 1fr)',
        'temp5': 'repeat(5, 1fr)',
        'temp6': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      gridTemplateRows: {
        'row': 'auto 1fr',
        'row2': '1fr auto'
      },
      screens: {
        'tab': {'max': '900px'},
        'tab2': {'max': '1200px'},
        'tab3': {'max': '1058px'},
        'break': {'max': '1058px'},
        'mob': {'max': '600px'},
        'midDesk': {'max': '800px'},
        'desk': {'min': '900px'},
      },
      fontFamily: {
        'cabin': ['Cabin'],
        'merri': ['Merriweather']
      }
    },
  },
  plugins: [],
}