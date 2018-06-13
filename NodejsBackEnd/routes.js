
const express = require('express');
const router = express.Router();

const patientRoute = require('./ApplicationRoutes/patient.routes');
const wardRoute = require('./ApplicationRoutes/ward.routes');
const wardAdmissionRoute = require('./ApplicationRoutes/patientWardAdmission.routes');
const patientRegRoute = require('./ApplicationRoutes/patientReg.routes');





//router.use('/patients/' , patientRoute);
router.use('/wards/' , wardRoute);
router.use('/admission/',wardAdmissionRoute);
router.use('/register/',patientRegRoute);

module.exports = router;