const mongose = require("express");

mongoose.connect("mongodb://127.0.0.1:27017/firstdb",{
    useNewUrlParser  : true,
    useUnifiedTopology: true
})