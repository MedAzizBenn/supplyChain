// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./../node_modules/@openzeppelin/contracts/access/AccessControl.sol";

contract Roles is AccessControl{
    
   // bytes32 public constant DEFAULT_ADMIN_ROLE = keccak256("ADMIN");
    bytes32 public constant FARMER_ROLE = keccak256("FARMER");
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR");

 constructor () {
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender); 
  }

    function giveAccessForFarmer(address account) public onlyAdmin()
    {
        grantRole(FARMER_ROLE, account);
    }

      function giveAccessForDistributor(address account) public onlyAdmin()
    {
        grantRole(DISTRIBUTOR_ROLE, account);
    }


  function isAdmin(address account) public virtual view returns(bool)
  {
    return hasRole(DEFAULT_ADMIN_ROLE, account);
  }

  modifier onlyAdmin() {
    require(isAdmin(msg.sender), "Restricted to admins.");
      _;
  }

  function addAdmin(address account) public virtual onlyAdmin
  {
    grantRole(DEFAULT_ADMIN_ROLE, account);
  }
  function changeAdmin(address account) public virtual onlyAdmin
  {
      grantRole(DEFAULT_ADMIN_ROLE, account);


  }
}