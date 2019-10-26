import defaultMiddleware from "./default";

// register all middleware
export default function registerMiddlewares(server) {
  defaultMiddleware(server);
}
