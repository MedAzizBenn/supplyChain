// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './Roles.sol';

contract Farmer is Roles{

  Roles.RoleData private farmers;

  event FarmerAdded(address indexed account);

  constructor()
  {
    farmers.adminRole="FARMER_ROLE";
    _addFarmer(msg.sender);
  }

  modifier onlyFarmer()
  {
    require(isFarmer(msg.sender),"error");
    _;
  }

  function addFarmer(address account) public 
  onlyFarmer() 
  {
    _addFarmer(account);
  }

    function _addFarmer(address account) internal {
      require(account != address(0));
      require(!isFarmer(account),"fuck off");
    farmers.members[account]=true;
    emit FarmerAdded(account);

  }


  function isFarmer(address account) view private returns(bool)
  {
    return farmers.members[account];
  }
}