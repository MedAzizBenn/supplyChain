import React, { useState } from "react";
import {ethers,ethereum} from 'ethers';
import transactionManagerABI from './../../contractsData/transactionManagerABI.json';
import transactionAddress from './../../contractsData/transactionManagerAddress.json';
import traceManagerAddress from './../../contractsData/traceManagerAddress.json'
import AddFarmer from "./AddFarm";
import './Farmer.css';
import { useLocation } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";

const Farmer = (account) => {
 // const { account } = route.params;
 const address=window.localStorage.getItem("address");
 console.log("@",address)
  const animalList=[
    122,
    123,
    142
  ];
  const [srcFarm, setSrcFarm] = useState("")
  const [dstFarm, setDstFarm] = useState("")
  const [dstOwner, setDstOwner] = useState("")
  const [animalCount, setAnimalCount] = useState(0)
  const [timeUpdated, setTimeUpdated] = useState("")
  const [animalTag, setAnimalTag] = useState([])




    /*constructor(props) {
      super(props);
      this.state = {srcFarm: '',
      dstFarm: '',
      srcOwner: '',
      dstOwner: '',
      animalCount: 0,
      timeUpdated: '',
      animalTag:[]
    }  
    
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }*/
  
    const handleChange=event=> {
       /* setState({
            [event.target.name]: event.target.value
        })  */  }
  
    const handleSubmit=async(event)=> {
      console.log(srcFarm)
        
     // alert('A name was submitted: ' + state.dstFarm);
      event.preventDefault();
     // const transactionAddress="0x7F6f3aF80776B8C43Aa2ACbd02d98B69D46e8539";
      // const provider=new ethers.providers.Web3Provider(window.ethereum);
      // let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
      const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545")
        const signer=provider.getSigner();
      /* const supplyChain=await ethers.Contract(data,transactionManagerABI,provider.getSigner());
       supplyChain.createTransaction(1,this.state.srcFarm,this.state.dstFarm,this.state.srcOwner,this.state.dstOwner,this.state.animalCount,this.state.timeUpdated)
      */
    // state.animalTag=animalList;
     //console.log(state.animalTag);

      const contract=new ethers.Contract(transactionAddress.address,transactionManagerABI,signer);
      console.log(srcFarm," ////// ",dstFarm," //////// ",address);
     const res=contract.createTransaction(30,srcFarm,dstFarm,address,dstOwner,animalCount,timeUpdated,animalList);
      console.log(res);
    
    }

    const setManager=async(e)=>
    {
      let provider = ethers.getDefaultProvider();
    //  let wallet = new ethers.Wallet(privateKey, provider);
      console.log(provider);
      provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
      const signer=provider.getSigner();
      const contract=new ethers.Contract(transactionAddress.address,transactionManagerABI,signer);
      const manager=await contract.setManager(traceManagerAddress.address,2);
      console.log("done");
    }
  
   
      return (
        <MDBContainer>
          <MDBRow>
          <p>please enter the Transaction information </p>
    
            <MDBCol md="6">
              <form >
          <label>
            Src Farm:
           <MDBInput  label="Type your farm address"
                     name="srcFarm" onChange={(e)=>setSrcFarm(e.target.value)} value={srcFarm}  />
            
          </label>
          <label>
            Dest Farm:
            <MDBInput  label="Type the receiver farm address"
                      name="dstFarm" value={dstFarm} onChange={(e)=>setDstFarm(e.target.value)} />
          </label>
          <label>
            Dst Owner:
            <MDBInput  label="Type the receiver farm address" name="dstOwner" value={dstOwner} onChange={(e)=>setDstOwner(e.target.value)} />
          </label>
          <label>
            animalCount:
            <MDBInput  label="Type the animals number" name="animalCount" value={animalCount} onChange={(e)=>setAnimalCount(e.target.value)}/>
          </label>
          <label>
            Time:
            <MDBInput  label="Type the transaction time" name="timeUpdated" value={timeUpdated} onChange={(e)=>setTimeUpdated(e.target.value)} />
          </label>

          <button className="btn btn-outline-primary" type="submit" value="Submit" onClick={handleSubmit}>Send Transaction</button>
        </form>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
        
        
        
      );
    
  }
  export default Farmer;