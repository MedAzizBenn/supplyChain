// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './../Roles.sol';
import './ProfileManager.sol';


contract FarmManager is Roles{

    uint farmCount;
    uint globalAnimalCount;

    ProfileManager PM;

    struct FarmData
    {
    address ownerId;
    uint animalCount;
    bytes32 farmHash;
    uint timestamp;
    Farm farmInfo;
    }

     struct Farm{
    string  originFarmName;     // Farmer Name
    string  originFarmInformation;  // Farmer Information
    string  originFarmLatitude;     // Farm Latitude
    string  originFarmLongitude;    // Farm Longitude
    string originFarmerName;        // farmer name
  }
  
    struct AnimalData
    {
        address currentFarm;
        bytes32 animalHash;
        uint timestamp;
    }

    mapping(address=>FarmData) farmMap;
    mapping(bytes6=>AnimalData) animalMap;

    constructor()
    {
        addAdmin(msg.sender);
    }


    function registerFarm(address _farmId,address _ownerId) public 
    onlyAdmin() 
   // farmExists()
    {
        FarmData memory farm;
        farm.ownerId=_ownerId;
        farmMap[_farmId]=farm;
      /*  farm.animalCount=_animalCount;
        farm.farmHash=_farmHash;
        farm.timestamp=_timestamp;
        farmMap[_farmId]=farm;  */
  }


  

  function registerFarmInfo(address _farmId,string memory _originFarmName,string memory _originFarmInfo,string memory _originFarmLat,string memory _originFarmLong,string memory _originFarmerName) public
  {
      farmMap[_farmId].farmInfo.originFarmerName=_originFarmerName;
      farmMap[_farmId].farmInfo.originFarmInformation=_originFarmInfo;
      farmMap[_farmId].farmInfo.originFarmLatitude=_originFarmLat;
      farmMap[_farmId].farmInfo.originFarmLongitude=_originFarmLong;
      farmMap[_farmId].farmInfo.originFarmName=_originFarmName; 
  }

  function getFarmCustomerInfo(address _farmId) public view returns(Farm memory)
  {
      Farm memory farm= farmMap[_farmId].farmInfo;
      return farm;
  }

 
   function getFarmInfo(address _farmId) view public onlyFarmer() checkFarmerAccess() returns(address ownerId,uint animalCount,bytes32 farmHash,uint timestamp) 
    {
        FarmData memory farmData=farmMap[_farmId];
        return(farmData.ownerId,farmData.animalCount,farmData.farmHash,farmData.timestamp);
    }


    function updateFarmInfo(address _farmId,address _ownerId,uint _animalCount,bytes32 _farmHash,uint _timestamp) public onlyFarmer() checkFarmerAccess() returns(address ownerId,uint animalCount,bytes32 farmHash,uint timestamp)
    {
        farmMap[_farmId].ownerId=_ownerId;
        farmMap[_farmId].animalCount=_animalCount;
        farmMap[_farmId].farmHash=_farmHash;
        farmMap[_farmId].timestamp=_timestamp;
        FarmData memory farmData=farmMap[_farmId];
        return(farmData.ownerId,farmData.animalCount,farmData.farmHash,farmData.timestamp);
    }

    function checkOwnership( address _ownerId,address _farmId) view public returns(bool)
    {
        FarmData memory farmData=farmMap[_farmId];
        return farmData.ownerId==_ownerId;
    }

    function farmExists(address _farmId) view public returns(bool)
    {
         if(farmMap[_farmId].ownerId!=address(0x0))
         return true;
         else 
         return false;
    }

    function registerAnimal(bytes6 _animalId,address _currentFarm,bytes32 _animalHash, uint _timestamp) public
    {
        if(animalMap[_animalId].animalHash>0)
        {
            updateAnimal(_animalId,_currentFarm,_animalHash,_timestamp);
        }
        else
        {

        AnimalData memory animal;
        animal.currentFarm=_currentFarm;
        animal.animalHash=_animalHash;
        animal.timestamp=_timestamp;
        animalMap[_animalId]=animal;
        }
       
    }

    function updateAnimal(bytes6 _animalId,address _currentFarm,bytes32 _animalHash, uint _timestamp) public
    {
        AnimalData memory animal=animalMap[_animalId];
        animal.currentFarm=_currentFarm;
        animal.animalHash=_animalHash;
        animal.timestamp=_timestamp;
        animalMap[_animalId]=animal;

    }

    function getAnimalHash(bytes6 _animalId) view public returns(bytes32){
        AnimalData memory animal=animalMap[_animalId];
        return animal.animalHash;

    }

    function animalExists(bytes6 animalId) view public returns(bool)
    {
        if(animalMap[animalId].animalHash>0)
        return true;
        else return false;
    }


    function setProfileManager() public
    onlyAdmin()
    {
        PM=new ProfileManager();
    }


    modifier onlyFarmer()
    {
        //require(msg.sender==PM.userMap[]);
        _;
    }


    modifier checkFarmerAccess()
    {
        //require(msg.sender==PM.userMap[]);
        _;
    }
    

    



}
