import * as fruitsService from "../services/fruitsServices";
import { Request, Response } from "express";
import { TFruit } from "../types/types";
import { sendError } from "../utils/error";

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await fruitsService.getAll();

    res.status(200).json(result);
  } catch (error: unknown) {
    sendError(res, error);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await fruitsService.getOne(+id);

    res.status(200).json(result);
  } catch (error: unknown) {
    sendError(res, error);
  }
};

export const create = async (
  req: Request<Omit<TFruit, "id">>,
  res: Response,
) => {
  try {
    const result = await fruitsService.create(req.body);

    res.status(200).json(result);
  } catch (error: unknown) {
    sendError(res, error);
  }
};
export const createMocks = async (req: Request, res: Response) => {
  try {
    const result = await fruitsService.createMocks();

    res.status(200).json(result);
  } catch (error: unknown) {
    sendError(res, error);
  }
};

export const update = async (
  req: Request<{ id: string }, Omit<TFruit, "id">>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const { name, color, sellBy } = req.body;
    const result = await fruitsService.update({ id: +id, name, color, sellBy });

    res.status(200).json(result);
  } catch (error: unknown) {
    sendError(res, error);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await fruitsService.remove(+id);

    res.status(200).json(result);
  } catch (error: unknown) {
    sendError(res, error);
  }
};
