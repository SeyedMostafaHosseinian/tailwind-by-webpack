/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:'class',
    content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        // screens: {
        //     sm:'480px',
        //     md:'768px',
        //     lg:'976px',
        //     xl:'1440px'
        // },
        extend: {
            colors:{
                myColor1:"#e2e"
            },
            screen: {
                esm:'400px'
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
              },
            
        },
    },
    plugins: [
        require('tailwind-css-logical-properties')({})
    ],
}
