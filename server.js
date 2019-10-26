// const { server } = require("./config");  <==  CommonJS mdules
import { server } from "./config";       // <==  ES6 mdules

// const { rootRouter } = require("./routes");
import { rootRouter } from "./routes";

// const registerMiddlewares = require("./middlewares");
import registerMiddlewares from "./middlewares";

async function main() {
  registerMiddlewares(server);
  server.use("/v1", rootRouter);

  server.listen();
}

main();
