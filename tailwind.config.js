/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports=withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundColor:{
        'bg-black':'#1E1E1E',
        'bg-primary':'#0182AC',
        'bg-secondary':'#0862C2',
        'bg-tertiary':'#08C2BF'
      },
      colors:{
        'primary':'#0182AC',
        'secondary':'#0862C2',
        'tertiary':'#08C2BF'
      }
    },
    
    backgroundImage:{
      'SecGradP':"linear-gradient(to right , #0862C2 30%,#08C2BF)",
      'TerGradP':"linear-gradient(to left , #08C2BF 30%,#0182AC)",
      'TerGradS':"linear-gradient(to left , #0182AC 30%,#0862C2)",
    }
  },
  plugins: [],
})

