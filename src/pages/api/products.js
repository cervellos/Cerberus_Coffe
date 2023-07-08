import mongoose from "mongoose";
import clientPromise from "@/lib/mongodb";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;
  mongoose.Promise = clientPromise;
  if (method === "POST") {
    const { id, name, description, price, images } = req.body;
    const productDoc = await Product.create({
      id,
      name,
      description,
      price,
      images,
    });
    res.json(productDoc);
  }
}
