import fp from "fastify-plugin";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import { version } from "../../../package.json";

const swaggerPlugin = fp(async (fastify) => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: "FinnCtrlPro API",
        description: "Usage doc API",
        version,
      },
      tags: [],
    },
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "list",
      deepLinking: false,
    },
  });
});

export default swaggerPlugin;
