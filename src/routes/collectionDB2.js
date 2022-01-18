const express = require("express");
const router = express.Router();
const collectionDB2Controller = require("../controllers/collectionDB2");

router.get("/database2", collectionDB2Controller.getAllCollectionDB2);
router.get("/database2/:id", collectionDB2Controller.getByIdCollectionDB2);
router.post("/database2", collectionDB2Controller.createCollectionDB2);

module.exports = router;
