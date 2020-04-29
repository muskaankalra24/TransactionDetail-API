const Web3 = require ("web3");
const BlockTracker = require("../models/BlockTracker.js");
const TransactionDetails = require("../models/TransactionDetails.js");
const web3Config = require("../config/config.js");

//const Contact = mongoose.model('Contact', ContactSchema);

const web3 = new Web3(web3Config.rpcURL);


async function getlatestblock(){
     try{
        const latestBlock = await web3.eth.getBlockNumber();
        console.log("blocknumber",latestBlock);
        const Block = await web3.eth.getBlock(latestBlock)
        console.log("block",Block.transactions);
        var Blockdetail = new BlockTracker({ 
            Blocknumber: latestBlock,
            TransactionsinBlock: Block.transactions

    });
    Blockdetail.save(function(error) { 
                console.log("Blockdetail saved");
             if (error) {
                console.error(error);
               }
             });
       return Block.transactions ;
      
        
        
 }
     catch(error){
         console.log(error);
     }
    
   }

// async function getBlock(num){
//     try{

//        const Block = await web3.eth.getBlock(num)
//        console.log("block",Block.transactions);
//        return Block.transactions
       
// }
//     catch(error){
//         console.log(error);
//     }
// }


async function getTransactionDetails(x){
    try{

       const getDetails = await web3.eth.getTransaction(x);
       console.log("details",getDetails);
       var TransactionDetail = new TransactionDetails({ 
        from: getDetails.from,
    to: getDetails.to,
    BlockNumber: getDetails.blockNumber,
    Blockhash: getDetails. blockHash
});

TransactionDetail .save(function(error) { 
    console.log("Transactiondetails saved");
 if (error) {
    console.error(error);
   }
 });
    }
    catch(error){
        console.log(error);
    }
}



 module.exports.getlatestblock = getlatestblock;
 module.exports.getTransactionDetails = getTransactionDetails;



                        
       