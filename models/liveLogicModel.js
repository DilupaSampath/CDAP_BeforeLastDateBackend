const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create  doctor model and schema

const LiveLogicSchema = new Schema({
    type:{
        type:String,
        required:[true,'type field is empty']
    },
    name:{
        type:String,
        required:[true,'name field is empty']
    },
    status:{
        type:String,
        required:[true,'status field is empty']
    }
});

const LiveLogic = mongoose.model('liveLogic',LiveLogicSchema);
module.exports= LiveLogic;