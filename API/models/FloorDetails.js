const {model, Schema} = require('mongoose');

const floordetailSchema = new Schema({
    Id: String,
    FloorName: String,
    FloorNumber: String,
    NoOfRooms: String,
    BlockId: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('FloorDetail',floordetailSchema);