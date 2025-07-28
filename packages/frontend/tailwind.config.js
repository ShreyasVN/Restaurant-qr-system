module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'glass-bg': 'rgba(255, 255, 255, 0.2)',
      },
      borderColor: {
        DEFAULT: 'rgba(255, 255, 255, 0.2)',
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
