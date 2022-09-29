
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './Roles.sol';

contract Customer is Roles{

  Roles.RoleData private consumers;

  event ConsumerAdded(address indexed account);

  constructor()
  {
    consumers.adminRole="CONSUMERS_ROLE";
    _addConsumer(msg.sender);
  }

  modifier onlyConsumer()
  {
    require(isCustomer(msg.sender),"error");
    _;
  }

  function addConsumer(address account) public 
  onlyConsumer() 
  {
    _addConsumer(account);
  }

    function _addConsumer(address account) internal {
      require(account != address(0));
      require(!isCustomer(account));
    consumers.members[account]=true;
    emit ConsumerAdded(account);

  }


  function isCustomer(address account) view internal returns(bool)
  {
    return consumers.members[account];
  }
}