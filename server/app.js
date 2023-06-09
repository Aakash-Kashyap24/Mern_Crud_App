import express from "express";
import ErrorMiddleware from "./middleware/Error.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ProductRouter from "./routes/ProductRoutes.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "config/config.env" });
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(bodyParser());

app.use(express.json());
app.use(express.urlencoded({}));
// Use body-parser middleware with extended option
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", ProductRouter);

app.get("/", (req, res) => {
});

app.use(ErrorMiddleware);

export default app;
