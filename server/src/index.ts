import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolver/hello";
import {connect} from "mongoose";
import { TodoResolver } from "./resolver/todoResolver";
const PORT = process.env.port || 5001;
const MONGO_DB_URL = 'mongodb+srv://test-user:hello_world@cluster0.cguwb.mongodb.net/gqldata?retryWrites=true&w=majority';

const main = async () => {

    // create mongoose connection
    const mongooseCon = await connect(MONGO_DB_URL,{useNewUrlParser:true});
    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver,TodoResolver],
            validate: false,
            
        }),
        context:(req : Request ,res : Response)=>({mongooseCon, req,res})
    });

    apolloServer.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log("Server started at " + PORT);
    })
}

main().catch((err) => {
    console.log(err);
})