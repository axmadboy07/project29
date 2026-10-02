const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const routesPath = path.resolve(__dirname, "../routes/*.js").split(path.sep).join("/");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
    },
    servers: [
      {
        url: "/api",
        description: "Local API server",
      },
    ],
  },
  apis: [routesPath],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
