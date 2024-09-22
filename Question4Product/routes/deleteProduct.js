const express = require('express');
const router = express.Router();
const { deleteProduct } = require('../data/products');

// DELETE /produtos/:id - Deletar um produto
router.delete('/produtos/:id', (req, res) => {
  const isDeleted = deleteProduct(req.params.id);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Produto não encontrado" });
  }
});

module.exports = router;
