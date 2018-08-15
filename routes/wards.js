const express = require('express');
const router = express.Router();
const Wards = require('../models/idhWardModel');

router.get('/wards',function(req,res,next){
    Wards.find({}).then(function(ward){
        res.send(ward);
    }).catch(next);

});

router.post('/wards',function(req,res,next){
    Wards.create(req.body).then(function(ward){
    res.send(ward);
}).catch(next);
});

router.put('/wards/:id',function(req,res,next){
    Wards.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Wards.findOne({_id:req.params.id}).then(function(ward){
        res.send(ward);
    });
});
});
module.exports = router;    