const Product = require("../models/product");

const getAllProduct = async (req, res) => {
  const result = await Product.find()
  res.json(result);
};

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
  res.json(product);
};

const createProduct = async (req, res) => {
  const payload = req.body;
  const product = new Product(payload);
  await product.save();
  // const product = await Product.create(payload)
  res.status(201).end();
};

const updateProduct = async (req, res) => {
  const payload = req.body;
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, { $set: payload });
  res.json(await Product.findById(id));
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(204).end();
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
