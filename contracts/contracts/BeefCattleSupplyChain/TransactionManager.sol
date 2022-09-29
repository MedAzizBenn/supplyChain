// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './../Roles.sol';
import './ProfileManager.sol';
import './FarmManager.sol';
import './TraceManager.sol';




contract TransactionManager is Roles{

    uint transactionCount;
    address admin;
    ProfileManager PM;
    FarmManager FM;
    TraceManager TM;
    
    struct Transaction {

      address srcFarm;
      address dstFarm;
      address srcOwner;
      address dstOwner;
      Status orderStatus;
      uint animalCount;
      mapping (uint=>uint) animalMap;
      uint timeUpdated;
    }

    mapping(uint=>Transaction) transactionMap;

    enum Status {
        proposed,
        confirmed,
        canceled
    }

   function createTransaction(uint _transactionId,address _srcFarm,
      address _dstFarm,
      address _srcOwner,
      address _dstOwner,
      uint _animalCount,
      uint _timeUpdated,
      uint48[] calldata _animalList) public
  //  onlyFarmer()
    {
        transactionMap[_transactionId].srcFarm=_srcFarm;
        transactionMap[_transactionId].dstFarm=_dstFarm;
        transactionMap[_transactionId].dstOwner=_dstOwner;
        transactionMap[_transactionId].srcOwner=_srcOwner;
        transactionMap[_transactionId].animalCount=_animalCount;
        transactionMap[_transactionId].timeUpdated=_timeUpdated;
        transactionMap[_transactionId].orderStatus=Status.proposed;
      //  transactionMap[_transactionId].animalMap[]=_srcFarm;
    //    transactionMap[transactionId]=transaction;
      for(uint i=0;i<_animalCount;i++)
      {    
        transactionMap[_transactionId].animalMap[i]=_animalList[i]; 
         TM.addMovementData(_animalList[i], _srcFarm, _dstFarm, _timeUpdated);
      }

    }

    function updateTransaction(uint _transactionId) public {
       transactionMap[_transactionId].orderStatus=Status.confirmed;

    }

  /*  function getTransactionInfo(uint _transactionId)public returns()
    {
        returns transactionMap[transactionId]
    }*/

    function getTransactionCount()public view returns(uint)
    {
        return transactionCount;

    }

    function getAnimalList(uint _transactionId)public 
    {

    }

    function setManager(address _managerAddress,uint _managerType) public
    {
      if(_managerType==0)
      {
         PM=ProfileManager(_managerAddress);
      }
      else if(_managerType==1)
      {
        FM=FarmManager(_managerAddress);
      }
      else if(_managerType==2)
      {
        TM=TraceManager(_managerAddress);
      }
    }

    function getManager(uint _managerType) public view returns(address)
    {
      /* if(_managerType==0)
      {
         return PM;
      }
      else if(_managerType==1)
      {
        return FM;
      }
      else if(_managerType==2)
      {
        return TM.address;
      }
      else {
        return '0x0';
      }*/
    }
  

}
