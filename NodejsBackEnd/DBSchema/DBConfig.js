const mongoose = require('mongoose');
const wardSchema = require('./wardSchema');

const patientAdmissionSchema = require('./patientWardAdmissionSchema');
const patientRegSchema = require('./patientRegistrationSchema');
const userSchema = require('./userSchema');
const laborityTestSchema = require('./laborityTestSchema');


const patientnotesSchema = require('./patientSpecialnotesSchema');


mongoose.connect('mongodb://127.0.0.1:27017/Inward', err =>{
    if(err) {
        console.error(err);
        process.exit(-2);
    }
    console.log('Connected to mongoDB on PORT 27017');
});

mongoose.model('wardDetails',wardSchema);
mongoose.model('patientNotes' , patientnotesSchema);
mongoose.model('patientWardAdmission',patientAdmissionSchema);
mongoose.model('patientRegistration',patientRegSchema);
<<<<<<< HEAD
mongoose.model('laborityTest' , laborityTestSchema);
=======

<<<<<<< HEAD

=======
>>>>>>> c90026565267e8abcc5e12aa022e989fdb6b80fa
>>>>>>> 7d2e7f0e2de9f7b60f9af0f68dc37e665e0b9837
mongoose.model('User' , userSchema);



module.exports = mongoose;