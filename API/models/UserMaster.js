const {model, Schema} = require('mongoose');

const userMasterSchema = new Schema({
    Id: String,
    Name: String,
    UserName: String,
    Password: String,
    EmailId: String,
    PhoneNumber: String,
    UserType: String,
    Salt: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('UserMaster',userMasterSchema);