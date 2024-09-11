import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import route from "./route/user.route.js";

const app=express();
app.use(bodyParser.json())
app.use(cors({origin:[""],
             methods:["POST","GET"],
             crentials:true}));

const port=8000
const url="mongodb+srv://skv66218828:skv66218828@cluster0.vhikf8f.mongodb.net/CRUD-App?retryWrites=true&w=majority&appName=Cluster0";


app.listen(port,()=>{
    console.log("Server is running on port-- "+port);
}) 

mongoose.connect(url)

.then(()=>{
    console.log("MongoDB Connected")
    
})
.catch((error)=>{console.log(error)})

app.use('/',(req,res)=>{
  res.json({msg:"Hello"})
})

app.use('/api',route)

