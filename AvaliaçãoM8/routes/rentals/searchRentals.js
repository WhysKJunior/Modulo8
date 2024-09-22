const express = require('express');
const router = express.Router();
const { searchRentals } = require('../../data/rentals');

router.get('/', (req, res) => {
  const { dataAluguel, idLivro, idEstudante } = req.query;
  const rentals = searchRentals({ dataAluguel, idLivro, idEstudante });
  res.json(rentals);
});

module.exports = router;
