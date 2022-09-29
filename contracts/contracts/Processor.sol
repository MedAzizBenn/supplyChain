// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './Roles.sol';

contract Processor is Roles{

  Roles.RoleData private processors;

  event ProcessorAdded(address indexed account);

  constructor()
  {
    processors.adminRole="PROCESSOR_ROLE";
    _addProcessor(msg.sender);
  }

  modifier onlyProcessor()
  {
    require(isProcessor(msg.sender),"error");
    _;
  }

  function addProcessor(address account) public 
  onlyProcessor() 
  {
    _addProcessor(account);
  }

    function _addProcessor(address account) internal {
      require(account != address(0));
      require(!isProcessor(account),"fuck off");
    processors.members[account]=true;
    emit ProcessorAdded(account);(account);

  }


  function isProcessor(address account) view private returns(bool)
  {
    return processors.members[account];
  }
}