const Attendance = require('../../../models/Attendance');
const { isNullorEmptyorUndefined } = require('../../Common/CommonMethods');


module.exports = {

 
    getAttendanceByID:async(args) => {
        return await Attendance.findById(args.ID);
    },

    getAttendanceList:async(args) => {

        var ListAttendance = await Attendance.find().sort({CreatedAt:-1}).limit(args.amount);
        ListAttendance.map(function(objAttendance) {
            objAttendance.Id = objAttendance._id.toString();
        })
        return ListAttendance;
    },

    ListAttendanceByStudentId:async(args) => {
        return await Attendance.find({StudentId:args.StudentId}).sort({CreatedAt:-1}).limit(args.amount);
    },

    createAttendance:async(args) => {

            var result  = {};
            var resultObj = {
                Id: null,
                StudentId:null,
                InTime:null,
                OutTime:null,
                Remarks: null,
                CreatedAt: null,
                IsActive: null,
            }

            var  FindResult =  await Attendance.findOne({"In":null});

            if(args.AttendanceInput.TranType =="Out" && FindResult == null)
            {
                
                const createAttendance = new Attendance({
                    StudentId: args.AttendanceInput.StudentId,
                    InTime:  null,
                    OutTime:new Date().toISOString(),
                    Remarks: args.AttendanceInput.Remarks,
                    CreatedAt: new Date().toISOString(),
                    IsActive: true,
                });
    
                const res = await createAttendance.save(); //Mongo Saving

                result = {
                    id:res.id,
                    ...res._doc
                }
            }
            else if(args.AttendanceInput.TranType =="In")
            {

                if(FindResult == null)
                {
                    resultObj.Remarks ="student not Out flag",
                    result = resultObj;
                }
                else
                {
                 
                    var FindID = (FindResult._id).toString();
                    UpdateResult =  await Attendance.updateOne({"_id":FindID},{$set:{InTime:new Date().toISOString()}});
                    var finalResult = await Attendance.findOne({"_id":FindID});
                    if(isNullorEmptyorUndefined(UpdateResult) && UpdateResult.modifiedCount)
                    {
                        result =  finalResult
                    }
                    else
                    {
                        if(!isNullorEmptyorUndefined(UpdateResult) &&  !UpdateResult.modifiedCount)
                        {
                            resultObj.Remarks ="Not Updated",
                            result =  resultObj;
                        }
                    }
                }
            }
            else
            {
                    resultObj.Remarks ="student Already Out flag",
                    result =  resultObj;
            }

            return result
    },
    
    deleteAttendance:async(args) => 
    {
        const wasDeleted = (await Attendance.deleteOne({_id:args.ID})).deletedCount
        return  wasDeleted;
    }
}