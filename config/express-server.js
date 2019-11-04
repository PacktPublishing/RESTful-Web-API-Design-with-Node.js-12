import express from "express";
const server = express();
const PORT = process.env.PORT;
const HOSTNAME = "0.0.0.0";

// override listen method
server.listen = server.listen.bind(server, PORT, HOSTNAME, () =>
  console.log(`Listening on ${PORT}`)
);

export { server };
