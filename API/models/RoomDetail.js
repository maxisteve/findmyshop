const {model, Schema} = require('mongoose');

const roomdetailSchema = new Schema({
    Id: String,
    RoomNumber: String,
    RoomType: String,
    NoOfOccupancy: String,
    FloorId: String,
    BlockId: String,
    Fees: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('RoomDetails',roomdetailSchema);