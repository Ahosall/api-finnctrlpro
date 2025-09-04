import { UserRepository } from "../../domain/UserRepository";

export class MeUserUseCase {
  constructor(private repo: UserRepository) {}

  async exec(id: number) {
    const user = await this.repo.findById(id);
    if (!user) {
      throw new Error("What... how did he get here? He doesn't exist...");
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      birthDate: user.birthDate,
      phone: user.phone,
    };
  }
}
