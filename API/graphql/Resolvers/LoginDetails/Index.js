const LoginHistory = require('../../../models/LoginHistory');


module.exports = {

 
    getLoginHistoryByID:async(args) => {
        return await LoginHistory.findById(args.ID);
    },

    getLoginHistoryList:async(args) => {
        return await LoginHistory.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createLoginHistory:async(args) => {

            console.log(args);

            const createLoginHistory = new LoginHistory({
                UserId: args.LoginInput.UserId,
                CreatedAt: new Date().toISOString(),
                IsActive: true,
            });


            const res = await createLoginHistory.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteLoginHistory:async(args) => 
        {
            const wasDeleted = (await LoginHistory.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}