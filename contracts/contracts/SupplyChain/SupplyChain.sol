// SPDX-License-Identifier: MIT


pragma solidity >=0.4.22 <0.9.0;
import '../Processor.sol';
import '../Farmer.sol';
import '../Distributor.sol';
import './Meat.sol';

contract SupplyChain is Farmer,Distributor,Processor {
 uint  sku=1;
 uint  upc=1;

   address owner;

  mapping (uint => Txblocks) private itemsHistory;

   struct Txblocks {
    Farm origin; 
    Product productDetails; 
    uint FTP;
    uint PTD;
    uint DTR;
    uint RTC;

  }

  struct Product{
    uint    productID;              // Product ID potentially a combination of upc + sku
    string  productNotes;           // Product Notes
    uint256 productDate;            // Product Date
    uint    productPrice;           // Product Price
    State   state;              // Product State
    address distributorID;          // Distributor ID
    Meat.meat  meatType;           // type of the red meat
    address retailerID;             // address of the Retailer
    address consumerID;             // address of the Consumer 
  }

  struct Farm{
    address originFarmerID;     //address of the farmer
    string  originFarmName;     // Farmer Name
    string  originFarmInformation;  // Farmer Information
    string  originFarmLatitude;     // Farm Latitude
    string  originFarmLongitude;    // Farm Longitude
    string originFarmerName;        // farmer name
  }
  
  /*function verif(address account) pure private override(Farmer,Distributor,Processor) returns(bool)
  {
    return true;
  }*/
 
    //maps id with item
    mapping (uint => Item) items;

    State constant defaultState = State.ProduceByFarmer;

    //state of product
    enum State
    {
    ProduceByFarmer,
    ForSaleByFarmer,
    PurchasedByDistributor,
    ShippedByFarmer
    }
   

   function showProductInfo(uint _id) public view returns(State)
   {
       State item=items[_id].state;
       return item;
   }

   function helloworld() public pure returns(string memory)
   {
      string memory hw="hello world";
     return hw;
   }

    function fetchItem(uint _upc) public view returns
    (

    address originFarmerID,
    string memory  originFarmName,
    string memory originFarmInformation,
    string memory originFarmLatitude,
    string memory originFarmLongitude,
    string memory originFarmerName

    )
    {
    Farm memory farm = itemsHistory[_upc].origin;
    return
    (
      farm.originFarmerID,
      farm.originFarmName,
      farm.originFarmInformation,
      farm.originFarmLatitude,
      farm.originFarmLongitude,
     farm.originFarmerName   
    );
    
  }

 




    


    //product info
    struct Item  {
    uint    sku;    // Stock Keeping Unit (SKU)
    uint    upc;    //universal product code
    address ownerID;    // the current owner
    address originFarmerID;     //address of the farmer
    string  originFarmName;     // Farmer Name
    string  originFarmInformation;  // Farmer Information
    string  originFarmLatitude;     // Farm Latitude
    string  originFarmLongitude;    // Farm Longitude
    uint    productID;              // Product ID potentially a combination of upc + sku
    string  productNotes;           // Product Notes
    uint256 productDate;            // Product Date
    uint    productPrice;           // Product Price
    State   state;              // Product State
    address distributorID;          // Distributor ID
    Meat.meat  meatType;           // type of the red meat
    address retailerID;             // address of the Retailer
    address consumerID;             // address of the Consumer 
  }

    event ProduceByFarmer(uint id); 
    event ForSaleByFarmer(uint id); 
    event PurchasedByDistributor(uint id);
    event ShippedByFarmer(uint id);


    constructor() payable
    {
      owner=msg.sender;
    }

    function produceItemByFarmer(uint _upc, string memory _originFarmName, string memory _originFarmInformation, string memory _originFarmLatitude, string memory _originFarmLongitude, uint _productDate,string memory _originFarmerName) 

     public
    {
      Item memory item;
      item.upc=_upc;
      item.ownerID=msg.sender;
      item.originFarmerID=msg.sender;
      item.originFarmName=_originFarmName;
      item.originFarmInformation=_originFarmInformation;
      item.originFarmLatitude=_originFarmLatitude;
      item.originFarmLongitude=_originFarmLongitude;
      item.productID=_upc+sku;
      item.productDate=_productDate;
      item.state=defaultState;
      items[_upc]=item;

      sku = sku + 1;
       Txblocks memory history;
     history.origin.originFarmerID=msg.sender;
     history.origin.originFarmInformation=_originFarmInformation;
     history.origin.originFarmLatitude=_originFarmLatitude;
     history.origin.originFarmLongitude=_originFarmLongitude;
     history.origin.originFarmName=_originFarmName;
     history.origin.originFarmerName=_originFarmerName;
      emit ProduceByFarmer(_upc);
  
    }

      function purchaseItemByDistributor(uint _upc) public payable
    
    forSaleByFarmer(_upc)
    paidEnough(items[_upc].productPrice)
   {
    address payable ownerAddressPayable = payable(items[_upc].originFarmerID); // make originFarmID payable
    ownerAddressPayable.transfer(items[_upc].productPrice); // transfer funds from distributor to farmer
    items[_upc].ownerID = msg.sender; 
    items[_upc].distributorID = msg.sender; // update distributor
    items[_upc].state = State.PurchasedByDistributor; // update state
    emit PurchasedByDistributor(_upc);

  }

    function shippedItemByFarmer(uint _upc) public 
  
    purchasedByDistributor(_upc)
    {
    items[_upc].state = State.ShippedByFarmer; 
    emit ShippedByFarmer(_upc);
  }

   modifier forSaleByFarmer(uint _upc)
        {
          require(items[_upc].state==State.ForSaleByFarmer);
          _;
        } 

  modifier purchasedByDistributor(uint _upc) {
    require(items[_upc].state == State.PurchasedByDistributor);
    _;
  }

    modifier paidEnough(uint _price)
    {
      require(msg.value>=_price);
      _;
    }
      function sellItemByFarmer(uint _upc, uint _price) public
    {
      items[_upc].state= State.ForSaleByFarmer;
      items[_upc].productPrice = _price;
      emit ForSaleByFarmer(_upc);
    }
    }