'use strict'

const express = require('express');
const router = express.Router();

const patientRoute = require('./ApplicationRoutes/patient.routes');


router.use('/patients/' , patientRoute);


module.exports = router;