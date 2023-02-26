// HostelSetup.js
const {model, Schema} = require('mongoose');

const shopregistrationSchema = new Schema({
    Id: String,
    ShopName:String,
    ShopAddress:String,
    Phone:String,
    EmailId:String,
    ShopDescription:String,
    AvailableTime:String,
    UserName:String,
    Password:String,
    CreatedAt:String,
    IsActive: Boolean,
});

module.exports = model('ShopRegistration',shopregistrationSchema);