import { UserRepository } from "../../domain/UserRepository";

export class DeleteUserUseCase {
  constructor(private repo: UserRepository) {}

  async exec(id: number) {
    const user = await this.repo.findById(id);
    if (!user) {
      throw new Error("What... how did he get here? He doesn't exist...");
    }

    await this.repo.delete(id);
  }
}
