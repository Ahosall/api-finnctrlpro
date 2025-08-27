import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";

import { FastifyInstance } from "fastify";

const jwtPlugin = fp(
  async (instance: FastifyInstance) => {
    instance.register(fastifyJwt, {
      secret: process.env.JWT_SECRET ?? "superkeysecret",
    });
  },
  { name: "cors-plugin" },
);

export default jwtPlugin;

interface UserPayload {
  sub: number;
  iat: number;
  exp: number;
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: UserPayload;
    payload: UserPayload;
  }
}
