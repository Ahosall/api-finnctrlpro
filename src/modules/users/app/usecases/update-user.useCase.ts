import { UserRepository } from "../../domain/UserRepository";

type UpdateUserInput = Partial<{
  name: string;
  email: string;
  birthDate: Date;
  phone: string;
}>;

export class UpdateUserUseCase {
  constructor(private repo: UserRepository) {}

  async exec(id: number, data: UpdateUserInput) {
    const user = await this.repo.findById(id);
    if (!user) {
      throw new Error("What... how did he get here? He doesn't exist...");
    }

    if (data.name) user.name = data.name;
    if (data.email) user.email = data.email;
    if (data.birthDate) user.birthDate = data.birthDate;
    if (data.phone) user.phone = data.phone;

    await this.repo.update(user);
  }
}
