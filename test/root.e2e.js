import request from "supertest";
import express from "express";
import { rootRouter } from "../routes";

const server = express();

server.use("/v1", rootRouter);

describe("GET /v1", function() {
  it("responds with json", function(done) {
    request(server)
      .get("/v1")
      .expect("Content-Type", /json/)
      .expect(res => {
        res.body.headers = {};
      })
      .expect(
        200,
        {
          baseUrl: "/v1",
          headers: {},
          host: "127.0.0.1",
          ip: "::ffff:127.0.0.1",
          message: "Handling GET request",
          method: "GET",
          path: "/"
        },
        done
      );
  });
});

describe("POST /v1", function() {
  it("responds with json", function(done) {
    request(server)
      .post("/v1")
      .expect("Content-Type", /json/)
      .expect(res => {
        res.body.headers = {};
      })
      .expect(
        200,
        {
          baseUrl: "/v1",
          headers: {},
          host: "127.0.0.1",
          ip: "::ffff:127.0.0.1",
          message: "Handling POST request",
          method: "POST",
          path: "/"
        },
        done
      );
  });
});

describe("PUT /v1", function() {
  it("responds with json", function(done) {
    request(server)
      .put("/v1")
      .expect("Content-Type", /json/)
      .expect(res => {
        res.body.headers = {};
      })
      .expect(
        200,
        {
          baseUrl: "/v1",
          headers: {},
          host: "127.0.0.1",
          ip: "::ffff:127.0.0.1",
          message: "Handling PUT request",
          method: "PUT",
          path: "/"
        },
        done
      );
  });
});

describe("DELETE /v1", function() {
  it("responds with json", function(done) {
    request(server)
      .delete("/v1")
      .expect("Content-Type", /json/)
      .expect(res => {
        res.body.headers = {};
      })
      .expect(
        501,
        {
          baseUrl: "/v1",
          headers: {},
          host: "127.0.0.1",
          ip: "::ffff:127.0.0.1",
          message: "Handling DELETE request",
          method: "DELETE",
          path: "/"
        },
        done
      );
  });
});