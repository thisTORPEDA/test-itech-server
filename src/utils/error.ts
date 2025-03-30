import { Response } from "express";

export const sendError = (res: Response, error: unknown, status = 400) => {
  if (error instanceof Error) {
    res.status(status).json({ message: error.message });
  } else {
    res.status(status).json({ message: "Необработанная ошибка" });
  }
};
