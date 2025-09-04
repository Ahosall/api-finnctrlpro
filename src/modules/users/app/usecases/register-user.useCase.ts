import { hashSync } from "bcrypt";

import { ConflictError } from "@/utils/errors/ConflictError";

import { UserRepository } from "../../domain/UserRepository";

interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserUseCase {
  constructor(private repo: UserRepository) {}

  async exec(data: RegisterUserInput) {
    const exists = await this.repo.findByEmail(data.email);
    if (exists) {
      throw new ConflictError("email already in use");
    }

    const passwordHash = hashSync(data.password, 12);
    await this.repo.save({
      name: data.name,
      email: data.email,
      passwordHash,
      role: "PERSONAL",
      birthDate: null,
      phone: null,
    });
  }
}
