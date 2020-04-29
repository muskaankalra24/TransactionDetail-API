const express = require('express');
const bodyParser = require('body-parser');
const cron = require("node-cron");
const {getlatestblock , getTransactionDetails} = require("./service/web3.js");
//const { getTransactionDetailsFromDatabse} = require("./service/getdetails.js");
const  getTransactionDetailRoute= require("./routes/getTransaction.js")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.dburl, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({"message": "server has started"});
});

//getTransactionDetailsFromDatabse("0xFe41Cb708CD98C5B20423433309E55b53F79134a");

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});


cron.schedule("* 1 * * *", function() {
    console.log("Running Cron Job");
(async () => {
    const TransactionsinBlock=  await getlatestblock();
    TransactionsinBlock.forEach(getTransactionDetails);
    //console.log("njn",getTransactionDetails);
    
})()

})

//app.use( getTransactionDetailRoute);








