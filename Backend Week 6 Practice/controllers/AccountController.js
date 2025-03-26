const AccountModel = require("../models/AccountModel");
const createAccountController = (req, res) => {
    const {name, accountType, accountNumber, phone, address, bankId} = req.body

    const account = new AccountModel({name, accountType, accountNumber, phone, address, bankId})

    account.save().then((account) =>{
        // res.json(account)
        if (account) {
            res.json({message: "Account created successfully"})
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


