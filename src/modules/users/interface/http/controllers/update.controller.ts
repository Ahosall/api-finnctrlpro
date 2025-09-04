import { FastifyReply, FastifyRequest } from "fastify";

import { UpdateUserBody } from "../../dtos/UpdateUserDTO";
import { UpdateUserUseCase } from "@/modules/users/app/usecases/update-user.useCase";

export type UpdateUserRequest = {
  Body: UpdateUserBody;
};

export class UpdateUserController {
  constructor(private useCase: UpdateUserUseCase) {}

  handle = async (
    req: FastifyRequest<UpdateUserRequest>,
    rep: FastifyReply
  ) => {
    const data = req.body;

    await this.useCase.exec(req.user.sub, data);

    rep.status(200).send({ message: "udpated user" });
  };
}
