const StudentDetail = require('../../../models/StudentDetail');


module.exports = {

 
    getStudentDetailByID:async(args) => {
        return await StudentDetail.findById(args.ID);
    },

    getStudentDetailList:async(args) => {


        var res =  await StudentDetail.find().sort({CreatedAt:-1}).limit(args.amount);

        res.map(function(StudentDetail) {
            StudentDetail.Id = (StudentDetail._id).toString();
        })
        return res;
    },

    getStudentDetailListByRoomId:async(args) => {

        var res =  await StudentDetail.find({RoomId:args.RoomId}).sort({CreatedAt:-1});
        res.map(function(StudentDetail) {
            StudentDetail.Id = (StudentDetail._id).toString();
        })
        return res;
    },

    createStudentDetail:async(args) => {


        const createStudentDetail = new StudentDetail({
                Name: args.StudentDetailInput.Name,
                Email: args.StudentDetailInput.Email,
                Phone: args.StudentDetailInput.Phone,
                Address: args.StudentDetailInput.Address,
                Occupation: args.StudentDetailInput.Occupation,
                CompanyOrInstitution: args.StudentDetailInput.CompanyOrInstitution,
                GuardianName: args.StudentDetailInput.GuardianName,
                GuardianPhone: args.StudentDetailInput.GuardianPhone,
                GuardianEmail: args.StudentDetailInput.GuardianEmail,
                GuardianAddress: args.StudentDetailInput.GuardianAddress,
                City: args.StudentDetailInput.City,
                State: args.StudentDetailInput.State,
                Country: args.StudentDetailInput.Country,
                PinCode: args.StudentDetailInput.PinCode,
                Remarks: args.StudentDetailInput.Remarks,
                RoomId: args.StudentDetailInput.RoomId,
                CreatedAt: new Date().toISOString(),
                IsActive: true,
            });


            const res = await createStudentDetail.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteStudentDetail:async(args) => 
        {
            const wasDeleted = (await StudentDetail.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}