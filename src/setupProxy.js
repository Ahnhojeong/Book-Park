const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/data4library", {
      target: "http://data4library.kr/api",
      pathRewrite: {
        "^/data4library": "",
      },
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/book/data4library", {
      target: "http://data4library.kr/api",
      pathRewrite: {
        "^/book/data4library": "",
      },
      changeOrigin: true,
    })
  );
};
