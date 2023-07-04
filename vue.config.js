const path = require("path");

module.exports = {
  assetsDir: "assets",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss"`,
      },
      scss: {
        additionalData: `@import "@/assets/styles/mixins.scss";`,
      },
      sass: {
        additionalData: `@import "@/assets/styles/common.scss"`,
      },
    },
  },
  publicPath: "/vue_popol/",
  outputDir: "docs",
  devServer: {
    port: 3000,
    overlay: false,
    watchOptions: {
      ignored: "**/node_modules",
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
  chainWebpack: config => {
    config.output.filename("js/[name].js");
    config.plugin("html").tap(args => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = "Community";
      return args;
    });
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
  transpileDependencies: ["vuetify"],
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
    });
}
