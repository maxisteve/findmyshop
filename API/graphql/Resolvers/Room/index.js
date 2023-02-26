const Room = require('../../../models/RoomDetail');
const FloorDetails = require('../../../models/FloorDetails');

module.exports = {


    getRoomByID:async(args) => {
        return await Room.findById(args.ID);
    },

    getRoomList:async(args) => {

         var listRoom =  await Room.find().sort({CreatedAt:-1}).limit(args.amount);

         listRoom.map(function(room) {
            room.Id = room._id.toString();
         })
         return listRoom;
    },


    getRoomListByFloorID:async(args) => {

        console.log(args.FloorId);
        var listRoom =  await Room.find({FloorId:args.FloorId}).sort({CreatedAt:-1}).limit(args.amount);
        listRoom.map(function(room) {
           room.Id = room._id.toString();
        })
        return listRoom;
   },


    createRoom:async(args) => {

        var resultObj = {
            Id:null,
            FloorName:null,
            FloorNumber:null,
            NoOfRooms:null,
            BlockId:null,
            CreatedAt:null,
            IsActive:null,
        }
        var objFloorDetails = await FloorDetails.findById(args.roomInput.FloorId);
        var listRoom =await Room.find({FloorId:args.roomInput.FloorId});
        var res=null;

        if(objFloorDetails.NoOfRooms > listRoom.length)
        {
            const createRoom = new Room({
                
                RoomNumber:args.roomInput.RoomNumber,
                RoomType:args.roomInput.RoomType,
                NoOfOccupancy:args.roomInput.NoOfOccupancy,
                FloorId:args.roomInput.FloorId,
                Fees:args.roomInput.Fees,
                Remarks: args.roomInput.Remarks,
                CreatedAt: new Date().toISOString(),
                IsActive: true

            });


             res = await createRoom.save(); //Mongo Saving
             resultObj={
                id:res.id,
                ...res._doc
             }

        }
        else
        {
            resultObj.Remarks="Floor Already Filled";
        }


            return resultObj;
    },

    deleteRoom:async(args) => {

            const wasDeleted = (await Enquiry.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
    }

    }