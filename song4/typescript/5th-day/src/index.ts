/**
 * Required External Modules
 */
import dotenv from "dotenv";
import express, { Request, Response } from "express";

import itemsRouter from "./items/items.router";

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

/**
 * Server Activation
 */
app.use("/api/menu/items", itemsRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
