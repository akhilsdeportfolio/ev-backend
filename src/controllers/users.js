const User = require('../models/users')
const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')

//Create token on signup and login
// function newToken(user){
//     return jwt.sign({user}, 'ev')
// }

router.post('', async (req, res)=>{
    const user = await User.create(req.body)
    return res.status(200).send(user)
    
})


//Get all users
router.get('', async (req, res)=>{
    const user = await User.find()
    return res.status(200).send(user)
})

module.exports = router
