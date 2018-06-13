
const express = require('express');
const router = express.Router();


const wardRoute = require('./ApplicationRoutes/ward.routes');
const userRoute = require('./ApplicationRoutes/user.routes');


router.use('/wards/' , wardRoute);
router.use('/user/' , userRoute);

module.exports = router;