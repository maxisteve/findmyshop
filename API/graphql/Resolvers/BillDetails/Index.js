const BillDetails = require('../../../models/BillDetails');
const StudentDetail = require('../../../models/StudentDetail');
const RoomDetail = require('../../../models/RoomDetail');


module.exports = {

 
    getBillDetailsByID:async(args) => {
        return await BillDetails.findById(args.ID);
    },


    getBillDetailsList:async(args) => {

        var listBill = await BillDetails.find().sort({CreatedAt:-1}).limit(args.amount);

        listBill.map(function(billDetails){
            billDetails.Id = (billDetails._id).toString()
        })
        return listBill;
    },

    getBillDetailsListByStudentID:async(args) => {
        var listBill = await BillDetails.find({StudentId:args.StudentId}).sort({CreatedAt:-1}).limit(args.amount);
        listBill.map(function(billDetails){
            billDetails.Id = (billDetails._id).toString()
        })
        return listBill;
    },

 
    PayBill:async(args) => {
            var resultObj={
                StudentId: args.BillInput.StudentId,
                EBCharge: null,
                EBUnit: null,
                EBLastUnit: null,
                Fees: null,
                Status: null,
                Date: null,
                PaidDate: null,
                Remarks: null,
                CreatedAt: null,
                IsActive: null,
            }
            var res = null;
            var resultBill = await BillDetails.findOne({Date:args.BillInput.Date, StudentId:args.BillInput.StudentId}).sort({CreatedAt:-1}).limit(args.amount);

            if(resultBill!=null)
            {

                if(resultBill.Status=="UnPaid" || resultBill.Status == "Partially Paid")
                {

                    var objStudentDetail  = await StudentDetail.findById(args.BillInput.StudentId)
                    var objRoom = await RoomDetail.findById(objStudentDetail.RoomId);
                    var updateStatus = null
                    var TotalFees = null

                    if(resultBill.Status=="UnPaid")
                    {
                        if(args.BillInput.Fees == objRoom.Fees)
                        {
                            updateStatus = "Paid" 
                        }
                        else if(args.BillInput.Fees < objRoom.Fees){
    
                            updateStatus = "Partially Paid" 
                        }

                        TotalFees = args.BillInput.Fees;

                    }
                    else if(resultBill.Status == "Partially Paid")
                    {
                        
                        if(( (resultBill.Fees * 1 ) + (args.BillInput.Fees * 1)) == objRoom.Fees)
                        {
                            updateStatus = "Paid" 
                        }
                         else if(( (resultBill.Fees * 1 ) + (args.BillInput.Fees * 1)) < objRoom.Fees)
                         {
                            updateStatus = "Partially Paid" 
                         }

                         TotalFees = (resultBill.Fees * 1 ) + (args.BillInput.Fees * 1)

                        }

                    var UpdateResult = await BillDetails.updateOne({_id:resultBill._id},{$set:{
                        EBCharge: args.BillInput.EBCharge,
                        EBUnit: args.BillInput.EBUnit,
                        EBLastUnit: args.BillInput.EBLastUnit,
                        Fees: TotalFees,
                        Status: updateStatus,
                        PaidDate: new Date().toISOString(),
                        Remarks: args.BillInput.Remarks,
                    }})


                }
                else
                {
                    resultObj.Remarks = "Already Paid";
                }
            }
            else if(resultBill==null) {
                resultObj.Remarks = "Already Paid";
            }

            return  resultObj
        },
        
        createBillDetails:async(args) => {

            var res = null;
            var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];;
            var date = new Date();
            var thisMonthDate  = months[date.getMonth()] + ' ' + date.getFullYear();
            // thisMonthDate= "JAN 2023";

            var StudentDetailsList =await StudentDetail.find().sort({CreatedAt:-1})  //10
            var listBillDetails = await BillDetails.find({Date:thisMonthDate});  //8 thisMonthDate
            var nonGendratebillStudent =[];
            var resultList = [];
            if(listBillDetails!=null && listBillDetails.length > 0)
            {
                nonGendratebillStudent = StudentDetailsList.filter(item => !listBillDetails.some(_item => _item.StudentId === (item._id).toString()));
            }
            else
            {
                nonGendratebillStudent = StudentDetailsList;
            }

            nonGendratebillStudent.map(async function(objStudentDetail){
 
                 if(objStudentDetail.RoomId!=null)
                 {
                     var objRoom = await RoomDetail.findById(objStudentDetail.RoomId);
 
                     if(objRoom!=null)
                     {
                        const createBillDetails = new BillDetails({
                            StudentId: objStudentDetail._id,
                            EBCharge: null,
                            EBUnit: null,
                            EBLastUnit: null,
                            Fees: objRoom.Fees,
                            Status: "UnPaid",
                            Date: thisMonthDate,
                            PaidDate: null,
                            Remarks: "New Bill",
                            CreatedAt: new Date().toISOString(),
                            IsActive: true,
                        });
            
                         res = await createBillDetails.save(); //Mongo Saving
                         resultList.push({
                           id:res.id,
                           ...res._doc
                         })
                     }
                     
                 }
                })

            return  resultList
        },


        deleteBillDetails:async(args) => 
        {

            
            const wasDeleted = (await BillDetails.deleteOne({_id:args.ID})).deletedCount


            return  wasDeleted;
        }
}