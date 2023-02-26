const {model, Schema} = require('mongoose');

const billdetailshistorySchema = new Schema({
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
    CreatedBy: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('BillDetailsHistory',billdetailshistorySchema);