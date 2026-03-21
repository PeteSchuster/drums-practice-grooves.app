/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        surface: '#1a1a1a',
        surface2: '#252525',
        orange: {
          DEFAULT: '#e07b00',
          light: '#f5a623',
        },
        blue: {
          ios: '#007AFF',
        },
        muted: '#999999',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
