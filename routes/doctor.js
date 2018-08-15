const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctorsModel');

//get a list of ninjas from DB
router.get('/doctors', function (req, res , next) {
    // res.send({ type: 'GET' });
    Doctor.find({}).then(function(doctor){
        res.send(doctor);
    });

});
//get one doctor
router.get('/doctors/:id', function (req, res , next) {
    // res.send({ type: 'GET' });
    Doctor.findOne({_id:req.params.id}).then(function(doctor){
        res.send(doctor);
    });
});

//add new ninja to DB
router.post('/doctors', function (req, res , next) {
    Doctor.create(req.body).then(function(doctor){
        res.send(doctor);
    }).catch(next);
   });

//update ninja in DB
router.put('/doctors/:id', function (req, res , next) {
    // res.send({ type: 'PUT' });
    Doctor.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Doctor.findOne({_id:req.params.id}).then(function(doctor){
            res.send(doctor);
        });

    });

});

router.delete('/doctors/:id', function (req, res , next) {
    Doctor.findByIdAndRemove({_id:req.params.id}).then(function(doctor){
        res.send(doctor);
    });

});

module.exports = router;    
