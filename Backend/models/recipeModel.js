const { timeStamp, time } = require("console")
const mongoose=require("mongoose")

const recipeSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:Array,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    cuisine:{
        type:String
    },
    time:{
        type:String,
    },
    coverImage:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
    
},{timestamps:true})

module.exports=mongoose.model("Recipes",recipeSchema)