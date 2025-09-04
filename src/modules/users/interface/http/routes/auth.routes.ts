import { FastifyInstance } from "fastify";

import { container } from "@/core/container";

import {
  LoginUserSchema,
  RegisterUserSchema,
} from "@/utils/routes-schemas/users.routes-schemas";

import { RegisterUserBody } from "../../dtos/RegisterUserDTO";
import { LoginUserBody } from "../../dtos/LoginUserDTO";

export const authUsersRoutes = (instance: FastifyInstance) => {
  const { registerController, loginController } =
    container.buildUserModule(instance);

  instance.post<{ Body: RegisterUserBody }>(
    "/register",
    { schema: RegisterUserSchema },
    registerController.handle
  );

  instance.post<{ Body: LoginUserBody }>(
    "/login",
    { schema: LoginUserSchema },
    loginController.handle
  );
};
