import prisma from "../utils/prisma";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";
import { TAuthPayload } from "../types/types";

export const register = async ({
  email,
  password,
}: TAuthPayload): Promise<TAuthPayload> => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error("Email уже используется");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
};

export const login = async ({ email, password }: TAuthPayload) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Неверные учетные данные");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Неверные учетные данные");
  }

  return generateToken({ userId: user.id, email: user.email });
};
