import { verifyToken } from "../utils/jwt";
import { NextFunction, Request, Response } from "express";
import { TUser } from "../types/types";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Требуется токен авторизации" });
    return;
  }

  const decoded = verifyToken(token) as TUser | null;
  if (!decoded) {
    res.status(403).json({ message: "Неверный или просроченный токен" });
    return;
  }

  req.user = decoded;
  next();
};
