import fp from "fastify-plugin";

import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const authPlugin = fp(
  async (instance: FastifyInstance) => {
    instance.decorate(
      "auth",
      async (req: FastifyRequest, reply: FastifyReply) => {
        try {
          await req.jwtVerify();
        } catch (err) {
          console.error(err);
          reply.status(401).send({ message: "Unauthorized" });
        }
      },
    );
  },
  {
    name: "auth-plugin",
  },
);

export default authPlugin;

declare module "fastify" {
  interface FastifyInstance {
    auth(request: FastifyRequest, reply: FastifyReply): Promise<void>;
  }
}
