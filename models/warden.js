const mongoose = require("mongoose")
const schema = mongoose.Schema

(
    {
        "name":{type:String,require:true},
        "id":{type:String,require:true},
        "proof":{type:String,require:true},
        "gender":{type:String,require:true},
        "hostel":{type:String,require:true},
        "email":{type:String,require:true},
        "password":{type:String,require:true},
        "confirm":{type:String,require:true}   
    }
)

let wardenmodel = mongoose.model("wardens",schema)
module.exports={wardenmodel}