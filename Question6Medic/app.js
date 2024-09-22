
const express = require('express');
const app = express();

const createDoctor = require('./routes/doctors/createDoctor');
const deleteDoctor = require('./routes/doctors/deleteDoctor');
const getDoctors = require('./routes/doctors/getDoctors');
const searchDoctors = require('./routes/doctors/searchDoctors');
const updateDoctor = require('./routes/doctors/updateDoctor');

const createPatient = require('./routes/patients/createPatient');
const getPatients = require('./routes/patients/getPatients');
const deletePatient = require('./routes/patients/deletePatient');
const searchPatients = require('./routes/patients/searchPatients');
const updatePatient = require('./routes//patients/updatePatient');

const createAppointment = require('./routes/appointments/createAppointment');
const updateAppointment = require('./routes/appointments/updateAppointment');
const deleteAppointment = require('./routes/appointments/deleteAppointment');
const searchAppointments = require('./routes/appointments/searchAppointments');
const getAppointments = require('./routes/appointments/getAppointments');

const reportsRoutes = require('./routes/reports');

app.use(express.json());

// rota de uso do Doctor
app.use('/medico', createDoctor);
app.use('/medico', deleteDoctor);
app.use('/medicos', getDoctors);
app.use('/medico', searchDoctors);
app.use('/medico', updateDoctor);

// rota de uso do Paciente
app.use('/paciente', createPatient);
app.use('/pacientes', getPatients);
app.use('/paciente', deletePatient);
app.use('/paciente', searchPatients);
app.use('/paciente', updatePatient);

// rota de uso das Consultas(Appointments)
app.use('/consulta', searchAppointments);
app.use('/consultas', getAppointments);
app.use('/consulta', createAppointment);
app.use('/consulta', deleteAppointment);
app.use('/consulta', updateAppointment);

app.use('/relatorios', reportsRoutes);

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta mais de ${PORT}`);
});
