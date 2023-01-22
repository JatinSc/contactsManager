const mongoose = require("mongoose");
require('dotenv').config()
const url = process.env.MongoURL;
const connectDB=()=>{
    mongoose.set("strictQuery",false);
    mongoose.connect(url).then((res)=>{
            console.log("Connected to DB")
    });
}

module.exports = connectDB