import Categories from "../models/categories.model.js";
import { uploadCatImage, deleteImage } from "../cloudinary.js";
import fs from "fs-extra";

export const getCategory = async (req, res) => {
  const categories = await Categories.find();
  res.json(categories);
};
export const getCategoryByName = async (req, res) => {
  const category = await Categories.findById(req.params.id);
  if (!category) return res.status(404).json({ message: "product not found" });
  res.json(category);
};
export const deleteCategory = async (req, res) => {
  const category = await Categories.findByIdAndDelete(req.params.id);
  if (!category) return res.status(404).json({ message: "product not found" });
  await deleteImage(product.image.public_id);
  return res.sendStatus(204);
};

export const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = new Categories({
    name,
  });
  console.log(req.body);
  console.log(req.files);
  if (req.files?.image) {
    const result = await uploadCatImage(req.files.image.tempFilePath);
    newCategory.image = {
      public_id: result.public_id,
      secure_url: result.secure_url,
    };
    try {
      fs.unlinkSync(req.files.image.tempFilePath);
    } catch (unlinkError) {
      console.error("Error unlinking the file:", unlinkError);
    }
  }
  const savedCategory = await newCategory.save();

  res.json({
    savedCategory,
  });
};
