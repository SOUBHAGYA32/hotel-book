import mongoose from "mongoose";
require('dotenv').config()


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
var connection = mongoose.connection;

connection.on('error', ()=>{
    console.log("Connection Failed!..");
})
connection.on('connected', ()=>{
    console.log("Connection Successful..");
})

module.exports = mongoose