import {ethers,ethereum} from 'ethers';
import TraceManagerABI from './../contractsData/TraceManagerABI.json';
import traceManagerAddress from './../contractsData/traceManagerAddress.json';
import farmManagerAddress from './../contractsData/farmManagerAddress.json';
import FarmManagerABI from './../contractsData/FarmManagerABI.json';
import {useParams } from 'react-router-dom';
import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import {Map,GoogleApiWrapper} from 'google-maps-react';
function Customer(props){
    let { code } = useParams();
    const [srcFarm, setSrcFarm] = useState("")
    const [farmerName, setFarmerName] = useState("")
    const [farmInfo, setFarmInfo] = useState("")
    const [farmLong, setFarmLong] = useState(0)
    const [farmLat, setFarmLat] = useState(0)
    const [transactions,setTransactions]=useState([]);



    let src=[];

    let items=[];
    const handleClick=async ()=>{
      //  const traceManagerAddress="0xf3369450728777aE7795f7aA7A2d3bc467c50ce2";
       // const provider=new ethers.providers.Web3Provider(window.ethereum);
       if (typeof  window.ethereum !== undefined) {
        await window.ethereum.enable();
        let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
        const supplyChain=new ethers.Contract(traceManagerAddress.address,TraceManagerABI,provider.getSigner(0));
        const animalTag=parseInt(code);
        console.log(animalTag);
        //const res= await supplyChain.produceItemByFarmer(5,"azizs farm","farm kbira barcha","10.999","15.42154",12,"aziz");  
        const mouvementCount = await supplyChain.getMovementCount(animalTag);
        console.log(parseInt(mouvementCount));
        for(let i=0;i<parseInt(mouvementCount);i++)
        {
            let movement=await supplyChain.getMovementData(animalTag,0);
            console.log(movement);
            await getFarmInfo(movement.srcFarm);
            await getFarmInfo(movement.dstFarm);
        }
    
        const count=0;
        parseInt(mouvementCount,count);
     /*  for(let i=0;i<mouvementCount;i++)
       {
            
       }*/

       }         
       //}
    }
    handleClick();


    const getFarmInfo=async(farm)=>
    {
        let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
        const supplyChain=new ethers.Contract(farmManagerAddress.address,FarmManagerABI,provider.getSigner(0));
        src=await supplyChain.getFarmCustomerInfo(farm);
        console.log(src);
        setSrcFarm(src.originFarmName);
        setFarmerName(src.originFarmerName);
        setFarmInfo(src.originFarmInformation);
        setFarmLat(src.originFarmLatitude);
        setFarmLong(src.originFarmLongitude); 

    }

    return (
        <>
         <div className='container-fluid' >
                    <div className="row">
                        <div className="col-8"></div>
         <img
            src="https://3toh891af6rf1cn1po1ecevj-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/web-farm-working-cow-x-2400.jpg"
            />
            </div>
            </div>
            <center> <h1>{srcFarm}</h1>
                </center>

                <MDBContainer>
          <MDBRow>
          <p>Farm information </p>
                
            <MDBCol md="6">
            <div className="container overflow-hidden">
  <div className="row gy-5">
    <div className="col-6">
      <div className="p-3">Farm owner</div>
    </div>
    <div className="col-6">
      <div className="p-3">{farmerName}</div>
    </div>
    <div className="col-6">
      <div className="p-3">Farm information</div>
    </div>
    <div className="col-6">
      <div className="p-3">{farmInfo}</div>
    </div>
    <div className="col-6">
      <div className="p-3">Farm latitude</div>
    </div>
    <div className="col-6">
      <div className="p-3">{farmLat}</div>
    </div>
    <div className="col-6">
      <div className="p-3">Farm longitude</div>
    </div>
    <div className="col-6">
      <div className="p-3">{farmLong}</div>
    </div>
  </div>
  <div className='row gy-8'>

      </div>
  <div className='row gy-8'>
      <map google={props.google}
      style={{width:"50%",height:"50%"}}
      zoom={10}
      initialCenter={
          {
              lat:28.704060,
              lng:77.102493
          }
      }/>

  </div>
</div>
                </MDBCol>
                </MDBRow>
                </MDBContainer>
            
        </>
      
        );
}


async function fetchData(info) {
    var data = await fetch(info).then(res => {
        return res.json();
});
}

export default GoogleApiWrapper({apiKey:"AIzaSyBxHpGL9eBCxYkB7WmYnJb34KQPPJQPI0Y"})(Customer);