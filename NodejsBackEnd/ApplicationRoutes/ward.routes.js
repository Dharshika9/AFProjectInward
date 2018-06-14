var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/ward.Controller');

router.post('/', (req, res) => {

    let wardNo=req.body.wardNo;
    let wardType=req.body.wardType;
    let noOfBeds=req.body.noOfBeds;
    let availableBeds=req.body.availableBeds;
    let location=req.body.location;
    let vistingTimes=req.body.vistingTimes;
    let incharge=req.body.incharge;
    let phone=req.body.phone;
    let note=req.body.note;

    req.checkBody('wardNo','Ward No Required').notEmpty();
    req.checkBody('wardType','Ward No Required').notEmpty();
    req.checkBody('noOfBeds','Ward No Required').isNumeric();
    req.checkBody('availableBeds','Ward No Required').isNumeric();
    req.checkBody('location','Ward No Required').notEmpty();
    req.checkBody('vistingTimes','Ward No Required').notEmpty();
    req.checkBody('incharge','Ward No Required').notEmpty();
    req.checkBody('phone','Ward No Required').isNumeric();
    req.checkBody('note','Ward No Required').notEmpty();

    var errors=req.validationErrors();

    if(errors){
        res.status(400).send({error});
    }else{
        controller.add({

         wardNo:wardNo,
         wardType:wardType,
         noOfBeds:noOfBeds,
         availableBeds:availableBeds,
         location:req.location,
         vistingTimes:vistingTimes,
         incharge:incharge,
         phone:phone,
         note:body


        }).then(data=>{
            res.status(data.status).send(data.message);
        }).catch(err=>{
            res.status(err.status).send(err.message);
        })
    }

});

router.get('/', (req, res) => {
    controller.getAll().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.get('/:id', (req, res) => {
    controller.getSingle(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.put('/:id', (req, res) => {
    controller.update(req.params.id, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:id', (req, res) => {
    controller.delete(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

router.get('/get_specific_ward/:id', (req, res) => {
    controller.getSpecificWard(req.params.id).then(response => {
        res.status(response.status).send(response.data);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

router.delete('/delete_specific_ward/:id', (req, res) => {
    controller.deleteSpecificWard(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

module.exports = router;