import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de reservas ",
      version: "1.0.0",
      description:
        "Documentación de la API de reservas de taxis de Crystal Sands Ride",
      contact: {
        name: "Maikol Campos",
        email: "camposmaikol1@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Servidor local",
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpecs = swaggerJsdoc(options);
export { swaggerUi };
