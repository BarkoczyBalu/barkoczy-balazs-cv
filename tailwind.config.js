/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    minHeight: {
      '40': '10rem',
      '80': '20rem',
      '120': '30rem',
      '160': '40rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#f0faff',
          100: '#e0f3fe',
          200: '#b9e9fe',
          300: '#7cd8fd',
          400: '#36c6fa',
          500: '#0cafeb',
          600: '#0097d8',
          700: '#016fa3',
          800: '#065e86',
          900: '#0b4e6f',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
