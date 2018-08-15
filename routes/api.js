const express = require('express');
const router = express.Router();

//get a list of ninjas from DB
router.get('/ninjas', function (req, res) {
    res.send({ type: 'GET' });

});

//add new ninja to DB
router.post('/ninjas', function (req, res) {
    console.log(req.body);
    res.send(
        { type: 'POST',
        "id":req.body.id,
        "name":req.body.name
     });

});

//update ninja in DB
router.put('/ninjas/:id', function (req, res) {
    res.send({ type: 'PUT' });

});

router.delete('/ninjas/:id', function (req, res) {
    res.send({ type: 'DELETE' });

});

module.exports = router;    
