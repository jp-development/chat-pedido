module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('/src/assets/fondo-login.png')",
      },
      colors: {
        'primary': '#2e66f3',
        'secondary': '#43a0f1',
      }
    },
  },
  plugins: [],
}