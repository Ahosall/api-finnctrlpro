import { FastifyReply, FastifyRequest } from "fastify";

import { MeUserUseCase } from "@/modules/users/app/usecases/me-user.useCase";

export class MeUserController {
  constructor(private useCase: MeUserUseCase) {}

  handle = async (req: FastifyRequest, rep: FastifyReply) => {
    const user = await this.useCase.exec(req.user.sub);

    rep.status(200).send(user);
  };
}
