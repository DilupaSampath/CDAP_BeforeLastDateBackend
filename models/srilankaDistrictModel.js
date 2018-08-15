const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    
const SrilankaDistrictSchema = new Schema(
    {
        year: { type: String, required: [true, 'year required'] },
        district: { type: String, required: [true, 'district required'] },
        January: { type: String, required: [true, 'January required'] },
        February: { type: String, required: [true, 'February required'] },
        March: { type: String, required: [true, 'March required'] },
        April: { type: String, required: [true, 'April required'] },
        May: { type: String, required: [true, 'May required'] },
        June: { type: String, required: [true, 'June required'] },
        July: { type: String, required: [true, 'July required'] },
        August: { type: String, required: [true, 'August required'] },
        September: { type: String, required: [true, 'September required'] },
        October: { type: String, required: [true, 'October required'] },
        November: { type: String, required: [true, 'November required'] },
        December: { type: String, required: [true, 'December required'] },
        TotalCases: { type: String, required: [true, 'TotalCases required'] },
        AlgorithmType: { type: String, default:"default" }
    }
);


const SrilankaDistrictData = mongoose.model('srilankaDistrictData',SrilankaDistrictSchema);
module.exports= SrilankaDistrictData;