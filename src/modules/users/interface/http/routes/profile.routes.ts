import { FastifyInstance } from "fastify";

import { container } from "@/core/container";

import {
  DeleteUserSchema,
  GetUserSchema,
  UpdateUserSchema,
} from "@/utils/routes-schemas/users.routes-schemas";

import { UpdateUserBody } from "../../dtos/UpdateUserDTO";

export const profileUsersRoutes = (instance: FastifyInstance) => {
  const { meController, updateController, deleteController } =
    container.buildUserModule(instance);

  instance.get(
    "/me",
    { preHandler: [instance.auth], schema: GetUserSchema },
    meController.handle
  );

  instance.patch<{ Body: UpdateUserBody }>(
    "/update",
    { preHandler: [instance.auth], schema: UpdateUserSchema },
    updateController.handle
  );

  instance.delete(
    "/delete",
    { preHandler: [instance.auth], schema: DeleteUserSchema },
    deleteController.handle
  );
};
