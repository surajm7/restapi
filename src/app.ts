import express from 'express'

const app =express();

app.get('/',(req,res,next)=>{
    res.json({message:"welcome to elib api"});

})



export default app;