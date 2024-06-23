const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {usermodel} = require("./models/user")
const {wardenmodel} = require("./models/warden")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sonasabu:sonavi306@cluster0.ejzjjq6.mongodb.net/mernattendencedb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/signin",(req,res)=>{
let input = req.body
let user = new usermodel(input)
user.save()
res.json({"status":"success"})
})

app.post("/signup",(req,res)=>{
let input = req.body
let warden = new wardenmodel(input)
warden.save()
res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server running..")
})
