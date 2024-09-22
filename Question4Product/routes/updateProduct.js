const express = require('express');
const router = express.Router();
const { updateProduct, validateProductData } = require('../data/products');

// PUT /produtos/:id - Atualizar um produto
router.put('/produtos/:id', (req, res) => {
  const { nome, categoria, preco, estoque } = req.body;

  const validationError = validateProductData({ nome, categoria, preco, estoque });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const updatedProduct = updateProduct(req.params.id, { nome, categoria, preco: parseFloat(preco), estoque: parseInt(estoque) });
  
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: "Produto não encontrado" });
  }
});

module.exports = router;
