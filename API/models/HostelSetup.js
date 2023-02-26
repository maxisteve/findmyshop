// HostelSetup.js
const {model, Schema} = require('mongoose');

const hostelsetupSchema = new Schema({
    Id: String,
    HostelName: String,
    HostelAddress: String,
    InchargeName: String,
    InchargeMailId: String,
    InchargePhone:String,
    GST:String,
    HostelPhone:String,
    HostelMailId: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('HostelSetup',hostelsetupSchema);