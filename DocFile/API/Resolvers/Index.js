// const { GraphQLUpload } = require("graphql-upload");
const ShopRegistrationResolver = require("./ShopRegistration/Index")
const ShopReviewResolver = require("./ShopReview/Index")


module.exports = resolvers = {
    // Upload: GraphQLUpload,
    Query: {

        // Shop Details
        getShopByID: (_, args) => ShopRegistrationResolver.getShopByID(args),
        getShopList: (_, args) => ShopRegistrationResolver.getShopList(args),

        // Shop Review Details
        
        getShopReviewByShopID: (_, args) => ShopReviewResolver.getShopReviewByShopID(args),




    },
    Mutation:{
        // Shop Registration
        createShop: (_, args) => ShopRegistrationResolver.createShop(args),
        deleteShop: (_, args) => ShopRegistrationResolver.deleteShop(args),

        // Shop Review
        createShopReview: (_, args) => ShopReviewResolver.createShopReview(args),
        deleteShopReview: (_, args) => ShopReviewResolver.deleteShopReview(args),
        

    }
}
