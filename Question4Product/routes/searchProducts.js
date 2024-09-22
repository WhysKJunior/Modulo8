const express = require('express');
const router = express.Router();
const { searchProducts } = require('../data/products');

// GET /produtos/busca - Buscar produtos com base em critérios
router.get('/produtos/busca', (req, res) => {
  const { nome, categoria, preco, estoque } = req.query;
  const result = searchProducts({ nome, categoria, preco, estoque });
  res.json(result);
});

module.exports = router;
