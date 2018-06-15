
const express = require('express');
const router = express.Router();


const wardRoute = require('./ApplicationRoutes/ward.routes');

const wardAdmissionRoute = require('./ApplicationRoutes/patientWardAdmission.routes');
const patientRegRoute = require('./ApplicationRoutes/patientReg.routes');
const userRoute = require('./ApplicationRoutes/user.routes');
const loginRoute = require('./ApplicationRoutes/login.routes');
<<<<<<< HEAD
const patientRoutes = require('./ApplicationRoutes/patient.routes')
=======
const laborityTestRoute = require('./ApplicationRoutes/laborityTest.routes');
const MedicineRoute = require('./ApplicationRoutes/Medicine.routes');


>>>>>>> 7d2e7f0e2de9f7b60f9af0f68dc37e665e0b9837


router.use('/wards/' , wardRoute);

router.use('/admission/',wardAdmissionRoute);
router.use('/register',patientRegRoute);

router.use('/user/' , userRoute);
router.use('/medicine/' , MedicineRoute);
router.use('/login/' , loginRoute);
<<<<<<< HEAD
router.use('/patients/' , patientRoutes);
=======
router.use('/Test/',laborityTestRoute);

>>>>>>> 7d2e7f0e2de9f7b60f9af0f68dc37e665e0b9837


module.exports = router;