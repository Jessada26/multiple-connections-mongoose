const mongoose = require("mongoose");
const mongooseConnect = require("../connections/db2")
const Schema = mongoose.Schema;

const collectionDB2Schema = new Schema(
  {
    userName: String,
    password: String,
    userGender: String
  },
  { timestamps: true, versionKey: false }
);

const collectionDB2Model = mongooseConnect.model("collectionDB2", collectionDB2Schema);

module.exports = collectionDB2Model;
