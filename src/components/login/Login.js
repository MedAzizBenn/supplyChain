import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import "./Login.css";
import {ethers} from 'ethers';
import profileManagerAddress from './../../contractsData/profileManagerAddress.json';
import farmManagerAddress from './../../contractsData/farmManagerAddress.json';
import profileManagerABI from './../../contractsData/ProfileManagerABI.json';
import farmManagerABI from './../../contractsData/FarmManagerABI.json';
import {injected} from './connectors';
import {useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Web3Modal from "web3modal";
import Farmer from './../farmer/Farmer';
import { Spinner } from 'react-bootstrap'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function Login({navigation,route})
{
  const { utils } = require('ethers');

  
  //const {active,account,library,connector,activate,deactivate}=useWeb3React()
  const [loading, setLoading] = useState(true)
  let [accountUser, setAccount] = useState()
  const [walletAddress,setWalletAddress]=useState("");
  const [profileManagerState, setProfileManager] = useState({})
  const [farmManager, setFarmManager] = useState({})
  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const signerUser="";
  let profileManager;

  let provider=ethers.getDefaultProvider('rinkeby');
  let private_key="a120199e44b8e0ef8cedf7700e8c51bdb725f1d511a78c37f29934361e2ad9cf";

  /*constructor()
  {
    super();
    handleClick = handleClick.bind(this);
    this.formErrors="";

  //  this.setState({errorMsg:""});

  }*/
   
  const metaMaskConnection=async ()=> {

        const accounts=await window.ethereum.request({
          method:"eth_requestAccounts",
        });
        console.log(utils.getAddress(accounts[0]));
        setAccount(utils.getAddress(accounts[0]));
        setCount(count+1);
        console.log("azeq",accountUser);
        let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
        const signer = provider.getSigner()
        window.ethereum.on('chainChanged', (chainId) => {
          window.location.reload();
        })
        window.ethereum.on('accountsChanged', async function (accounts) {
          setAccount(utils.getAddress(accounts[0]));
          
          await metaMaskConnection()
        })
        loadContracts(signer)

    
    handleClick();
  }

  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    profileManager = new ethers.Contract(profileManagerAddress.address, profileManagerABI, signer)
    setProfileManager(profileManager)
    console.log(profileManager);

    const farmManager = new ethers.Contract(farmManagerAddress.address, farmManagerABI, signer)
    setFarmManager(farmManager)
    setLoading(false)
  }

  async function connect() {
    
    /*console.log(walletAddress);
   let wallet=new ethers.Wallet(private_key,provider);
   */
   let adminProvider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
      loadContracts(adminProvider.getSigner());

   handleClick();


    }
  

  /*async function Login() {
    const authData = await fetch(`/api/authenticate?address=${account}`);
    const user = await authData.json();
    const provider = new ethers.providers.Web3Provider(connection );
    const signer = provider.getSigner();
    const signature = await signer.signMessage(user.nonce.toString());
    const response = await fetch(
      `/api/verify?address=${account}&signature=${signature}`
    );
    const data = await response.json();
    setLoggedIn(data.authenticated);
  }*/

  return (
    <>
    <div className="body">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
            <div className="grey-text">
            <p>please enter private key of your wallet</p>
              <MDBInput
                label="Type your private key"
                icon="lock"
                group
                type="password"
                validate
                onChange={handleChange }
                //value={value.value}
              />
             
            </div>
            {/*<div className="error">
            {this.error.errorMsg}
          </div>*/}
            <div className="text-center">
              <button className="btn btn-outline-primary" onClick={connect} >continue</button>
        <>
          <button className="btn btn-outline-primary" onClick={metaMaskConnection}>
            Login
          </button>
        </>
                </div>
           
        </MDBCol>
      </MDBRow>
    </MDBContainer>  
    </div>

    </>
    
  );
    
async function verifAdmin()
  {
    console.log(walletAddress);
    if(walletAddress)
    {
      const currentValue = await profileManager.isAdmin(walletAddress);
    
      console.log(walletAddress);
           return currentValue;
    }
    return false;
    
         
  }

async function verifUser()
  {    
         const currentValue = await profileManager.getUserInfo(accountUser);
                  if((currentValue[0]==1)||(currentValue[0]==2))
         {
           console.log(currentValue[0]);
            return true;
         }
         else
         {
           return false;
         }
  }

    async function handleChange(e) {
      setWalletAddress(e.target.value);
      
    }
    async function handleClick()
  {
        if(await verifAdmin()==true)
        {
          alert("is admin");
         // this.props.navigate(`../Admin`);
       //  await activate(injected);

       navigate('/app/Admin')
        }

         if(await verifUser()==true)
        {
          alert("is user");
         // this.props.navigate(`../Farmer`);
         window.localStorage.setItem("address",accountUser);

         navigate('/app/farmer')
         }
         else
         {
          alert("wrong code");
         }
      //  this.props.navigate(`/Consumer`);
  
  }
}

export default Login;

  
/*export default function(props) {
  const navigate = useNavigate();

  return <Login {...props} navigate={navigate} />;
}*/
