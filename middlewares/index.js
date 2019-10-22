const defaultMiddleware = require("./default");

// register all middleware
module.exports = function registerMiddlewares(server) {
  defaultMiddleware(server);
};
