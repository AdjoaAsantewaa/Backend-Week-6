const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const bankRoutes = require("./routes/BankRoute");
const accountRoute = require("./routes/AccountRoute")

// defining express
const server = express();

// middleware
server.use(bodyParser.json());
PORT = 7001;

// routes
server.use(bankRoutes);
server.use(accountRoute);

// connect server to mongoDB
mongoose.connect(
  "mongodb+srv://adjoaakoranteng:1NaRtnX1jR3APptW@cluster0.vkp9e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then((result)  =>{
    server.listen(PORT, () => console.log(`listening on port ${PORT}`));
})


