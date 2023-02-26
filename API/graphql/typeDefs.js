const {gql} = require('apollo-server');

module.exports=gql`

### Response Object
type Enquiry{
    Name: String,
    Phone: String,
    Email: String,
    Occupation: String,
    CompanyOrInstitution: String,
    Address: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type Room{
    Id:String,
    RoomNumber:String,
    RoomType:String,
    NoOfOccupancy:String,
    FloorId:String,
    Fees:String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean
}

type UserMaster{
    Id: String,
    Name: String,
    UserName: String,
    Password: String,
    EmailId: String,
    PhoneNumber: String,
    UserType: String,
    Salt: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type StudentDetail{
    Id:String,
    Name: String,
    Email: String,
    Phone: String,
    Address: String,
    Occupation: String,
    CompanyOrInstitution: String,
    GuardianName: String,
    GuardianPhone: String,
    GuardianEmail: String,
    GuardianAddress: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    RoomId: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type Attendance{
    Id: String,
    StudentId:String,
    InTime:String,
    OutTime:String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type ListAttendanceByStudentIdInput{
    StudentId:String,
    amount:String,
}

type BillDetail{
    Id: String,
    StudentId: String,
    EBCharge: String,
    EBUnit: String,
    EBLastUnit: String,
    Fees: String,
    Status: String,
    Date: String,
    PaidDate: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type BlockDetail{
    Id: String,
    Name: String,
    NoOfFloor:String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}
type FloorDetail{
    Id: String,
    FloorName: String,
    FloorNumber: String,
    NoOfRooms: String,
    BlockId: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type HostelDetail{
    Id: String,
    HostelName: String,
    HostelAddress: String,
    InchargeName: String,
    InchargeMailId: String,
    InchargePhone:String,
    GST:String,
    HostelPhone:String,
    HostelMailId: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type LoginHistory{
    Id: String,
    UserId:String,
    CreatedAt: String,
    IsActive: Boolean,
}


 


### Input Object

input EnquiryInput{
    Name: String,
    Phone: String,
    Email: String,
    Occupation: String,
    CompanyOrInstitution: String,
    Address: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
}

input RoomInput{
    RoomNumber:String,
    RoomType:String,
    NoOfOccupancy:String,
    FloorId:String,
    Fees:String,
    Remarks: String,
}

input BillInput{
    StudentId: String,
    EBCharge: String,
    EBUnit: String,
    EBLastUnit: String,
    Fees: String,
    Date: String,
    Remarks: String,
}

input BlockInput{
    Name: String,
    Remarks: String,
    NoOfFloor:String,
}

input FloorInput{
    FloorName: String,
    FloorNumber: String,
    NoOfRooms: String,
    BlockId: String,
}


input HostelInput{
    HostelName: String,
    HostelAddress: String,
    InchargeName: String,
    InchargeMailId: String,
    InchargePhone:String,
    GST:String,
    HostelPhone:String,
    HostelMailId: String,
    Remarks: String,
}

input LoginInput{
    UserId:String,
}

input StudentInput{
    Name: String,
    Email: String,
    Phone: String,
    Address: String,
    Occupation: String,
    CompanyOrInstitution: String,
    GuardianName: String,
    GuardianPhone: String,
    GuardianEmail: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    RoomId: String,
}


input UserMasterInput{
    Name: String,
    UserName: String,
    Password: String,
    EmailId: String,
    PhoneNumber: String,
    UserType: String,
    Salt: String,
}

 

input StudentDetailInput{
    Name: String,
    Email: String,
    Phone: String,
    Address: String,
    Occupation: String,
    CompanyOrInstitution: String,
    GuardianAddress: String,
    GuardianName: String,
    GuardianPhone: String,
    GuardianEmail: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    RoomId: String,
}

input AttendanceInput{
    StudentId:String,
    Remarks: String,
    TranType: String,
}


### get Methods [Read (GetbyId, List, Filters ) ]
type Query {

    ### Enquiry
    getEnquiryByID(ID:ID!) : Enquiry!
    getEnquiryList(amount:Int) : [Enquiry]

    ### Room
    getRoomByID(ID:ID!) : Room!
    getRoomList(amount:Int) : [Room]
    getRoomListByFloorID(FloorId:String) : [Room]


    ### Bill
    getBillDetailsByID(ID:ID!) : BillDetail!
    getBillDetailsList(amount:Int) : [BillDetail]
    getBillDetailsListByStudentID(StudentId:String) : [BillDetail]

    ### Block
    getBlockDetailsByID(ID:ID!) : BlockDetail!
    getBlockDetailsList(amount:Int) : [BlockDetail]

    ### Floor
    getFloorDetailsByID(ID:ID!) : FloorDetail!
    getFloorDetailsList(amount:Int) : [FloorDetail]

    ###  Hostel
    getHostelByID(ID:ID!) : HostelDetail!
    getHostelList(amount:Int) : [HostelDetail]

    ###  Login
    getLoginByID(ID:ID!) : LoginHistory!
    getLoginList(amount:Int) : [LoginHistory]

    ### Student
    getStudentDetailByID(ID:ID!) : StudentDetail!
    getStudentDetailList(amount:Int) : [StudentDetail]


    ### Attendance
    getAttendanceByID(ID:ID!) : Attendance!
    getAttendanceList(amount:Int) : [Attendance]
    ListAttendanceByStudentId(StudentId:String, amount:Int) : [Attendance]
    

    ### UserMaster
    getUserMasterByID(ID:ID!) : UserMaster!
    getUserMasterList(amount:Int) : [UserMaster]    


}


### Post Methods [create, update, Delete]
type Mutation{

        
    ## Master Data
    createHostelSetup(HostelInput:HostelInput):HostelDetail!
    deleteHostelSetup(ID:ID!):Boolean

    createRoom(roomInput:RoomInput):Room!
    deleteRoom(ID:ID!):Boolean

    createBlockDetails(BlockInput:BlockInput):BlockDetail!
    UpdateBlockDetails(ID:ID!):Boolean
    deleteBlockDetails(ID:ID!):Boolean

    createFloorDetails(FloorInput:FloorInput):FloorDetail!
    deleteFloorDetails(ID:ID!):Boolean


    ## imp
    createEnquiry(enquiryInput:EnquiryInput):Enquiry!
    deleteEnquiry(ID:ID!):Boolean

    ## imp
    createBillDetails(BillInput:BillInput):[BillDetail]!
    PayBill(BillInput:BillInput):BillDetail!
    deleteBillDetails(ID:ID!):Boolean
    

    ## imp
    createAttendance(AttendanceInput:AttendanceInput):Attendance!
    deleteAttendance(ID:ID!):Boolean

    ## imp
    createStudentDetail(StudentDetailInput:StudentDetailInput):StudentDetail!
    deleteStudentDetail(ID:ID!):Boolean

    ## imp
    createUserMaster(UserMasterInput:UserMasterInput):UserMaster!
    deleteUserMaster(ID:ID!):Boolean

    ## imp
    createLoginHistory(LoginInput:LoginInput):LoginHistory!
    deleteLoginHistory(ID:ID!):Boolean

}`