import "dotenv/config";
import express from "express";
import authRoutes from "./routes/authRoutes";
import { logger } from "./utils/logger";
import { pinoHttp } from "pino-http";
import fruitsRoutes from "./routes/fruitsRoutes";
import cors from "cors";

const app = express();

app.use(
  pinoHttp({
    logger,
  }),
);

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/fruits", fruitsRoutes);

app.listen(process.env.PORT || 3000, () => {
  logger.info(`Server start at ${process.env.PORT}`);
});
