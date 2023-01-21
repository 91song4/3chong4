/**
 * Required External Modules
 */
import dotenv from "dotenv";
import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cors from "cors";

import itemsRouter from "./items/items.router";

import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: "https://dashboard.whatabyte.app", // 접근 권한을 부여하는 도메인
    // credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    // optionsSuccessStatus: 204, // 응답 상태 200으로 설정
  })
);

/**
 * Server Activation
 */
app.use("/api/menu/items", itemsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
