import { FastifyInstance } from "fastify";

import { PrismaUserRepository } from "@/modules/users/infra/repositories/PrismaUserRepository";

import { RegisterUserUseCase } from "@/modules/users/app/usecases/register-user.useCase";
import { LoginUserUseCase } from "@/modules/users/app/usecases/login-user.useCase";
import { MeUserUseCase } from "@/modules/users/app/usecases/me-user.useCase";
import { UpdateUserUseCase } from "@/modules/users/app/usecases/update-user.useCase";
import { DeleteUserUseCase } from "@/modules/users/app/usecases/delete-user.useCase";

import { RegisterUserController } from "@/modules/users/interface/http/controllers/register.controller";
import { LoginUserController } from "@/modules/users/interface/http/controllers/login.controller";
import { MeUserController } from "@/modules/users/interface/http/controllers/me.controller";
import { UpdateUserController } from "@/modules/users/interface/http/controllers/update.controller";
import { DeleteUserController } from "@/modules/users/interface/http/controllers/delete.controller";

export const container = {
  buildUserModule: (instance: FastifyInstance) => {
    const repo = new PrismaUserRepository();

    const registerUseCase = new RegisterUserUseCase(repo);
    const loginUseCase = new LoginUserUseCase(repo, instance.jwt);
    const meUseCase = new MeUserUseCase(repo);
    const updateUseCase = new UpdateUserUseCase(repo);
    const deleteUseCase = new DeleteUserUseCase(repo);

    return {
      registerController: new RegisterUserController(registerUseCase),
      loginController: new LoginUserController(loginUseCase),
      meController: new MeUserController(meUseCase),
      updateController: new UpdateUserController(updateUseCase),
      deleteController: new DeleteUserController(deleteUseCase),
    };
  },
};
