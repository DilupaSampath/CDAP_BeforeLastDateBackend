const express = require('express');
const router = express.Router();
// const SrilankaDisstrict = require('../models/srilankaDistrictModel');
const SrilankaDisstrict = require('../models/srilankaDistrictModel');

router.get('/district', function (req, res , next) {
    // res.send({ type: 'GET p' });

    SrilankaDisstrict.find({}).then(function(district){
        res.send(district);
    });

});

router.post('/district', function (req, res , next) {

    SrilankaDisstrict.create(req.body).then(function(district){
    res.send(district);
}).catch(next);
});
module.exports = router;    