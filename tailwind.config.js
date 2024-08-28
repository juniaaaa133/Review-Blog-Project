/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        'xl' : {'max' : '990px'},
        'lg': {'max': '768px'},  
        'md': {'max': '640px'},  
        'sm': {'max': '480px'},
        // => @media (max-width: 480px) { ... }

        'XL' : {'min' : '990px'},
        'LG': {'min': '768px'},  
        'MD': {'min': '640px'},  
        'SM': {'min': '480px'},
      },
    extend: {},
  },
  plugins: [],
}

