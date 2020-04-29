const mongoose = require('mongoose');

const BlockTracker = mongoose.Schema({
    Blocknumber: Number,
    TransactionsinBlock: Array
    
}, {
    timestamps: true
});



module.exports = mongoose.model('BlockTracker', BlockTracker);