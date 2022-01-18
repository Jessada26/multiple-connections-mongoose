const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.get("/products", productController.getAllProduct);

router.get("/products/:id", productController.getByIdProduct);
router.post("/products", productController.createProduct);

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
