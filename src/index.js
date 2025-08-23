// Databse is always in another continent
// so ussee communicate krne ke liye time lagta hai so 
// always use async await functionalities
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./controllers/db/db.js";
import app from "./app.js";
import mongoose from "mongoose"


dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!!", err);
})


/*
import express from "express"
const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})

*/