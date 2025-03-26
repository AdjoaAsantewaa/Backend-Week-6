const BankModel = require("../models/BankModel");

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
      
};



const updateBankDetails = (req, res) => {
    // get data from the request body to be updated
    const {name, location, address, phone, accountNumber} = req.body
    try{
        BankModel.findById(id).then((bank) => {
            if (bank) {
                bank.name = name;
                bank.location = location;
                bank.address = address;
                bank.phone = phone;
                bank.acountNumber = accountNumber;

                bank.save()
                res.json(bank);
            } else {
                res.json("bank not found")
            }
        }) 
    } catch (error) {
        res.json({message: error.nessage})
    }
};

const deleteBankDetails = async (req, res) => {
    try {
        const deletebankId = await BankModel.findByIdAndDelete(req.params.id)

        if(deletebankId) {
            AccountModel.deleteMany({bankId: deletebankId._id})
            .then((deleteBank) => {
                res.status(201).json({message:"Bank removed", deletebankId})
            })
            .catch((err) => console.log(err));
        } else{
            res.status(501).json("bank not found")
        }
    } catch(error) {
        res.status(500).json({error: error.message})

    }
}
module.exports = { createBankDetails, retrieveBankDetails, updateBankDetails, deleteBankDetails};
