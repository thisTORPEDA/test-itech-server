import * as authService from "../services/authServices";
import { Request, Response } from "express";
import { TAuthPayload } from "../types/types";
import { sendError } from "../utils/error";

export const register = async (req: Request<TAuthPayload>, res: Response) => {
  try {
    await authService.register(req.body);

    res.status(201).json({ message: "Пользователь успешно зарегистрирован" });
  } catch (error: unknown) {
    sendError(res, error);
  }
};

export const login = async (req: Request<TAuthPayload>, res: Response) => {
  try {
    const token = await authService.login(req.body);

    res.json({ token });
  } catch (error: unknown) {
    sendError(res, error, 401);
  }
};
