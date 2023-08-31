const cors = require("cors");
const morgan = require("morgan");
const OpenApiValidator = require("express-openapi-validator");
const express = require("express");
const applyMiddleware = (app) => {
  app.use(
    OpenApiValidator.middleware({
      apiSpec: "./swagger.yaml",
      //   validateRequests: true, // (default)
      //   validateResponses: true, // false by default
    })
  );
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
};

module.exports = { applyMiddleware };
