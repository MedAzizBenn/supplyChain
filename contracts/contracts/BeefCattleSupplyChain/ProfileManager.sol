// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './../Roles.sol';


contract ProfileManager is Roles{

    //admin address
    address admin;

    //access level
    enum AccessLevel 
    {
        restricted,
        Manager,
        Viewer
        
    }
    //number of registred users
    uint userCount;


    //userInfo
    struct User{
        uint timeAdded;
        AccessLevel accessLevel;
    }

    //all users
    mapping(address=>User) userMap;


    constructor()
    {  
        addAdmin(msg.sender);

    }

    //register a user

    function registerUser(address _userId,uint _accessLevel) external 
     onlyAdmin
    {
        _registerUser(_userId, _accessLevel);
    }

    function _registerUser(address _userId,uint _accessLevel) internal
    {
        User memory user;
        user.timeAdded=block.timestamp;
        if(_accessLevel==0)
        {
            user.accessLevel=AccessLevel.restricted;
        }
        else if(_accessLevel==1)
        {
            user.accessLevel=AccessLevel.Manager;
        }
           else if(_accessLevel==2)
        {
            user.accessLevel=AccessLevel.Viewer;

        }

         userMap[_userId]=user;
        
    }

    function changeAdminRole(address account) external
    onlyAdmin
    {  
        changeAdmin(account);
    }

    function getUserInfo(address _userId) public view returns(AccessLevel,uint)
    {
        User memory user=userMap[_userId];
        return (user.accessLevel,user.timeAdded);
    }


    function checkAccessLevel(address _userId) public view returns(AccessLevel)
    {
        return userMap[_userId].accessLevel;
    }

    function checkAdminAccess() public view returns(bool)
    {
        return msg.sender==admin;
    }


    function updateUser(address _account,AccessLevel _newPermission) external
    onlyAdmin
    {
        userMap[_account].accessLevel=_newPermission;
    }


  modifier userExists() {
    require(isAdmin(msg.sender), "Restricted to admins.");
      _;
  }


}