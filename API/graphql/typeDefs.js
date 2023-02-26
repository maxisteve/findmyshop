const {gql} = require('apollo-server');

module.exports=gql`

### Response Object

type ShopRegistration{
    Id: String,
    ShopName:String,
    ShopAddress:String,
    Phone:String,
    EmailId:String,
    ShopDescription:String,
    AvailableTime:String,
    CreatedAt:String,
    IsActive: Boolean,
}


type ShopReview{
    Id: String,
    ShopName:String,
    ShopAddress:String,
    Review:String,
    CreatedAt:String,
    IsActive: Boolean,
}


### Input Object
input ShopRegistrationInput{
    ShopName:String,
    ShopAddress:String,
    Phone:String,
    EmailId:String,
    ShopDescription:String,
    AvailableTime:String,
    UserName:String,
    Password:String,
}


input ShopReviewInput{
    ShopName:String,
    ShopId:String,
    Review:String,
    CreatedAt:String,
    IsActive: Boolean,
}


### get Methods [Read (GetbyId, List, Filters ) ]
type Query {

    ### Shop Details
    getShopByID(ID:ID!) : ShopRegistration!
    getShopList(amount:Int) : [ShopRegistration]

    ### Shop Review
    getShopReviewByShopID(ID:ID!) : [ShopRegistration]

}


### Post Methods [create, update, Delete]
type Mutation{
        
    ## Master Data
    createShop(ShopRegistrationInput:ShopRegistrationInput):ShopRegistration!
    deleteShop(ID:ID!):Boolean
     
    ## imp
    createShopReview(ShopReviewInput:ShopReviewInput):ShopReview!
    deleteShopReview(ID:ID!):Boolean

}`