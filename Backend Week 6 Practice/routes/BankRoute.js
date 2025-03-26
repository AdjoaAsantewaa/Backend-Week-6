const express = require('express'); 
const { createBankDetails, retrieveBankDetails } = require('../controllers/BankController');
const router = express.Router();

router.post("/bank", createBankDetails);
router.get("/bank/:id?", retrieveBankDetails);
module.exports = router;

