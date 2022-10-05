/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    
    extend: {
      colors:{
        pin: 'hsl(333,100%,52%)',
        bla: 'hsl(210deg, 30%, 8%)',
        blu: 'hsl(230, 100%, 69%)',
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily:{
        sans: ['PT Sans', 'sans-serif'],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
      }),
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
