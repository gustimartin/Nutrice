import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/healthy-food");
    console.log("*** DB connected ***");
  } catch (error) {
    console.log(error);
  }
};
