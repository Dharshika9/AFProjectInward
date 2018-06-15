
const express = require('express');
const router = express.Router();


const wardRoute = require('./ApplicationRoutes/ward.routes');

const wardAdmissionRoute = require('./ApplicationRoutes/patientWardAdmission.routes');
const patientRegRoute = require('./ApplicationRoutes/patientReg.routes');
const userRoute = require('./ApplicationRoutes/user.routes');
const loginRoute = require('./ApplicationRoutes/login.routes');
const patientRoutes = require('./ApplicationRoutes/patient.routes')


router.use('/wards/' , wardRoute);

router.use('/admission/',wardAdmissionRoute);
router.use('/register',patientRegRoute);

router.use('/user/' , userRoute);

router.use('/login/' , loginRoute);
router.use('/patients/' , patientRoutes);


module.exports = router;