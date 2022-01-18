const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");

router.get("/category", categoryController.getAllCategory);

router.post("/category", categoryController.createCategory);


module.exports = router;
