import Products from "../models/products.model.js";
import { uploadImage, deleteImage } from "../cloudinary.js";
import fs from "fs-extra";
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
  await deleteImage(product.image.public_id);
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
  try {
    const {
      name,
      nutrition,
      stock,
      description,
      price,
      category,
      amount,
      enable,
      brand,
    } = req.body;
    console.log(req.body);

    const parsedPrice = Number(price);
    const parsedStock = Number(stock);

    const newProduct = new Products({
      name,
      stock: parsedStock,
      brand,
      nutrition,
      description,
      price: parsedPrice,
      amount,
      enable,
      category,
    });
    console.log(req.files);
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      newProduct.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      try {
        fs.unlinkSync(req.files.image.tempFilePath);
      } catch (unlinkError) {
        console.error("Error unlinking the file:", unlinkError);
      }
    }
    const savedProduct = await newProduct.save();

    res.json({
      savedProduct,
    });
  } catch (error) {
    console.log(error);
  }
};
