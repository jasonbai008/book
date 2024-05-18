const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  outputDir: "docs",
  devServer: {
    host: 'localhost',
    proxy: {
      "/asset2": {
        target: "https://jasonbai008.github.io",
        ws: true,
        changeOrigin: true,
      },
      "/asset": {
        target: "https://jasonbai008.github.io",
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
