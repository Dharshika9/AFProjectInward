
const express = require('express');
const router = express.Router();


const wardRoute = require('./ApplicationRoutes/ward.routes');
<<<<<<< HEAD

const wardAdmissionRoute = require('./ApplicationRoutes/patientWardAdmission.routes');
const patientRegRoute = require('./ApplicationRoutes/patientReg.routes');




const userRoute = require('./ApplicationRoutes/user.routes');

const loginRoute = require('/ApplicationRoutes/login.routes');

=======
const wardAdmissionRoute = require('./ApplicationRoutes/patientWardAdmission.routes');
const patientRegRoute = require('./ApplicationRoutes/patientReg.routes');
const userRoute = require('./ApplicationRoutes/user.routes');
const loginRoute = require('./ApplicationRoutes/login.routes');
>>>>>>> 6c7d1267fd2d085a91077ed160db4025cd483637



router.use('/wards/' , wardRoute);

router.use('/admission/',wardAdmissionRoute);
router.use('/register',patientRegRoute);

router.use('/user/' , userRoute);

router.use('/login/' , loginRoute);


module.exports = router;