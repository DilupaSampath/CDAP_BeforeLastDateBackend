const express = require('express');
const router = express.Router();
const NurseShedule = require('../models/nurseSheduleModel');

router.get('/nurseShedule',function(req,res,next){
    NurseShedule.find({}).then(function(shedule){
        res.send(shedule);
    }).catch(next);

});

router.post('/nurseShedule',function(req,res,next){
    NurseShedule.create(req.body).then(function(shedule){
    res.send(shedule);
}).catch(next);
});

router.put('/nurseShedule/:id',function(req,res,next){
    NurseShedule.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        NurseShedule.findOne({_id:req.params.id}).then(function(shedule){
        res.send(shedule);
    });
});
});
module.exports = router;    