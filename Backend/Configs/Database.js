const mongoose = require('mongoose');

require('dotenv').config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>console.log("DB connection error: " + err));
}

module.exports = dbconnect;