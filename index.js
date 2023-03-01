import express from 'express';
import dotenv from 'dotenv' ;
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import officesRoute from "./routes/offices.js"
import structureRoute from "./routes/structure.js"
import cookieParser from 'cookie-parser';
const app=express()
dotenv.config()
mongoose.set('strictQuery', true);
const connect=async()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/testdb');
        // mongoose.connect('mongodb+srv://sdbooking:sdbooking@cluster0.7g471aj.mongodb.net/booking?retryWrites=true&w=majority')
        console.log("Connected to mongodb.");
    
    }catch(error){
        throw error;
    }
    };
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected!");
})

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected!");
})






// middlewares
app.use(cookieParser())
app.use(express.json())
app.use("/auth",authRoute);
app.use("/users",usersRoute);
app.use("/offices",officesRoute);
app.use("/structure",structureRoute)

app.use((err,req,res,next)=>{
    // console.log("hii middleware")
    // next()
    const errorStatus=err.status||500
    const errorMessage=err.message||"Something went Wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(8800,()=>{
    connect();
    console.log("Connected to backend");
});