// backend/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // just the filename (e.g., "tshirt.jpg")
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
