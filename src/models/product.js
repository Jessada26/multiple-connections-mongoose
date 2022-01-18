const mongoose = require("mongoose");
const mongooseConnect = require("../connections/db1")
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    tags: [String],
    category: 
      { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = mongooseConnect.model("Product", productSchema);

module.exports = ProductModel;
