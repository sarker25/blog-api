const express = require("express");

const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const { applyMiddleware } = require("./middlewares");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
applyMiddleware(app);

app.use((err, req, res, next) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});
module.exports = app;
