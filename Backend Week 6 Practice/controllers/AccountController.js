const AccountModel = require("../models/AccountModel");
const createAccountController = (req, res) => {
    const {name, accountType, accountNumber, phone, address, bankId} = req.body

    const account = new AccountModel({name, accountType, accountNumber, phone, address, bankId})

    account.save().then((account) =>{
        // res.json(account)
        if (account) {
            res.json({message: "Account created successfully", account})
        } else {
            res.json("Failed to create account")
        }
    })
    .catch((err) => console.log(err))
};

const retrieveAccountDetails = (req, res) => {
    AccountModel.find()
    .populate("bankId", "name phone -_id")
    .then((account) =>{
        if (account) {
            res.json(account);

        } else {
            res.json("Account not found");
        }
    })
    .catch((err) => console.log(err))
}
module.exports = ({createAccountController, retrieveAccountDetails})


// {
// "name": "Calbank",
// "accountType": "Savings",
// "accountNumber": "P.O. Box 567",
// "phone": "020958697",
// "address": "Cantoments",
// "bankId": "67e2ca843401a0cf33b82967"
// }