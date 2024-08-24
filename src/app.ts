import { config } from 'dotenv';
import express, { NextFunction,Request,Response } from 'express'
import {HttpError} from "http-errors";

const app =express();

app.get('/',(req,res,next)=>{
    throw new Error("something went wrong");
    throw error;
    res.json({message:"welcome to elib api"});

})

//Global Error Handler

// app.use((err:HttpError,req:Request,res:Response,next:NextFunction)=>{
//     const statusCode=err.statusCode||500;
//     return res.status(statusCode).json({
//         message:err.message,
//     errorStack:config.env==="devlopment"?err.stack:"",
//         // errorStack:err.stack,
//     })
// })



export default app;