const express = require('express');
const app = express();
app.use(express.json());
require('./connection/database');

const customerRouter = require("./router/customerRouter");
app.use (sustomerRouter);

app.listen(90);