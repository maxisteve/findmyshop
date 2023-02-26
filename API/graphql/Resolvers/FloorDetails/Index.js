const FloorDetails = require('../../../models/FloorDetails');
const BlockDetails = require ('../../../models/BlockDetails');


module.exports = {

 
    getFloorDetailsByID:async(args) => {
        return await FloorDetails.findById(args.ID);
    },

    getFloorDetailsList:async(args) => {

        var listFloor =  await FloorDetails.find().sort({CreatedAt:-1}).limit(args.amount);

        listFloor.map(function(floorDetails){
            floorDetails.Id= floorDetails ._id;
        })

        return listFloor;
    },

    getFloorDetailsListByBlockId:async(args) => {

        var listFloor =  await FloorDetails.find({BlockId:args.BlockId}).sort({CreatedAt:-1}).limit(args.amount);
        listFloor.map(function(floorDetails){
            floorDetails.Id= floorDetails ._id;
        })
        return listFloor;
    },

 
    createFloorDetails:async(args) => {
            var resultObj={
                Id: null,
                FloorName: null,
                FloorNumber: null,
                NoOfRooms: null,
                BlockId: null,
                Remarks: null,
                CreatedAt: null,
                IsActive: null,
            }

            var ListFloorBySelectedBlockId = await FloorDetails.find({BlockId:args.FloorInput.BlockId});
            var selectedBlock =   await BlockDetails.findById(args.FloorInput.BlockId);
            var ExistsFloor = await FloorDetails.find({FloorName:args.FloorInput.FloorName,FloorNumber:args.FloorInput.FloorNumber});
            
            if(ExistsFloor.length == 0 && selectedBlock.NoOfFloor > ListFloorBySelectedBlockId.length)
            {
                const createFloorDetails = new FloorDetails({
                    FloorName: args.FloorInput.FloorName,
                    FloorNumber: args.FloorInput.FloorNumber,
                    NoOfRooms: args.FloorInput.NoOfRooms,
                    BlockId: args.FloorInput.BlockId,
                    Remarks: args.FloorInput.Remarks,
                    CreatedAt: new Date().toISOString(),
                    IsActive: true,
                });
    
                const res = await createFloorDetails.save(); //Mongo Saving
    
                console.log(res)
                resultObj =  {
                    id:res.id,
                    ...res._doc
                }

            }
            else if(ExistsFloor.length > 0){
                resultObj.Remarks= "Floor Name and Floor Number must be Unique, this Floor name or Floor number already assigned";
            }
            else
            {
                resultObj.Remarks= selectedBlock.Name + " Block Already Filled";
            }
            return resultObj;

    },

    
    deleteFloorDetails:async(args) => 
        {
            const wasDeleted = (await FloorDetails.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
    }
}