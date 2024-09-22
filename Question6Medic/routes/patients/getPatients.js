const express = require('express');
const router = express.Router();
const { getPatients } = require('../../data/patients');

// GET /pacientes - Listar todos os pacientes
router.get('/', (req, res) => {
  const patients = getPatients();
  res.json(patients);
});

module.exports = router;
