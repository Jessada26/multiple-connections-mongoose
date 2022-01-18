const CollectionDB3 = require("../models/collectionDB3");

const getAllCollectionDB3 = async (req, res) => {
  const result = await CollectionDB3.find()
  res.json(result);
};

const getByIdCollectionDB3 = async (req, res) => {
    const { id } = req.params;
    const result = await CollectionDB3.findById(id)
    res.json(result);
  };

const createCollectionDB3 = async (req, res) => {
    const payload = req.body;
    const result = new CollectionDB3(payload);
    await result.save();
    res.status(201).end();
  };

module.exports = {
    getAllCollectionDB3,
    createCollectionDB3,
    getByIdCollectionDB3
};
