const express = require('express');
const router = express.Router();
const { deletePatient } = require('../../data/patients');

// DELETE /paciente/:id - Deletar um paciente
router.delete('/:id', (req, res) => {
  const success = deletePatient(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Paciente não encontrado" });
  }
});

module.exports = router;
