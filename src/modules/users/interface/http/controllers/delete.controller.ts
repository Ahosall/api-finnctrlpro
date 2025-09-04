import { FastifyReply, FastifyRequest } from "fastify";

import { DeleteUserUseCase } from "@/modules/users/app/usecases/delete-user.useCase";

export class DeleteUserController {
  constructor(private useCase: DeleteUserUseCase) {}

  handle = async (req: FastifyRequest, rep: FastifyReply) => {
    const userId = req.user.sub;

    await this.useCase.exec(userId);

    rep.status(200).send({ message: "deleted user" });
  };
}
