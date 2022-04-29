const mongoose = require('mongoose');
const customer = new mongoose.Schema({
    firstname:{
        type:String,
        required: true 
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require:true
    },
})
module.exports = mongoose.model('customer','customer')