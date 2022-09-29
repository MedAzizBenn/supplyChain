var express = require('express');
var router = express.Router();
const Farm=require('./../models/farm');
const farmController=require('./../utils/FarmManagement')

/* GET users listing. */
router.post('/saveFarm',(req,res)=>
{  
  /*var id=req.body.id;
  if(id!=null)
  {
    var farm=farmController.getFarmById(id).then((result)=>
    {
        if(result)
        {
            res.status(400).send({
                message:"Farm already exists",
                value:result
            });
        }
        else
        {*/
            const farmName=req.body.farmName;
            const ownerName=req.body.ownerName;
            const farmLong=req.body.farmLong;
            const farmLat=req.body.farmLat;
            const farmDesc=req.body.farmDesc;
           // const totalDonation=req.body.totalDonation;
          var result=farmController.saveFarm(farmName,ownerName,farmLong,farmLat,farmDesc);
            result.then((resp)=>
            {
                if(!resp)
                {
                 res.status(400).send({
                      message:"farm creation failed"
                  });
                  res.status(401).send({
                    message:"User Unauthorized"
                  });
                  res.status(408).send({
                      message:"The server timed out waiting for the request"
                  });
                  }
                else
                 {
                     res.status(201).send({
                      message:"farm created"
                    });   
                  }

            })
         
       // }
      
  //  });
  
});

router.get('/',(req,res)=>
{
  console.log('zizko');
})
router.get('/findAllFarms',(req,res)=>
{
  console.log("aziz");
    farmController.getAllFarms().then((result)=>{
        res.status(200).send((result));
    })
});

router.get('/findFarm/:id',(req,res)=>
{
    const id=req.params.id;
    var farm=farmController.getFarmById(id).then((result)=>
    {
        if(!result)
        {
            res.status(400).send({
                message:"Farm not found",
                value:result
            });
        }
        else
        {
            res.status(200).send({
                message:"Farm found",
                value:result
            })
        }
    
    })
});


router.delete('/deleteFarm/:id',(req,res)=>
{
    var id=req.params.id;
    var farm=farmController.deleteFarm(id).then((result)=>{
        if(!result){
          res.status(400).send({
            message: 'farm does not exist',
            value: result,
          });
        }
        else{
          res.status(200).send({
            message:"farm has been deleted",
            value: result,
          });
        }
      });
    });

/*router.put('/updateDonator/:id',(req,res)=>
{
    var id=req.params.id;
    var donator=donatorController.updateDonator(id,req.body.name,req.body.email,req.body.governorate,req.body.city,req.body.position).then((resp) =>{
        if(resp){
          res.status(200).send({
            message: "donator has been updated",
            value: resp
          });
        }
        else{
          res.status(400).send({
            message: "update not possible",
            value: resp
          });
        }
      });
    });*/

module.exports = router;
