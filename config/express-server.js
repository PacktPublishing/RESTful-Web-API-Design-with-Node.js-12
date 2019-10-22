const express = require("express");
const server = express();
const PORT = process.env.PORT || 3000;

// override listen method
server.listen = server.listen.bind(server, PORT, () =>
  console.log(`Listening on ${PORT}`)
);

module.exports = server;
