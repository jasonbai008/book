const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  outputDir: "docs",
  productionSourceMap: false,
  devServer: {
    host: "localhost",
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
  // configureWebpack 值为对象，会通过 webpack-merge 合并到最终的配置
  configureWebpack: {
    externals: {
      // CDN 的 Element 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
      vue: "Vue",
      // 属性名称 element-ui, 表示遇到 import xxx from 'element-ui' 这类引入 'element-ui'的，
      // 不去 node_modules 中找，而是去找 全局变量 ELEMENT
      "element-ui": "ELEMENT",
    },
  },
});
