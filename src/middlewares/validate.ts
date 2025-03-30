import { AnyObjectSchema, ValidationError } from "yup";
import { NextFunction, Request, Response } from "express";

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export const validate = (schema: AnyObjectSchema): ValidationMiddleware => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          errors: error.errors,
        });
        return;
      }
      next(error);
    }
  };
};
