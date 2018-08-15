const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shedule = new Schema({

    day:{type:[String],required:[true,"cout required"]},
    night:{type:[String],required:[true,"cout required"]},


});

const nurseSheduleShema = new Schema({

    week:{type:String,required:[true,"cout required"]},
    sun:shedule,
    mon:shedule,
    tus:shedule,
    wed:shedule,
    thr:shedule,
    fri:shedule,
    sat:shedule,
    algorithmType:{type:String,required:[true,"algorithmType required"]}

});
const NurseSheduleData = mongoose.model('nurseShedule',nurseSheduleShema);
module.exports=NurseSheduleData;