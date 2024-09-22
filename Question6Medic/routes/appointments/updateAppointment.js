const express = require('express');
const { updateAppointment } = require('../../data/appointments');

const router = express.Router();

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedAppointment = updateAppointment(id, updatedData);
    
    if (updatedAppointment) {
        res.json(updatedAppointment);
    } else {
        res.status(404).json({ message: 'Consulta não encontrada' });
    }
});

module.exports = router;
