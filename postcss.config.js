module.exports = {
  modules: true,
  plugins: {
    'postcss-modules': {
      globalModulePaths: [
        'app.css'
      ]
    },
    'tailwindcss': true
  }
}
