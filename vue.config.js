// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule("media")
      .use("url-loader")
      .tap(options => {
        return {
          ...options,
          limit: 1048576
        };
      });
  }
};
