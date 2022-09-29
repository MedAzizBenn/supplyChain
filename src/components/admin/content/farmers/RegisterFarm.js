import React,{ useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import {ethers} from 'ethers';
import FarmManagerABI from './../../../../contractsData/FarmManagerABI.json';
import farmManagerAddress from './../../../../contractsData/farmManagerAddress.json';
import Select from 'react-select'

class RegisterFarm extends React.Component {
    
    // farmManagerAddress="0x475C0D4Edc2E1DE02B4CE1a9a4413eF957Dc2060";


      constructor(props)
      {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
          userKey:'',
          farmKey:''
        };
        this.handleChange = this.handleChange.bind(this);

      }

      handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })    }
  
      handleClick=async()=>
  {
    
    let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const ethAddress = await provider.getSigner().getAddress();
    const supplyChain=new ethers.Contract(farmManagerAddress.address,FarmManagerABI,provider.getSigner(0));
console.log(this.state.farmKey);
console.log(this.state.userKey);
    const res= await supplyChain.registerFarm(this.state.farmKey,this.state.userKey);
    /* const userInfo=supplyChain.getUserInfo(code);
     console.log(userInfo);*/
     
  }

  render()
  {
    return (<>
        <MDBContainer>
          <MDBRow>
          <p>please enter the Farm informations </p>
    
            <MDBCol md="6">
                <div className="grey-text">
                  <MDBInput
                    label="Type the user private key"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={this.handleChange}
                    value={this.state.userKey}
                    name="userKey"
                  />
                     <MDBInput
                    label="Type the Farm address"
                    icon="address"
                    group
                    type="text"
                    validate
                    onChange={this.handleChange}
                    value={this.state.farmKey}
                    name="farmKey"
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-primary" onClick={this.handleClick} >add Farm</button>
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>  
    
    
        </>);
      
    

  }
}
    

export default RegisterFarm;