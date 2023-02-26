// HostelSetup.js
const {model, Schema} = require('mongoose');

const attendanceSchema = new Schema({
    Id: String,
    StudentId:String,
    InTime:String,
    OutTime:String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('Attendance',attendanceSchema);