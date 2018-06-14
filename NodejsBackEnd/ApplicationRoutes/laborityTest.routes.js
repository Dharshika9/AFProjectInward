var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/laborityTestController');

router.post('/',function (req,res) {
    controller.addTest(req.body).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});


router.delete('/:id',function (req,res) {
    controller.removeTest(req.params.id).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.put('/:id',function (req,res) {
    controller.updateTest(req.params.id,req.body).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.get('/',function (req,res) {
    controller.getAllTest().then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});


router.get('/:id',function (req,res) {
    controller.getOneTest(req.params.id).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })

});

module.exports=router