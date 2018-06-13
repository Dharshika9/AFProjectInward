
const express = require('express');
const router = express.Router();


const wardRoute = require('./ApplicationRoutes/ward.routes');
const userRoute = require('./ApplicationRoutes/user.routes');
const loginRoute = require('/ApplicationRoutes/login.routes');


router.use('/wards/' , wardRoute);
router.use('/user/' , userRoute);
router.use('/login/' , loginRoute);

module.exports = router;