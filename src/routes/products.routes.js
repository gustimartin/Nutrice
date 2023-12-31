import { Router } from "express";
import {
  getProducts,
  getProductById,
  deleteProducts,
  createProducts,
  modifyProducts,
} from "../controllers/products.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createProductsSchema } from "../schemas/products.schema.js";
import fileUpload from "express-fileupload";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post(
  "/products",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  validateSchema(createProductsSchema),
  createProducts
);
router.put("/products/:id", modifyProducts);
router.delete("/products/:id", deleteProducts);

export default router;
