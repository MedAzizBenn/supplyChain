var SupplyChain = artifacts.require('SupplyChain');
var assert = require('assert');


contract('SupplyChain', function(accounts) {
    let supplyChain;

    var sku = 1
    var upc = 1
    const originFarmerID = accounts[1]
    const originFarmName = "senyet ben abdalah"
    const originFarmInformation = "farm kbira w mechrha"
    const originFarmLatitude = "36.816860"
    const originFarmLongitude = "10.082860"
    var productID = upc + sku
    const productNotes = "barcha bordgen"
    const productDate=12;
    const productPrice = web3.utils.toWei('1', "ether")
    var itemState = 0
    const distributorID = accounts[2]
    const retailerID = accounts[3]
    const consumerID = accounts[4]


console.log("<----------------ACCOUNTS----------------> ")
console.log("Contract Owner: accounts[0] ", accounts[0])
console.log("Farmer: accounts[1] ", accounts[1])
console.log("Distributor: accounts[2] ", accounts[2])
console.log("Retailer: accounts[3] ", accounts[3])
console.log("Consumer: accounts[4] ", accounts[4])

before(async()=>{
    supplyChain = await SupplyChain.deployed();

})

it("Testing smart contract transaction", async() => {


       await supplyChain.sellItemByFarmer(upc,productPrice,{from: originFarmerID});
    });


    it("verify product creation", async() => {

        await supplyChain.produceItemByFarmer(upc, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productNotes, productPrice,productDate ,{from:originFarmerID})
        const res = await supplyChain.fetchItem.call(upc)
        console.log(res);
       // assert(state==="Hello world");
    });


    it("verify transaction", async() => {

        const state=await supplyChain.showProductInfo(upc);
        console.log(state.toString());
       // assert(state==="Hello world");
    });



});

