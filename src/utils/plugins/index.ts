import { FastifyInstance } from "fastify";

import corsPlugin from "./cors";
import jwtPlugin from "./jwt";
import authPlugin from "./auth";
import swaggerPlugin from "./swagger";

const plugins = [corsPlugin, jwtPlugin, authPlugin, swaggerPlugin];

export const registerPlugins = (instance: FastifyInstance) => {
  plugins.map((i) => instance.register(i));
};
