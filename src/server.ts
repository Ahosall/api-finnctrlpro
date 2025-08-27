import { FastifyInstance } from "fastify";

export const httpServer = (instance: FastifyInstance) => {
  const config = {
    host: "0.0.0.0",
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  };

  instance.listen(config, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Listen on ${address}`);
  });
};
