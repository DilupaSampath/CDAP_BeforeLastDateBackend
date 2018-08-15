const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeekSchema = new Schema({

    count:{type:String,required:[true,"cout required"]},
    algorithmType:{type:String,required:[true,"algorithmType required"]}

});
const WeekData = mongoose.model('WeekSchema',WeekSchema);
module.exports=WeekData;