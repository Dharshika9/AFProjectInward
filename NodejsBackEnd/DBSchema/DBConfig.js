const mongoose = require('mongoose');
const wardSchema = require('./wardSchema');

const patientAdmissionSchema = require('./patientWardAdmissionSchema');
const patientRegSchema = require('./patientRegistrationSchema');

const userSchema = require('./userSchema');
<<<<<<< HEAD
=======

>>>>>>> 6c7d1267fd2d085a91077ed160db4025cd483637


mongoose.connect('mongodb://127.0.0.1:27017/Inward', err =>{
    if(err) {
        console.error(err);
        process.exit(-2);
    }
    console.log('Connected to mongoDB on PORT 27017');
});

mongoose.model('wardDetails',wardSchema);

mongoose.model('patientWardAdmission',patientAdmissionSchema);
mongoose.model('patientRegistration',patientRegSchema);


<<<<<<< HEAD
mongoose.model('User' , userSchema);
=======

mongoose.model('User' , userSchema);

>>>>>>> 6c7d1267fd2d085a91077ed160db4025cd483637

module.exports = mongoose;