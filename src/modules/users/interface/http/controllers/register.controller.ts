import { FastifyReply, FastifyRequest } from "fastify";

import { RegisterUserUseCase } from "@/modules/users/app/usecases/register-user.useCase";

import { RegisterUserBody } from "../../dtos/RegisterUserDTO";

type RegisterRequest = {
  Body: RegisterUserBody;
};

export class RegisterUserController {
  constructor(private useCase: RegisterUserUseCase) {}

  handle = async (req: FastifyRequest<RegisterRequest>, rep: FastifyReply) => {
    const data = req.body;

    await this.useCase.exec(data);

    rep.code(201).send({ message: "created user" });
  };
}
