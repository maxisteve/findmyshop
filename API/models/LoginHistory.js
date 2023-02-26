const {model, Schema} = require('mongoose');

const loginhistorySchema = new Schema({
    Id: String,
    UserId:String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('LoginHistory',loginhistorySchema);