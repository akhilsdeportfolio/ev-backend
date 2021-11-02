const connect = require('./config/db')
// const express = require('express')
const app = require('./index')
// app.use(express.json())

app.listen(3000, async function (){
    await connect();
console.log("listening on port 3000");
});
