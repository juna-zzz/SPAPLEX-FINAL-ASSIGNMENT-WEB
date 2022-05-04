const mongoose = require("mongoose");


const customer = new mongoose.Schema({
    firstname: {
        type: String,
        required: false
    },
    lastname :{
        type : String,
        required: false
    },
    phone:{
        type : String,
        required: false
    },
    email: {
        type : String,
        required: true
       
    },
    age : {
        type : String
    },
    date : {
        type : Date
    },
    gender : {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },

})
module.exports = mongoose.model("Customer",customer);