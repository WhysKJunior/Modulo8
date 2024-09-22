const express = require('express');
const router = express.Router();
const { getRentals } = require('../../data/rentals');

router.get('/', (req, res) => {
  const rentals = getRentals();
  res.json(rentals);
});

module.exports = router;
