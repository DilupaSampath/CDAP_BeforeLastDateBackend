const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create  doctor model and schema
const next = new Schema(
    {
        algorithm:{
            type:String,
            required:[true,'algorithm field is empty']
        },
        nexweekCount:{
            type:String,
            required:[true,'nexweekCount field is empty']
        }

    }
);
const Ward = new Schema({
    ward:{
        type:String,
        required:[true,'ward field is empty']
    },
    capacity:{
        type:String,
        required:[true,'capacity field is empty']
    },
    currentCount:{
        type:String,
        required:[true,'currentCount field is empty']
    },
    priority:{
        type:String,
        required:[true,'priority field is empty']
    },
    bedCount:{
        type:String,
        required:[true,'bedCount field is empty']
    },
    bedAvailability:{
        type:String,
        required:[true,'bedAvailability field is empty']
    },
    bedAllocation:{
        type:String,
        required:[true,'bedAllocation field is empty']
    },
    next:[next]
});

const Wards = mongoose.model('wards',Ward);
module.exports= Wards;