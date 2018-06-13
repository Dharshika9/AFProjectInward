'use strict'

const express = require('express');
const router =  express.Router();
const Controller = require('../ApplicationControllers/userController');

router.post('/' , function (req , res) {
    let name = req.body.name;
    let username = req.body.username;
    let email = req.body.email;
    let pass_1 = req.body.password;
    let pass_2 = req.body.confpassword;

     req.checkBody(name , 'name required').notEmpty();
     req.checkBody(username , 'username required').notEmpty();
     req.checkBody(email , 'email required').notEmpty();
     req.checkBody(email , 'not valid email').isEmail();
     req.checkBody(pass_1 , 'password required').notEmpty();
     req.checkBody(pass_2 , 'password not matched').equals(pass_1);

     let errors = req.validationErrors();

     if(errors){
        res.status(400).send({errors:errors});
     }else{
        Controller.addUser({
            name: name,
            userName : username,
            email: email,
            password: pass_1
        }).then(data =>{
            res.status(data.status).send(data.message);
        }).catch(err =>{
            res.status(err.status).send(err.message);
        });
     }
});


module.exports = router;