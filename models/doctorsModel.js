const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create  doctor model and schema

const DoctorSchema = new Schema({
    NIC:{
        type:String,
        required:[true,'NIC field is empty']
    },
    id:{
        type:String,
        required:[true,'id field is empty']
    },
    name:{
        type:String,
        required:[true,'name field is empty']
    },
    ward:{
        type:String,
        required:[true,'ward field is empty']
    },
    assingDate:{
        type:String,
        required:[true,'assingDate field is empty']
    },
    doctorType:{
        type:String,
        required:[true,'doctorType field is empty']
    }
});

const Doctors = mongoose.model('doctors',DoctorSchema);
module.exports= Doctors;