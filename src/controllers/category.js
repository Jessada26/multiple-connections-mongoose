const Category = require("../models/category");

const getAllCategory = async (req, res) => {
  const result = await Category.find().populate('products');
  res.json(result);
};

const createCategory = async (req, res) => {
  const payload = req.body;
  const result = new Category(payload);
  await result.save();
  res.status(201).end();
};

module.exports = {
  getAllCategory,
  createCategory,
};
