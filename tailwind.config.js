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
            }
        },
    },
    plugins: [
        require('tailwind-css-logical-properties')({})
    ],
}
