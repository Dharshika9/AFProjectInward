'use strict'

const express = require('express');
const router =  express.Router();
const Controller = require('../ApplicationControllers/userController');



/*passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('called'+username);
        Controller.getuserByuserName(username).then(data =>{
            Controller.comparePassword(password , data.password).then(status=>{
                if(status){
                    return done(null, data);
                }
                else{
                    return done(null, false, {message: 'invalid password'});
                }

            }).catch(err =>{
                return err
            })
        }).catch(err =>{
            return err;
        })

 }));*/

router.post('/',(req, res) =>{
    Controller.getuserByuserName(req.body.username).then(data =>{
        console.log(data.data.password)
        Controller.comparePassword(req.body.password , data.data.password).then(data=>{
            res.status(data.status).send(data.isMatch);
        }).catch(err=>{
            res.status(err.status).send(err.data);
        })
    }).catch(err=>{
        res.status(err.status).send(err.data);
    })

})


module.exports = router;