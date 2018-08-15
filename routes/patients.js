const express = require('express');
const router = express.Router();
const Patient = require('../models/patientsModel');

//get a list of ninjas from DB
router.get('/patients', function (req, res , next) {
    // res.send({ type: 'GET p' });
    
    Patient.find({}).then(function(patient){
        res.send(patient);
    });

});
//get one patient
router.get('/patients/:id', function (req, res , next) {
    // res.send({ type: 'GET p' });

    Patient.findOne({_id:req.params.id}).then(function(patient){
        res.send(patient);
    })


});

//add new ninja to DB
router.post('/patients', function (req, res , next) {

    Patient.create(req.body).then(function(patient){
    res.send(patient);
}).catch(next);
});

//update ninja in DB
router.put('/patients/:id', function (req, res , next) {
    // res.send({ type: 'PUT' });
    Patient.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Patient.findOne({_id:req.params.id}).then(function(patient){
            res.send(patient);
        })
    })


});

router.delete('/patients/:id', function (req, res , next) {
    // res.send({ type: 'DELETE' });
    Patient.findByIdAndRemove({_id:req.params.id}).then(function(patient){
        res.send(patient);
    });

});


// srilankaDistrictData
module.exports = router;    
