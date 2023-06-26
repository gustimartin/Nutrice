import { Router } from "express";
import {
  getCategoryByName,
  getCategory,
  createCategory,
  deleteCategory,
} from "../controllers/categories.controllers.js";

const router = Router();

router.get("/categories", getCategory);
router.get("/category/:id", getCategoryByName);
router.post("/category", createCategory);
router.delete("/category/:id", deleteCategory);

export default router;
