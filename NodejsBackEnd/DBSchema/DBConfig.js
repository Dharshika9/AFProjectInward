const mongoose = require('mongoose');
const wardSchema = require('./wardSchema');
<<<<<<< HEAD
const patientAdmissionSchema = require('./patientWardAdmissionSchema');
const patientRegSchema = require('./patientRegistrationSchema');
=======
const userSchema = require('./userSchema');
>>>>>>> c7fe1d37afa434049b596bf2ba76af9a16a7a4c6


mongoose.connect('mongodb://127.0.0.1:27017/Inward', err =>{
    if(err) {
        console.error(err);
        process.exit(-2);
    }
    console.log('Connected to mongoDB on PORT 27017');
});

mongoose.model('wardDetails',wardSchema);
<<<<<<< HEAD
mongoose.model('patientWardAdmission',patientAdmissionSchema);
mongoose.model('patientRegistration',patientRegSchema);


=======
mongoose.model('User' , userSchema);
>>>>>>> c7fe1d37afa434049b596bf2ba76af9a16a7a4c6

module.exports = mongoose;