const { creditsByUser, creditsByUserAndStore, manageCredits } = require('./swagger-tags/credits.swagger.tag');

const swaggerDoc = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "API Sistema de Créditos",
    description: "API para agregar, descontar y consultar créditos por usuario y por cada tienda (prueba)",
  },
  servers: [
    {
      url: "{env}:{port}/{basePath}",
      description: "Servidor Running",
      variables: {
        env: {
          default: process.env.URL || "http://localhost",
          description: "Develop Environment",
        },
        port: {
          default: process.env.PORT || 3000,
        },
        basePath: {
          default: "api/v1",
        },
      },
    },
  ],
  tags: [
    {
      name: "Créditos",
    }
  ],
  paths: {
    "/credits/{email}": {
      get: creditsByUser,
    },
    "/credits/{email}/{store}": {
      get: creditsByUserAndStore,
    },
    "/credits": {
      post: manageCredits,
    }
  },
};

module.exports = { swaggerDoc };
