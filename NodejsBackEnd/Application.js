
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router  = require('./routes');

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/' , router);

app.listen(8081 , (err) =>{
    if(err){
        console.log('Server is not Connected !');
    }
    console.log('Server is connected 8081..!');
});
