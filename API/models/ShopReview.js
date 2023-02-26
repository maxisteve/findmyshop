// HostelSetup.js
const {model, Schema} = require('mongoose');

const shopreviewSchema = new Schema({
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

module.exports = model('ShopReview',shopreviewSchemaSchema);