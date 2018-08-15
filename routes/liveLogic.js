const express = require('express');
const router = express.Router();
const LiveLogic = require('../models/liveLogicModel');

router.get('/liveLogic',function(req,res,next){
    LiveLogic.find({}).then(function(live){
        res.send(live);
    }).catch(next);

});

router.post('/liveLogic',function(req,res,next){
    LiveLogic.create(req.body).then(function(live){
    res.send(live);
}).catch(next);
});

router.put('/liveLogic/:id',function(req,res,next){
    LiveLogic.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        LiveLogic.findOne({_id:req.params.id}).then(function(live){
        res.send(live);
    });
});
});
module.exports = router;    