
const express = require('express');
const router = express.Router();

const patientRoute = require('./ApplicationRoutes/patient.routes');
const wardRoute = require('./ApplicationRoutes/ward.routes');


//router.use('/patients/' , patientRoute);
router.use('/wards/' , wardRoute);

module.exports = router;