const mongoose = require("mongoose");
const mongooseConnect = require("../connections/db1")
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: String,
    products: 
      [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  },
  { timestamps: true, versionKey: false }
);

const categoryModel = mongooseConnect.model("Category", categorySchema);

module.exports = categoryModel;
