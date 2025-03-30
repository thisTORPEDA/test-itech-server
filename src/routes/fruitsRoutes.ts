import express from "express";
import { authenticate } from "../middlewares/authMiddleware";
import * as fruitsController from "../controllers/fruitsController";
import { validate } from "../middlewares/validate";
import { baseFruitSchema } from "../validations/fruitsSchemas";

const router = express.Router();

const fruitValidation = validate(baseFruitSchema);

router.get("/all", authenticate, fruitsController.getAll);
router.get("/:id", authenticate, fruitsController.getOne);

router.post(
  "/create",
  [authenticate, fruitValidation],
  fruitsController.create,
);

router.get("/create/mock", authenticate, fruitsController.createMocks);
router.put(
  "/update/:id",
  [authenticate, fruitValidation],
  fruitsController.update,
);
router.delete("/delete/:id", authenticate, fruitsController.remove);

export default router;
