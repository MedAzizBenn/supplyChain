const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Farm=new Schema({
    farmName:{
        type:String,
        required:true
    },
    ownerName:{
        type:String,
        required:true
    },
    farmLongitude:{
        type:Number,
        required:true
    },
    farmLatitude:{
        type:Number,
        required:true
    },
    farmDescription:{
        type:String,
        required:true
    }
});

const farm=mongoose.model('Farm',Farm);
module.exports=farm;