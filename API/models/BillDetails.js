const {model, Schema} = require('mongoose');

const billdetailsSchema = new Schema({
    Id: String,
    StudentId: String,
    EBCharge: String,
    EBUnit: String,
    EBLastUnit: String,
    Fees: String,
    Status: String,
    Date: String,
    PaidDate: String,
    Remarks: String,
    UpdatedBy: String,
    UpdatedAt: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('BillDetails',billdetailsSchema);