const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://ramrragul:Password123*@cluster0.gvasnjo.mongodb.net/test"

// "mongodb+srv://Vanaja2003elumalai:MyPasswprd123*@cluster0.boha9vm.mongodb.net/?retryWrites=true&w=majority"


//Apollo server
// typeDefs : GraphQL Type definitions
//resolver : how do we resolve quires / mutations



// declare variables and methods
const typeDefs = require('./graphql/typeDefs');


// define  resolvers (methods)
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});


mongoose.connect(MONGODB,{useNewUrlParser:true})
.then(()=>{
    console.log("Connecting to Mongo");
    return server.listen({port:5000});
})
.then((res)=>{
    console.log(`server running at ${res.url}`)
})