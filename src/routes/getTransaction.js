var express = require('express');
var router = express.Router();
const  {getTransactionDetailsFromDatabse} = require("../service/getdetails.js");


  router.get(
    "/get-TransactionDetails/:userAddress",
    async (req, res) => {
      try {
        const response = await getTransactionDetailsFromDatabse(req.params.userAddress);
        return res.status(200).send(response);
      } catch (err) {
        console.log(err);
        return res.status(500).send(err);
      }
    }
  );


module.exports = router;
