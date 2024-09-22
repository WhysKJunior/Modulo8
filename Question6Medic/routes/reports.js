const express = require('express');
const router = express.Router();
const { 
  getAppointmentsByDoctor,
  getPatientsByDoctor,
  getDoctorsByPatient,
  getAppointmentsByMonth 
} = require('../data/reports');

// Listar todas as consultas realizadas por um médico específico
router.get('/consultas/medico/:idMedico', getAppointmentsByDoctor);

// Listar todos os pacientes atendidos por um médico específico
router.get('/pacientes/medico/:idMedico', getPatientsByDoctor);

// Listar todos os médicos que atenderam um paciente específico
router.get('/medicos/paciente/:idPaciente', getDoctorsByPatient);

// Listar todas as consultas realizadas em um mês específico
router.get('/consultas/mes/:mes', getAppointmentsByMonth);

module.exports = router;
