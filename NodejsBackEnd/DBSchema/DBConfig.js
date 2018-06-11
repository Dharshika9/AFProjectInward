const mongoose = require('mongoose');
const wardSchema = require('./wardSchema');
;

mongoose.connect('mongodb://127.0.0.1:27017/Inward',err =>{
    if(err) {
        console.error(err);
        process.exit(-2);
    }
    console.log('Connected to mongoDB on PORT 27017');
});

mongoose.model('wardDetails',wardSchema);


module.exports = mongoose;