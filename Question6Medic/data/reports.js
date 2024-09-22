const doctors = require('./doctors'); 
const patients = require('./patients'); 
const appointments = require('./appointments'); 

const getAppointmentsByDoctor = (req, res) => {
  const { idMedico } = req.params;
  const results = appointments.filter(appointment => appointment.idMedico === parseInt(idMedico));
  res.json(results);
};

const getPatientsByDoctor = (req, res) => {
  const { idMedico } = req.params;
  const results = appointments
    .filter(appointment => appointment.idMedico === parseInt(idMedico))
    .map(appointment => patients.find(patient => patient.id === appointment.idPaciente));
  res.json(results);
};

const getDoctorsByPatient = (req, res) => {
  const { idPaciente } = req.params;
  const results = appointments
    .filter(appointment => appointment.idPaciente === parseInt(idPaciente))
    .map(appointment => doctors.find(doctor => doctor.id === appointment.idMedico));
  res.json(results);
};

const getAppointmentsByMonth = (req, res) => {
  const { mes } = req.params;
  const results = appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.data);
    return appointmentDate.getMonth() + 1 === parseInt(mes); 
  });
  res.json(results);
};

module.exports = { 
  getAppointmentsByDoctor, 
  getPatientsByDoctor, 
  getDoctorsByPatient, 
  getAppointmentsByMonth 
};
