const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    accountNumber:{
        type: Number,
        required: true,
    }
});

const BankModel = mongoose.model("Bank", BankSchema);

module.exports = BankModel;