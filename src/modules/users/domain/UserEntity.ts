export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  role: "PERSONAL" | "BUSINESS";
  birthDate: Date | null;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
}
