// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './Roles.sol';

contract Retailer is Roles{

  Roles.RoleData private retailers;

  event RetailerAdded(address indexed account);

  constructor()
  {
    retailers.adminRole="Retailer_ROLE";
    _addRetailer(msg.sender);
  }

  modifier onlyRetailer()
  {
    require(verif(msg.sender),"error");
    _;
  }

  function addRetailer(address account) public 
  onlyRetailer() 
  {
    _addRetailer(account);
  }

    function _addRetailer(address account) internal {
      require(account != address(0));
      require(!verif(account),"fuck off");
    retailers.members[account]=true;
    emit RetailerAdded(account);

  }


  function verif(address account) view internal returns(bool)
  {
    return retailers.members[account];
  }
}