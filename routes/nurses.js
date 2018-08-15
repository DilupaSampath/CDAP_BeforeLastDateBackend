const express = require('express');
const router = express.Router();
const Nurse = require('../models/nursesModel');

//get a list of ninjas from DB
router.get('/nurses', function (req, res , next) {
    // res.send({ type: 'GET n' });
    Nurse.find({}).then(function(nurse){
        res.send(nurse);
    });

});

//get one nurse
router.get('/nurses/:id', function (req, res , next) {
    // res.send({ type: 'GET n' });
    Nurse.findOne({_id:req.params.id}).then(function(nurse){
        res.send(nurse);
    });

});
//add new ninja to DB
router.post('/nurses', function (req, res , next) {

Nurse.create(req.body).then(function(nurse){
    res.send(nurse);
}).catch(next);
});

//update ninja in DB
router.put('/nurses/:id', function (req, res , next) {
    // res.send({ type: 'PUT' });
    Nurse.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Nurse.findOne({_id:req.params.id}).then(function(nurse){
            res.send(nurse);
        });
    });

});

router.delete('/nurses/:id', function (req, res , next) {
    // res.send({ type: 'DELETE' });
    Nurse.findByIdAndRemove({_id:req.params.id}).then(function(nurse){
        res.send(nurse);
    });

});

module.exports = router;    
