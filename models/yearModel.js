const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({

    count:{type:String,required:[true,"cout required"]},
    year:{type:String,required:[true,"year required"]},
    algorithmType:{type:String,required:[true,"algorithmType required"]}

});
const YearData = mongoose.model('yearSchema',yearSchema);
module.exports=YearData;