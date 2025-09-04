import { FastifyReply, FastifyRequest } from "fastify";

import { LoginUserUseCase } from "@/modules/users/app/usecases/login-user.useCase";

import { LoginUserBody } from "../../dtos/LoginUserDTO";

type LoginRequest = {
  Body: LoginUserBody;
};

export class LoginUserController {
  constructor(private useCase: LoginUserUseCase) {}

  handle = async (req: FastifyRequest<LoginRequest>, rep: FastifyReply) => {
    const data = req.body;

    const response = await this.useCase.exec(data);

    rep.status(200).send(response);
  };
}
