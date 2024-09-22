const express = require('express');
const { addAppointment } = require('../../data/appointments');

const router = express.Router();

router.post('/', (req, res) => {
    const newAppointment = req.body;
    const createdAppointment = addAppointment(newAppointment);
    res.status(201).json(createdAppointment);
});

module.exports = router;
