const express = require('express');
const router = new express.Router();
const customer = require("./model/customerModel");

router.post('/customer/insert',(req,res)=>{
    const email = req.body.email;
    customer.findOne({email:email})
    .then((cust_data)=>{
        if(cust_data!=null){
            res.json({msg:"Email already exist"});
            return;
        }
        else{

        }
    })
    .catch()


    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const address = req.body.address;
    const age = req.body.age;
    const date = req.body.date;
    const password = req.body.password;

    
const data = new customer({
    firstname:firstname,
    lastname :lastname,
    address :address,
    age: age,
    date: date,
    password: password,
});
data.save();

})

module.exports = router;








