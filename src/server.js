const connect = require('./config/db')
const express = require('express')
const app = express()
app.use(express.json())



app.listen(2200, async function  (){
    await connect();
console.log("listening on port 3000");
});
