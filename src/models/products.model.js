import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: [String],
      ref: "Categories",
    },
    description: {
      type: String,
      require: true,
    },
    nutrition: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    brand: {
      type: String,
    },
    stock: {
      type: String,
    },
    enable: {
      type: Boolean,
      default: true,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
    amount: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Products", productsSchema);
