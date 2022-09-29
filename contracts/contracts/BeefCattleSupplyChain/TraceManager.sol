// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './../Roles.sol';





contract TraceManager is Roles{




    struct Movement 
    {
        address srcFarm;
        address dstFarm;
        uint timeMoved;

    }
    
    struct Animal
    {
        
     mapping(uint=>Movement) movementMap;
     uint MovementCount;

    }

    uint animalCount;
    address admin;
    mapping(uint=>Animal) animalMap;

    function addMovementData(uint _animalId,address _srcFarm,address _dstFarm, uint _timeMoved) public 
    {
        Movement memory movement;
        movement.srcFarm=_srcFarm;
        movement.dstFarm=_dstFarm;
        movement.timeMoved=_timeMoved;
        uint count= animalMap[_animalId].MovementCount;
        animalMap[_animalId].movementMap[count]=movement;
        count++;
        animalMap[_animalId].MovementCount=count;

    }

    function getMovementCount(uint _animalId) public view returns(uint)
    //onlyadmin()
    {
        return animalMap[_animalId].MovementCount;
    }

    function getMovementData(uint _animalId,uint _index) public view returns (address srcFarm,
        address dstFarm,
        uint timeMoved)
        //onlyAdmin
    {
         Movement memory movement=animalMap[_animalId].movementMap[_index];
         return (movement.srcFarm,movement.dstFarm,movement.timeMoved);
    }

  

}