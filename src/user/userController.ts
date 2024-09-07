import { NextFunction,Request,Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";

const createUser =async(req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password}=req.body;

    //Validation
    if(!name || !email || !password){
        const error =createHttpError(400,"All field are required");
        return next(error);

    }

    // Dataase call

    const  user=  await  userModel.findOne

    
    //Process
    //response

    res.json({message:"User Created"})

};

export {createUser};