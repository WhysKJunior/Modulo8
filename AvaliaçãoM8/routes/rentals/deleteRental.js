const express = require('express');
const router = express.Router();
const { deleteRental } = require('../../data/rentals');

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = deleteRental(id);
  if (result) {
    res.json({ message: 'Aluguel deletado com sucesso' });
  } else {
    res.status(404).json({ message: 'Aluguel não encontrado' });
  }
});

module.exports = router;
