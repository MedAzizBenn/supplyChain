import React,{ useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import {ethers} from 'ethers';
import farmManagerABI from './../../contractsData/FarmManagerABI.json';
import transactionABI from './../../contractsData/transactionManagerABI.json';
import farmManagerAddress from './../../contractsData/farmManagerAddress.json';
import Select from 'react-select'
import Sidebar from './sideBar/SideBar';
import farm from './Farm.json';

class AddFarmer extends React.Component {
    
     //farmManagerAddress="0xB3BdCCc99558175E3e0f0C5b80783528d69Cd940";

      constructor(props)
      {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
          userKey:'',
          farmKey:'',
          animalCount:0,
          farmHash:'',
          time:0
        };
        this.handleChange = this.handleChange.bind(this);

      }

      handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })    }
  
      handleClick=async()=>
  {
    console.log(farm.Farm[0]);
    let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const ethAddress = await provider.getSigner().getAddress();
    const supplyChain=new ethers.Contract(farmManagerAddress.address,farmManagerABI,provider.getSigner(0));
    const res= await supplyChain.updateFarmInfo(this.state.farmKey,this.state.userKey,this.state.animalCount,ethers.utils.formatBytes32String(this.state.farmHash),this.state.time);
    //const res2= await supplyChain.registerFarmInfo(this.state.farmKey,"senyet ben abdalah","senya kbira w mechrha","10.24587","15.12545","azzouz");

    /* const userInfo=supplyChain.getUserInfo(code);
     console.log(userInfo);*/
     
  }


  getFarmInfo=async()=>
  {
    
    let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const ethAddress = await provider.getSigner().getAddress();
    const supplyChain=new ethers.Contract(farmManagerAddress.address,farmManagerABI,provider.getSigner(0));
    const res= await supplyChain.getFarmInfo(this.state.farmKey);
    const res2= await supplyChain.getFarmCustomerInfo(this.state.farmKey);
    console.log(res2);
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
                      <MDBInput
                    label="Type the number of animals"
                    icon="address"
                    group
                    type="number"
                    validate
                    onChange={this.handleChange}
                    value={this.state.animalCount}
                    name="animalCount"
                  />
                      <MDBInput
                    label="Type the Farm Hash"
                    icon="address"
                    group
                    type="text"
                    validate
                    onChange={this.handleChange}
                    value={this.state.farmHash}
                    name="farmHash"
                  />
                </div>
                
                <div className="text-center">
                  <button className="btn btn-outline-primary" onClick={this.handleClick} >add Farm</button>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-primary" onClick={this.getFarmInfo} >get Farm Farm</button>
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>  
    
    
        </>);
      
    

  }
}
    

export default AddFarmer;