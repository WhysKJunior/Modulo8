const express = require('express');
const router = express.Router();
const { getDoctors } = require('../../data/doctors');

// GET /medicos - Listar todos os médicos
router.get('/', (req, res) => {
  const doctors = getDoctors();
  res.json(doctors);
});

module.exports = router;
