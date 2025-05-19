/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce4fd',
          200: '#99c9fb',
          300: '#66aef9',
          400: '#3393f7',
          500: '#0078f5',
          600: '#0060c4',
          700: '#004893',
          800: '#003062',
          900: '#001831',
        },
        secondary: {
          50: '#e6faf9',
          100: '#ccf5f4',
          200: '#99ebe9',
          300: '#66e1de',
          400: '#33d7d3',
          500: '#00cdc8',
          600: '#00a4a0',
          700: '#007b78',
          800: '#005250',
          900: '#002928',
        },
        accent: {
          50: '#fdf8e6',
          100: '#fbf1cc',
          200: '#f7e399',
          300: '#f3d566',
          400: '#efc733',
          500: '#ebb900',
          600: '#bc9400',
          700: '#8d6f00',
          800: '#5e4a00',
          900: '#2f2500',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
    },
  },
  plugins: [],
};