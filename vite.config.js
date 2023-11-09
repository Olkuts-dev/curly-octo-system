const vuePlugin = require('@vitejs/plugin-vue')

module.exports = {
  plugins: [vuePlugin()],
  build: {
    minify: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/index";`,
      },
    },
  },
};
