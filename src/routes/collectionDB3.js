const express = require("express");
const router = express.Router();
const collectionDB3Controller = require("../controllers/collectionDB3");

router.get("/database3", collectionDB3Controller.getAllCollectionDB3);
router.get("/database3/:id", collectionDB3Controller.getByIdCollectionDB3);
router.post("/database3", collectionDB3Controller.createCollectionDB3);

module.exports = router;
