/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
        'md': '764px',
        'lg': '1024px',
        'xl': '1280px',
        'smmax': {'max': '425px'},
        'mdmax': {'max': '764px'},
        'mdsmax': {'max': '874px'},
        'mddmax':{'max':'900px'},
        'lgmax': {'max': '1024px'},
        'xlmax': {'max': '1155px'},
        'xxlmax': {'max': '1280px'},
        'xxxlmax':{'max':'1345px'},
      },
      fontFamily: {
        'logo': ['Berkshire Swash', 'serif'],
      },
    },
  },
  plugins: [],
}

