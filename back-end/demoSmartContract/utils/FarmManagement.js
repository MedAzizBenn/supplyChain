const express=require('express');
const { application } = require('express');
const mongoose=require('mongoose');
const Farm=require('./../models/farm');

const app=express();

//save farm
async function saveFarm(farmName,ownerName,farmLong,farmLat,farmDesc){
    var farm=new Farm();
    farm.farmName=farmName;
    farm.ownerName=ownerName;
    farm.farmLongitude=farmLong;
    farm.farmLatitude=farmLat;
    farm.farmDescription=farmDesc;
    farm.save();
    return true;

};

//find all farms
async function getAllFarms()
{
    const allFarms=await Farm.find();
    if(allFarms==null)
    {
        return false;
    }
    else 
        return allFarms;   
}

//find farm by id
function getFarmById(id){
    var farm= Farm.findOne({_id:id});
    if(farm===null)
    {
        return false;
    }
    else{
        return farm
    }
}


//delete farm
async function deleteFarm(id){
    let  farm = await Farm.deleteOne(Farm.findOne({"_id": id}));
        if(farm.deletedCount==0){
            return false;
        }
        else {
            return true;
        }
}


//update farm
/*async function updateDonator(id,name,email,governorate,city,position){
    var donator = await User.updateOne({"_id": id},
    {$set: {"name":name,
            "email":email,
            "governorate":governorate,
            "city":city,
            "position":position
        }});
    if(donator.modifiedCount==0){
        return false;
    }
    else{
        return true;
    }
}*/


module.exports={
    saveFarm,
    getAllFarms,
    getFarmById,
    deleteFarm,
}



