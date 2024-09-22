const express = require('express');
const router = express.Router();
const { updateRental } = require('../../data/rentals');

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { dataDevolucao } = req.body;
  const updatedRental = updateRental(id, { dataDevolucao });
  if (updatedRental) {
    res.json(updatedRental);
  } else {
    res.status(404).json({ message: 'Aluguel não encontrado' });
  }
});

module.exports = router;
