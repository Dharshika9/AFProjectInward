
const express = require('express');
const router = express.Router();


const wardRoute = require('./ApplicationRoutes/ward.routes');
<<<<<<< HEAD
const wardAdmissionRoute = require('./ApplicationRoutes/patientWardAdmission.routes');
const patientRegRoute = require('./ApplicationRoutes/patientReg.routes');



=======
const userRoute = require('./ApplicationRoutes/user.routes');
>>>>>>> c7fe1d37afa434049b596bf2ba76af9a16a7a4c6


router.use('/wards/' , wardRoute);
<<<<<<< HEAD
router.use('/admission/',wardAdmissionRoute);
router.use('/register/',patientRegRoute);
=======
router.use('/user/' , userRoute);
>>>>>>> c7fe1d37afa434049b596bf2ba76af9a16a7a4c6

module.exports = router;