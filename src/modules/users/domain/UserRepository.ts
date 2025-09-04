import { User } from "./UserEntity";

export interface UserRepository {
  /**
   * Method to create a user in the database
   * @param data - User data
   */
  save(data: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<void>;
  /**
   * Method to get user
   * @param id - Unique user identifier
   */
  findById(id: number): Promise<User | null>;
  /**
   * Method to search for user by email
   * @param email - Email for search
   */
  findByEmail(email: string): Promise<User | null>;
  /**
   * Method to update user data
   * @param data - User data
   */
  update(data: Omit<User, "passwordHash">): Promise<void>;
  /**
   * Method to change user password
   * @param id - Unique user identifier
   * @param passwordHash - New password to update
   */
  changePassword(id: number, passwordHash: string): Promise<void>;
  /**
   * Method to delete user account
   * @param id - Unique user identifier
   */
  delete(id: number): Promise<void>;
}
