const express = require('express');
const router = express.Router();
const { deleteDoctor } = require('../../data/doctors');

// DELETE /medico/:id - Deletar um médico
router.delete('/:id', (req, res) => {
  const success = deleteDoctor(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Médico não encontrado" });
  }
});

module.exports = router;
