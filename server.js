import { server } from "./config"; // <==  ES6 mdules
import { rootRouter } from "./routes";
import registerMiddlewares from "./middlewares";

async function main() {
  registerMiddlewares(server);
  server.use("/v1", rootRouter);

  server.listen();
}

main();
