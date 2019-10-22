const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const basicAuth = require("express-basic-auth");

module.exports = server => {
  // apply CORS
  server.use(cors());
  // apply HTTP security headers
  server.use(helmet());
  // apply basic authentication - checks req Authentication header
  server.use(
    basicAuth({
      users: {
        admin: "supersecret"
      },
      challenge: true
    })
  );
  // handle request JSON body - no need to use body-parser lib anymore
  server.use(express.json());
};
