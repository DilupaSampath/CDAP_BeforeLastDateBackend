const express = require('express');
const router = express.Router();
const Year = require('../models/yearModel');

router.get('/idhNexYear',function(req,res,next){
    Year.find({}).then(function(year){
        res.send(year);
    }).catch(next);

});

router.post('/idhNexYear',function(req,res,next){
    Year.create(req.body).then(function(year){
    res.send(year);
}).catch(next);
});

router.put('/idhNexYear/:id',function(req,res,next){
    Year.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Year.findOne({_id:req.params.id}).then(function(year){
        res.send(year);
    });
});
});
module.exports = router;    