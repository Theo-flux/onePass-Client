/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#1B1B1B',
      gray: '#848484',
      bitterSweet: '#FF6464',
      error: '#D80D3D',
      comet: '#545974',
      silver: '#BABABA',
      borderLine: '#F1F1F1',

      neutral: {
        0: '#FFFFFF',
        50: '#F6F6F6',
        75: '#E0E0E0',
        100: '#E7E7E7',
        200: '#D1D1D1',
        300: '#B0B0B0',
        400: '#888888',
        500: '#6D6D6D',
        600: '#5D5D5D',
        700: '#474747',
        800: '#454545',
        900: '#3D3D3D',
        950: '#222222'
      }
    },

    extend: {
      width: {
        mobile: '375px',
        desktop: '1440px'
      },
      maxWidth: {
        mobile: '375px',
        desktop: '1440px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.4rem',
        '7xl': '4rem'
      }
    },

    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1536px'
    }
  },
  plugins: []
};
