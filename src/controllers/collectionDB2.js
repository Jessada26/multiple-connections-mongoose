const CollectionDB2 = require("../models/collectionDB2");

const getAllCollectionDB2 = async (req, res) => {
  const result = await CollectionDB2.find()
  res.json(result);
};

const getByIdCollectionDB2 = async (req, res) => {
    const { id } = req.params;
    const result = await CollectionDB2.findById(id)
    res.json(result);
  };

const createCollectionDB2 = async (req, res) => {
    const payload = req.body;
    const result = new CollectionDB2(payload);
    await result.save();
    res.status(201).end();
  };

module.exports = {
    getAllCollectionDB2,
    createCollectionDB2,
    getByIdCollectionDB2
};
