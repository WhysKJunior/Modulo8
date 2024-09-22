const express = require('express');
const router = express.Router();
const { getProducts } = require('../data/products');

// GET /produtos - Listar todos os produtos
router.get('/produtos', (req, res) => {
  const products = getProducts();
  res.json(products);
});

module.exports = router;
