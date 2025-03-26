const BankModel = require("../models/bank");

const createBankDetails = async (req, res) => {
    // getting information from request body
    const {name, location, address, phone, accountNumber} = req.body
    try {
        const bank = new BankModel ({
            name,
            location,
            address,
            phone,
            accountNumber,
        });
        await bank.save()
        res.status(201).json(bank)
    } catch(error){
        res.status(500).json({error: error.message})
    }
};

const retrieveBankDetails = (req, res) => {
    let {id} = req.params
    if (id){
        BankModel.findById(id).then((bank) =>{
            res.status(200).json(bank);
        }).catch((err) => console.log({message:err}))
    } else {
        BankModel.find().then((bank) => {
            res.status(201).json(bank);
    
        }).catch((err) => console.log({message:err}))
    }
       
}
module.exports = { createBankDetails, retrieveBankDetails};
