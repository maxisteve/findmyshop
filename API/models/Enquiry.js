const {model, Schema} = require('mongoose');

const enquirySchema = new Schema({
    Name: String,
    Phone: String,
    Email: String,
    Occupation: String,
    CompanyOrInstitution: String,
    Address: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('Enquiry',enquirySchema);