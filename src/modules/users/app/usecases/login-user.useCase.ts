import { JWT } from "@fastify/jwt";
import { compareSync } from "bcrypt";

import { UnauthorizedError } from "@/utils/errors/UnauthorizedError";

import { UserRepository } from "../../domain/UserRepository";

interface LoginUserInput {
  email: string;
  password: string;
}

export class LoginUserUseCase {
  constructor(private repo: UserRepository, private jwt: JWT) {}

  async exec(data: LoginUserInput) {
    const user = await this.repo.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedError("email invalid");
    }

    if (!compareSync(data.password, user.passwordHash)) {
      throw new UnauthorizedError("password incorrect");
    }

    const iat = Math.floor(Date.now() / 1000);
    const token = this.jwt.sign({
      sub: user.id,
      exp: iat + 18_000,
      iat,
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}
