/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                green500: 'hsl(158, 36%, 37%)',
                green700: 'hsl(158, 42%, 18%)',
                black: 'hsl(212, 21%, 14%)',
                grey: 'hsl(228, 12%, 48%)',
                cream: 'hsl(30, 38%, 92%)',
                white: 'hsl(0, 0%, 100%)',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                fraunces: ['Fraunces', 'serif'],
            },
        },
    },
    plugins: [],
};
