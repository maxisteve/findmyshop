const UserMaster = require('../../../models/UserMaster');


module.exports = {

 
    getUserMasterByID:async(args) => {
        return await UserMaster.findById(args.ID);
    },

    getUserMasterList:async(args) => {
        return await UserMaster.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
    createUserMaster:async(args) => {
            console.log(args);
            const createUserMaster = new UserMaster({
                Name: args.UserMasterInput.Name,
                UserName: args.UserMasterInput.UserName,
                Password: args.UserMasterInput.Password,
                EmailId: args.UserMasterInput.EmailId,
                UserType: args.UserMasterInput.UserType,
                Remarks: args.UserMasterInput.Remarks,
                CreatedAt: new Date().toISOString(),
                IsActive: true,
            });


            const res = await createUserMaster.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteUserMaster:async(args) => 
        {
            const wasDeleted = (await UserMaster.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}