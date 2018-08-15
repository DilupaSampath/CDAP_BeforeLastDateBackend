const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create  doctor model and schema

const NursesSchema = new Schema({
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
    priority:{
        type:String,
        required:[true,'priority field is empty']
    }
});

const Nurses = mongoose.model('nurses',NursesSchema);
module.exports= Nurses;