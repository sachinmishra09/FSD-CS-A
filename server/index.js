import express from 'express';
const app=express();

const users=[{id:1,name:"sachin"}]
app.get("/",(req,res)=>{
    try{
        res.status(200).json({message:"ls"})
    }
})