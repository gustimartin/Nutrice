import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.use(cookieParser());
app.use(authRoutes);
app.use(productsRoutes);
app.use(categoriesRoutes);
export default app;
