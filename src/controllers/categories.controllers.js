import Categories from "../models/categories.model.js";

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
  return res.sendStatus(204);
};

export const createCategory = async (req, res) => {
  const { name, image } = req.body;
  const newCategory = new Categories({
    name,
    image,
  });
  const savedCategory = await newCategory.save();
  res.json({
    savedCategory,
  });
};
