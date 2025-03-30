import prisma from "../utils/prisma";
import { TFruit } from "../types/types";

export const getAll = async () => {
  return await prisma.fruits.findMany();
};

export const getOne = async (id: number) => {
  return prisma.fruits.findFirst({
    where: {
      id,
    },
  });
};

export const create = async ({ name, color, sellBy }: Omit<TFruit, "id">) => {
  return prisma.fruits.create({
    data: {
      name,
      color,
      sellBy,
    },
  });
};

export const createMocks = async () => {
  return prisma.fruits.createManyAndReturn({
    data: [
      { name: "Яблоко", color: "зеленый", sellBy: "2025-04-06T12:34:56.789Z" },
      {
        name: "Апельсин",
        color: "оранжевый",
        sellBy: "2025-04-06T12:34:56.789Z",
      },
      { name: "Банан", color: "желтый", sellBy: "2025-04-06T12:34:56.789Z" },
      { name: "Манго", color: "оранжевый", sellBy: "2025-04-06T12:34:56.789Z" },
      { name: "Груша", color: "зеленый", sellBy: "2025-04-06T12:34:56.789Z" },
    ],
  });
};

export const update = async ({ id, name, color, sellBy }: TFruit) => {
  return prisma.fruits.update({
    where: {
      id,
    },
    data: {
      name,
      color,
      sellBy,
    },
  });
};

export const remove = async (id: number) => {
  return prisma.fruits.delete({
    where: {
      id,
    },
  });
};
