import { FastifyInstance } from "fastify";

import { authUsersRoutes } from "@/modules/users/interface/http/routes/auth.routes";
import { profileUsersRoutes } from "@/modules/users/interface/http/routes/profile.routes";

export const registerRoutes = (instance: FastifyInstance) => {
  instance.register(authUsersRoutes, { prefix: "/auth" });
  instance.register(profileUsersRoutes, { prefix: "/profile" });
};
