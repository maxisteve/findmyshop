// HostelSetup.js
const {model, Schema} = require('mongoose');

const blockSchema = new Schema({
    Id: String,
    Name: String,
    NoOfFloor: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('BlockDetails',blockSchema);