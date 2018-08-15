const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonthSchema = new Schema({
    month:{type:String,required:[true,"month required"]},
    count:{type:String,required:[true,"count required"]},
    algorithmType:{type:String,required:[true,"algorithmType required"]}

});
const MonthData = mongoose.model('MonthSchema',MonthSchema);
module.exports=MonthData;