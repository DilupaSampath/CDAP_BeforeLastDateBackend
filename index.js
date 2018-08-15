const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
//import routes
// const routes = require('./routes/doctor');
const mongoose = require('mongoose');

//setup app
const app = express();
app.use(cors()); 
mongoose.connect('mongodb://172.22.220.15/cdapNode');
mongoose.Promise=global.Promise;

app.use(bodyParser.json());
//use routes
app.use('/doctorsModel',require('./routes/doctor'));
app.use('/nursesModel',require('./routes/nurses'));
app.use('/patientsModel',require('./routes/patients'));
app.use('/srilankaDistrictModel',require('./routes/srilankaDistrict'));
app.use('/weekModel',require('./routes/week'));
app.use('/idhWardModel',require('./routes/wards'));
app.use('/monthModel',require('./routes/month'));
app.use('/yearModel',require('./routes/year'));
app.use('/nurseSheduleModel',require('./routes/nurseShedule'));
app.use('/liveLogicModel',require('./routes/liveLogic'));

//error handling middle wehere
app.use(function(err,req,res,next){
res.status(422).send({error:err.message});
});

//listen for request
app.listen (process.env.port || 4000, function(){
console.log('listining now....!!');
});