const express = require('express');
const router = express.Router();
const { addProduct, validateProductData } = require('../data/products');

// POST /produtos - Criar um novo produto
router.post('/produtos', (req, res) => {
  const { nome, categoria, preco, estoque } = req.body;

  const validationError = validateProductData({ nome, categoria, preco, estoque });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const newProduct = { 
    id : null,
    nome, 
    categoria, 
    preco: parseFloat(preco), 
    estoque: parseInt(estoque) };
  const addedProduct = addProduct(newProduct);
  res.status(201).json(addedProduct);
});

module.exports = router;
