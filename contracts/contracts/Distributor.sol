// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './Roles.sol';

contract Distributor is Roles{

  Roles.RoleData private distributors;

  event DistributorAdded(address indexed account);

  constructor()
  {
    distributors.adminRole="Distributor_ROLE";
    _addDistributor(msg.sender);
  }

  modifier onlyDistributor()
  {
    require(isDistributor(msg.sender),"error");
    _;
  }

  function addDistributor(address account) public 
  onlyDistributor() 
  {
    _addDistributor(account);
  }

    function _addDistributor(address account) internal {
      require(account != address(0));
      require(!isDistributor(account),"fuck off");
    distributors.members[account]=true;
    emit DistributorAdded(account);

  }


  function isDistributor(address account)  view private returns(bool)
  {
    return distributors.members[account];
  }
}