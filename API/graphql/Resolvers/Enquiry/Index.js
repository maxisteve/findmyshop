const Enquiry = require('../../../models/Enquiry');


module.exports = {

 
    getEnquiryByID:async(args) => {
        return await Enquiry.findById(args.ID);
    },

    getEnquiryList:async(args) => {
        return await Enquiry.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createEnquiry:async(args) => {

            console.log(args);

            const createEnquiry = new Enquiry({
                Name: args.enquiryInput.Name,
                Phone: args.enquiryInput.Phone,
                Email: args.enquiryInput.Email,
                Occupation: args.enquiryInput.Occupation,
                CompanyOrInstitution: args.enquiryInput.CompanyOrInstitution,
                Address: args.enquiryInput.Address,
                City: args.enquiryInput.City,
                State: args.enquiryInput.State,
                Country: args.enquiryInput.Country,
                PinCode: args.enquiryInput.PinCode,
                Remarks: args.enquiryInput.Remarks,
                CreatedAt: new Date().toISOString(),
                IsActive: true,
            });


            const res = await createEnquiry.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteEnquiry:async(args) => 
        {
            const wasDeleted = (await Enquiry.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}