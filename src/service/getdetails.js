const BlockTracker = require("../models/BlockTracker.js");
const TransactionDetails = require("../models/TransactionDetails.js");


 async function  getTransactionDetailsFromDatabse(userAddress)  {
     try{
        const transdetails = await TransactionDetails.find( { $or: [ { from: userAddress }, { to: userAddress } ] } );
        console.log("de",transdetails);
        return transdetails;

     }
     catch(error){
         console.log(error);

     }
    

  }
 

  module.exports. getTransactionDetailsFromDatabse =  getTransactionDetailsFromDatabse;