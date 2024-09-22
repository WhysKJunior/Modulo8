const express = require('express');
const router = express.Router();
const { updateDoctor } = require('../../data/doctors');

// PUT /medico/:id - Atualizar um médico
router.put('/:id', (req, res) => {
  const { nome, especialidade } = req.body;
  const updatedDoctor = updateDoctor(req.params.id, { nome, especialidade });
  
  if (updatedDoctor) {
    res.json(updatedDoctor);
  } else {
    res.status(404).json({ error: "Médico não encontrado" });
  }
});

module.exports = router;
