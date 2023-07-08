import mongoose from "mongoose";
import { string } from "yup";

const productSchema = new mongoose.Schema(
  {
    id: { type: string, required: true, unique: true },
    name: { type: string, required: true },
    description: { type: string, required: true },
    price: { type: Number, required: true },
    images: { type: string, required: true },
  },
  {
    timestamps: true,
  }
);
const Product =
  mongoose.models.Product || mongoose.model("product", productSchema);
export default Product;
