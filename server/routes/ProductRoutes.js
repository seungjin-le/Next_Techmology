const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  deleteProduct,
  getDetailProducts,
  upDateProduct,
  uploadProductImage,
} = require("../controllers/ProductController.js");

// GET /products
router.get("/products", getProducts);

// GET /products/:id
router.get("/products/:id", getDetailProducts);

// POST /products
router.post("/products", uploadProductImage, createProduct);

// PATCH upDateProduct
router.patch("/products/:id", upDateProduct);
// DELETE /products
router.delete("/products/:id", deleteProduct);

module.exports = router;
