import React,{ useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import {ethers} from 'ethers';
import profileManagerABI from './../../../../contractsData/ProfileManagerABI.json';
import profileManagerAddress from './../../../../contractsData/profileManagerAddress.json';
import Select from 'react-select'

class AddFarmer extends React.Component {
     state={
        key:'',
        access:0
      };
    // data="0xE61092Fc19A7f55E1fbdBFe7d2ecD6160BA61F2D";

 
    
       options = [
        {id:1, value: 'Manager', label: 'Manager' },
        {id:2, value: 'Viewer', label: 'Viewer' },
        {id:0, value: 'restricted', label: 'Restricted' }
      ]

      constructor(props)
      {
        super();
        this.handleClick = this.handleClick.bind(this);

      }

      handleKeyChange=(e)=> {
        this.setState({key:e.target.value});

      }
      handleAccessChange=(e)=> {
        this.setState({ access:e });

      }

      handleClick=async()=>
  {

    const code=this.state.key;
    console.log(this.state.access.id);

    const access=parseInt(this.state.access.id);
    

    let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const ethAddress = await provider.getSigner().getAddress();
    console.log(this.data);
    const supplyChain=new ethers.Contract(profileManagerAddress.address,profileManagerABI,provider.getSigner(0));
    const res= await supplyChain.registerUser(code,access);
    console.log(res);
    /* const userInfo=supplyChain.getUserInfo(code);
     console.log(userInfo);*/
     
  }
  handleUserClick=async()=>
  {
    let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const signer=provider.getSigner();
    const ethAddress = await signer.getAddress();
    console.log(this.state.key);
    const supplyChain=new ethers.Contract(profileManagerAddress.address,profileManagerABI,provider.getSigner());
    const userInfo =await supplyChain.getUserInfo(this.state.key);
    console.log(userInfo);

  }
  render()
  {
    const { access } = this.state;
    return (<>
        <MDBContainer>
          <MDBRow>
          <p>please enter the user informations </p>
    
            <MDBCol md="6">
                <div className="grey-text">
                  <MDBInput
                    label="Type the user private key"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={this.handleKeyChange}
                    value={this.state.key}
                    name="key"
                  />
                 
                </div>
                {/*<div className="error">
                {this.error.errorMsg}
              </div>*/}
              <Select  onChange={this.handleAccessChange}  value={access} options={this.options} />
            
                <div className="text-center">
                  <button className="btn btn-outline-primary" onClick={this.handleClick} >add User</button>
                </div>

                <div className="text-center">
                  <button className="btn btn-outline-primary" onClick={this.handleUserClick} >View User Info</button>
                </div>
               
            </MDBCol>
          </MDBRow>
        </MDBContainer>  
    
    
        </>);
      
    

  }
}
    

export default AddFarmer;