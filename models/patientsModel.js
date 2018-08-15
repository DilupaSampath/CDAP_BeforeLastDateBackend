const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create  doctor model and schema

const PatientsSchema = new Schema({

    id: {
        type: String,
        required: [true, 'Id field is empty']
    },
    NIC: {
        type: String,
        required: [true, 'NIC field is empty']
    },
    name: {
        type: String,
        required: [true, 'name field is empty']
    },
    gender: {
        type: String,
        required: [true, 'gender field is empty']
    },
    distric: {
        type: String,
        required: [true, 'distric field is empty']
    },

    date: {
        type: String,
        required: [true, 'date field is empty']
    },


    level: {
        type: String,
        required: [true, 'level field is empty']
    },
    ward: {
        type: String,
        required: [true, 'ward field is empty']
    },
    wardChanges: {
        type: String,
        required: [true, 'wardChanges field is empty']
    },

    priority: {
        type: String,
        required: [true, 'Priority field is empty']
    },
    comments: {
        type: String
    }
});

const Patients = mongoose.model('patients', PatientsSchema);
module.exports = Patients;