const proxy = require("http-proxy-middleware");

module.exports = function (index) {
  index.use(
    proxy("/", {
      target: "http://localhost:8001/",
    })
  );
};
