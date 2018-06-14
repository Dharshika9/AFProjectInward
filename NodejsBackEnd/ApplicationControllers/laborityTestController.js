var mongoose    = require('../DBSchema/DBConfig');
var laborityTestSchema 	= mongoose.model('laborityTest');

var laborityTestController = function () {
    this.addTest=function (patient) {
        return new Promise(function (resolve,reject) {
            var Test=new laborityTestSchema({
                TestId:Test.TestId,
                patientId:patient.patientId,
                testType:patient.testType,
                PatientStatus:patient.PatientStatus,
                description:patient.description,
                
            })

            Test.save().then(function () {
                resolve({'status':200,'message':'LaborityTest Added Successfully'})
            }).catch(function (err) {
                reject({'status':500,'message':'LaborityTest cannot be added'})
            })
        })
    }

    this.removeTest=function (id) {
        return new Promise(function (resolve,reject) {
            laborityTestSchema.remove({_id:id}).then(function () {
                resolve({'status':200,'message':'Test removed'})
            }).catch(function (err) {
                reject({'status':500,'message':'Test cannot be removed '+err})
            })
        })

    }

    this.updateTest = function (id,updateData) {
        return new Promise(function (resolve,reject) {
            laborityTestSchema.update({_id:id},updateData).then(function () {
                resolve({'status':200,'message':'Test is updated'})
            }).catch(function (err) {
                reject({'status':500,'message':'Test cannot be updated '+err})
            })
        })

    }

    this.getAllTest = function () {
        return new Promise(function (resolve,reject) {
            laborityTestSchema.find().exec().then(function (data) {
                resolve({'status':200,'message':'All Tests :', 'data': data})
            }).catch(function (err) {
                reject({'status':404,'message':'data not found'+err})
            })
        })
    }

    this.getOneTest=function (id) {
        return new Promise(function (resolve,reject) {
            laborityTestSchema.find({_id:id}).exec().then(function (data) {
                resolve({'status':200,'message':'Test','data':data})
            }).catch(function (err) {
                reject({'status':404,'meassage':'Test not fount' + err})
            })
        })
    }

}

module.exports=new laborityTestController();