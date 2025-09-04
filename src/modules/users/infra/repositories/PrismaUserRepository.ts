import { User } from "../../domain/UserEntity";

import { UserRepository } from "@/modules/users/domain/UserRepository";

import { prisma } from "@/utils/database/prisma";

export class PrismaUserRepository implements UserRepository {
  constructor(private user = prisma.user) {}

  async save(
    data: Omit<User, "id" | "createdAt" | "updatedAt">
  ): Promise<void> {
    await this.user.create({ data });
  }

  async findById(id: number): Promise<User | null> {
    return await this.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    const query = await this.user.findUnique({ where: { email } });
    return query;
  }

  async update(data: Omit<User, "passwordHash">): Promise<void> {
    await this.user.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        birthDate: data.birthDate,
        phone: data.phone,
      },
    });
  }

  async changePassword(id: number, passwordHash: string): Promise<void> {
    await this.user.update({
      where: { id },
      data: { passwordHash },
    });
  }

  async delete(id: number): Promise<void> {
    await this.user.delete({ where: { id } });
  }
}
