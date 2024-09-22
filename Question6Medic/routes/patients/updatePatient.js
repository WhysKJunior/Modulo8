const express = require('express');
const router = express.Router();
const { updatePatient } = require('../../data/patients');

// PUT /paciente/:id - Atualizar um paciente
router.put('/:id', (req, res) => {
  const { nome, dataNascimento } = req.body;
  const updatedPatient = updatePatient(req.params.id, { nome, dataNascimento });
  
  if (updatedPatient) {
    res.json(updatedPatient);
  } else {
    res.status(404).json({ error: "Paciente não encontrado" });
  }
});

module.exports = router;
