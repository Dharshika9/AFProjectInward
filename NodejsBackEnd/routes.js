
const express = require('express');
const router = express.Router();


const wardRoute = require('./ApplicationRoutes/ward.routes');
<<<<<<< HEAD
const wardAdmissionRoute = require('./ApplicationRoutes/patientWardAdmission.routes');
const patientRegRoute = require('./ApplicationRoutes/patientReg.routes');



=======
const userRoute = require('./ApplicationRoutes/user.routes');
<<<<<<< HEAD
const loginRoute = require('/ApplicationRoutes/login.routes');
=======
>>>>>>> c7fe1d37afa434049b596bf2ba76af9a16a7a4c6
>>>>>>> 1c0dfb29246b042ba21925b71b6de0e4758cb4a2


router.use('/wards/' , wardRoute);
<<<<<<< HEAD
router.use('/admission/',wardAdmissionRoute);
router.use('/register/',patientRegRoute);
=======
router.use('/user/' , userRoute);
<<<<<<< HEAD
router.use('/login/' , loginRoute);
=======
>>>>>>> c7fe1d37afa434049b596bf2ba76af9a16a7a4c6
>>>>>>> 1c0dfb29246b042ba21925b71b6de0e4758cb4a2

module.exports = router;