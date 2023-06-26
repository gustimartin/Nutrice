import Products from "../models/products.model.js";

export const getProducts = async (req, res) => {
  const allProducts = await Products.find();
  res.json(allProducts);
};
export const getProductById = async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "product not found" });
  res.json(product);
};
export const deleteProducts = async (req, res) => {
  const product = await Products.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "product not found" });
  return res.sendStatus(204);
};

export const modifyProducts = async (req, res) => {
  const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) return res.status(404).json({ message: "product not found" });
  res.json(product);
};

export const createProducts = async (req, res) => {
  const { name, stock, description, price, category, image } = req.body;
  const newProduct = new Products({
    name,
    stock,
    description,
    price,
    category,
    image,
  });
  const savedProduct = await newProduct.save();
  res.json({
    savedProduct,
  });
};
