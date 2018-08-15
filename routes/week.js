const express = require('express');
const router = express.Router();
const Week = require('../models/weekModel');

router.get('/idhNextWeek',function(req,res,next){
    Week.find({}).then(function(week){
        res.send(week);
    }).catch(next);

});

router.post('/idhNextWeek',function(req,res,next){
Week.create(req.body).then(function(week){
    res.send(week);
}).catch(next);
});

router.put('/idhNextWeek/:id',function(req,res,next){
Week.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Week.findOne({_id:req.params.id}).then(function(week){
        res.send(week);
    });
});
});
module.exports = router;    