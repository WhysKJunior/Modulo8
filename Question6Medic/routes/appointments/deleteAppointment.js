const express = require('express');
const { deleteAppointment } = require('../../data/appointments');

const router = express.Router();

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deleted = deleteAppointment(id);
    
    if (deleted) {
        res.status(204).send(); // No Content
    } else {
        res.status(404).json({ message: 'Consulta não encontrada' });
    }
});

module.exports = router;
