const mongoose = require("mongoose");
const mongooseConnect = require("../connections/db3")
const Schema = mongoose.Schema;

const collectionDB3Schema = new Schema(
  {
    webSite: String,
    tel: String
  },
  { timestamps: true, versionKey: false }
);

const collectionDB3Model = mongooseConnect.model("collectionDB3", collectionDB3Schema);

module.exports = collectionDB3Model;
