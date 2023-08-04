import mongoose from "mongoose";

const categorieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Categories", categorieSchema);
