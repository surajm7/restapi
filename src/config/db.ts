import mongoose from "mongoose";
import {config} from "./config"

const connectDB=async()=>{
    try{

        await mongoose.connect(config.databaseUrl as string);

        mongoose.connection.on("connected",()=>{
            console.log("Connected to db successfully");
        });


        mongoose.connection.on("error",(err)=>{
            console.log("Error connecting to db",err);
        })

    }catch(err){
        console.log("failed to connect to database",err);
        process.exit(1);
    }
}

export default connectDB;

