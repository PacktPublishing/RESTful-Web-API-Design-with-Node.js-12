import { server } from "./config"; // <==  ES6 mdules
import { rootRouter } from "./routes";
import registerMiddlewares from "./middlewares";

async function main() {
  registerMiddlewares(server);
  server.all("/", (req, res) => res.redirect("/v1"));
  server.use("/v1", rootRouter);

  server.listen();
}

main();
