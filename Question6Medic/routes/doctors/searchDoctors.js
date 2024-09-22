const express = require('express');
const router = express.Router();
const { searchDoctors } = require('../../data/doctors');

// GET /medicos/busca - Buscar médicos
router.get('/busca', (req, res) => {
  const results = searchDoctors(req.query);
  res.json(results);
});

module.exports = router;
