const express = require('express');
const router = express.Router();
const { searchAppointments } = require('../../data/appointments');

// GET /consultas/busca - Buscar consultas com base em critérios
router.get('/busca', (req, res) => {
  const { data, idMedico, idPaciente, descricao } = req.query;
  const results = searchAppointments({ data, idMedico, idPaciente, descricao });
  res.json(results);
});

module.exports = router;
