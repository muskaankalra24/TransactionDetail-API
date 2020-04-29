const mongoose = require('mongoose');

const TransactionDetails = mongoose.Schema({
    from: String,
    to: String,
    BlockNumber: Number,
    Blockhash: String
}, {
    timestamps: true
});

module.exports = mongoose.model('TransactionDetails', TransactionDetails);