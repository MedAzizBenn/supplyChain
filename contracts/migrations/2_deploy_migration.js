
var FarmManager = artifacts.require("./FarmManager.sol");
var ProfileManager = artifacts.require("./ProfileManager.sol");
var TraceManager = artifacts.require("./TraceManager.sol");
var TransactionManager = artifacts.require("./TransactionManager.sol");
/*var Customer = artifacts.require("./Customer.sol");
var Customer = artifacts.require("./Customer.sol");
var Customer = artifacts.require("./Customer.sol");*/


module.exports = function (deployer) {
  deployer.deploy(FarmManager);
    deployer.deploy(ProfileManager);
    deployer.deploy(TraceManager);
    deployer.deploy(TransactionManager);


  };