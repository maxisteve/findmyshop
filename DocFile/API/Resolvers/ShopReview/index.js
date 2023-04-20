const ShopReview = require('../../../models/shopregistration');


const { isNullorEmptyorUndefined } = require('../../Common/CommonMethods');


module.exports = {


    getShopReviewByShopID:async(args) => {
        return await ShopReview.find({Id:args.ShopID}).sort({CreatedAt:-1}).limit(args.amount);
    },

    createShopReview:async(args) => {

            var result  = {};
  
            const ShopReview = new ShopReview({
                CustomerId: args.Customer.CustomerId,
                Remarks: args.Customer.Remarks,
            });

            const res = await ShopReview.save(); //Mongo Saving

            result = {
                id:res.id,
                ...res._doc
            }
          

            return result
    },
    
    deleteShopReview:async(args) => 
    {
        const wasDeleted = (await ShopReview.deleteOne({_id:args.ID})).deletedCount
        return  wasDeleted;
    }
}