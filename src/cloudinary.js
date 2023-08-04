import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: "daxvmbmvs",
  api_key: "283589939712721",
  api_secret: "rTaaVEJZT03W8JI1z1510YlVkA4",
  secure: true,
});

export const uploadImage = async (filePath) => {
  try {
    return await cloudinary.uploader.upload(filePath, {
      folder: "product",
    });
  } catch (error) {
    console.log(error);
  }
};
export const uploadCatImage = async (filePath) => {
  try {
    return await cloudinary.uploader.upload(filePath, {
      folder: "category",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteImage = async (publicId) => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
  }
};
