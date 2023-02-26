const HostelSetup = require('../../../models/HostelSetup');


module.exports = {

 
    getHostelSetupByID:async(args) => {
        return await HostelSetup.findById(args.ID);
    },

    getHostelSetupList:async(args) => {
        return await HostelSetup.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createHostelSetup:async(args) => {

            console.log(args);

            const createHostelSetup = new HostelSetup({
                HostelName: args.HostelInput.HostelName,
                HostelAddress: args.HostelInput.HostelAddress,
                InchargeName: args.HostelInput.InchargeName,
                InchargeMailId: args.HostelInput.InchargeMailId,
                InchargePhone: args.HostelInput.InchargePhone,
                GST: args.HostelInput.GST,
                HostelPhone: args.HostelInput.HostelPhone,
                HostelMailId: args.HostelInput.HostelMailId,
                Remarks: args.HostelInput.Remarks,
                CreatedAt: new Date().toISOString(),
                IsActive: true,
            });


            const res = await createHostelSetup.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteHostelSetup:async(args) => 
        {
            const wasDeleted = (await HostelSetup.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}