const {model, Schema} = require('mongoose');

const studentdetailSchema = new Schema({
    Id:String,
    Name: String,
    Email: String,
    Phone: String,
    Address: String,
    Occupation: String,
    CompanyOrInstitution: String,
    GuardianName: String,
    GuardianPhone: String,
    GuardianEmail: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    RoomId: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('StudentDetail',studentdetailSchema);