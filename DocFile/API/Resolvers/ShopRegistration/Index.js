const ShopRegistration = require('../../../models/shopregistration');
const { isNullorEmptyorUndefined } = require('../../Common/CommonMethods');


module.exports = {

 
    getShopByID:async(args) => {
        return await ShopRegistration.findById(args.ID);
    },

    getShopList:async(args) => {
        var ListShop = await ShopRegistration.find({IsActive:true}).sort({CreatedAt:-1}).limit(args.amount);
        ListShop.map(function(objshop) {
            objshop.Id = objshop._id.toString();
        })
        return ListShop;
    },


    createShop:async(args) => {

            var result  = {};
            var resultObj = {
                Id: null,
                ShopName:null,
                ShopAddress:null,
                Phone:null,
                EmailId:null,
                ShopDescription:null,
                AvailableTime:null,
                CreatedAt:null,
                IsActive: null,
            }



            if(isNullorEmptyorUndefined(args.ShopRegistrationInput.ShopName) && isNullorEmptyorUndefined(args.ShopRegistrationInput.ShopAddress) && isNullorEmptyorUndefined(args.ShopRegistrationInput.Phone) && isNullorEmptyorUndefined(args.ShopRegistrationInput.EmailId) && isNullorEmptyorUndefined(args.ShopRegistrationInput.AvailableTime))
            {
                var  FindResult =  null;
                // await ShopRegistration.findOne({"Phone":args.ShopRegistrationInput.Phone});

                if(FindResult == null)
                {
                    
                    const createShopDetails = new ShopRegistration({
                        ShopName:args.ShopRegistrationInput.ShopName,
                        ShopAddress:args.ShopRegistrationInput.ShopAddress,
                        Phone:args.ShopRegistrationInput.Phone,
                        EmailId:args.ShopRegistrationInput.EmailId,
                        ShopDescription:args.ShopRegistrationInput.ShopDescription,
                        AvailableTime:args.ShopRegistrationInput.AvailableTime,
                        CreatedAt: new Date().toISOString(),
                        IsActive: true,
    
                    });
        
                    const res = await createShopDetails.save(); //Mongo Saving
    
                    result = {
                        id:res.id,
                        ...res._doc
                    }
                }
                 
                else
                {
                        resultObj.Remarks ="Mobile number Already Exist",
                        result =  resultObj;
                }
            }
            else
            {
                resultObj.Remarks ="Please fill mandatory fields ",
                result =  resultObj;
            }
            
            return result
    },
    
    deleteShop:async(args) => 
    {
        const wasDeleted = (await Attendance.deleteOne({_id:args.ID})).deletedCount
        return  wasDeleted;
    }
}