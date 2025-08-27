import { config } from "dotenv";
config();

import Fastify from "fastify";

import { HttpBaseError } from "./utils/errors/HttpBaseError";

import { registerPlugins } from "./utils/plugins";
import { registerRoutes } from "./core/routes";

import { httpServer } from "./server";

const instance = Fastify();

// Error handling
instance.setErrorHandler((err, _req, rep) => {
  if (err instanceof HttpBaseError) {
    return rep.status(err.statusCode).send({ error: err.message });
  }

  console.error(err);
  return rep.status(500).send({ error: "internal server error" });
});

// Plugins
registerPlugins(instance);

// Routes
registerRoutes(instance);

// Servers
httpServer(instance);
