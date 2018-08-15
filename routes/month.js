const express = require('express');
const router = express.Router();
const Month = require('../models/monthModel');

router.get('/idhNextMonth',function(req,res,next){
    Month.find({}).then(function(month){
        res.send(month);
    }).catch(next);

});

router.post('/idhNextMonth',function(req,res,next){
    Month.create(req.body).then(function(month){
    res.send(month);
}).catch(next);
});

router.put('/idhNextMonth/:id',function(req,res,next){
    Month.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Month.findOne({_id:req.params.id}).then(function(month){
        res.send(month);
    });
});
});
module.exports = router;    