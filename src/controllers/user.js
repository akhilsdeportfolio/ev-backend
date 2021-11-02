const User = require('../models/user')
const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')

//Create token on signup and login
function newToken(user){
    return jwt.sign({user}, 'ev')
}

//User signup
router.post('/signup', async (req, res)=>{

    let user;
    try{
        //Check if user already registered
        user = await User.findOne({email:req.body.email})
        if(user) return res.status(400).send({message: "User already registered"})

        //if user not registered then create account
        user = await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
        })

        const token = newToken(user)
        return res.status(201).send({user, token})


    } catch(err){
        res.status(400).send({message: "Please check details"})
    }
})

//User login
router.post('/login', async(res, req)=>{

    try{
        //Check user registered or not using email
        let user = await User.findOne({email: req.body.email})
       if(! user) return res.status(400).send({message: "Enter correct details"})

       //match password
       let match = user.checkPassword(req.body.password)
       if (! match) return res.send({message: "Enter correct details"})

       const token = newToken(user)
       return res.status(200).send({user, token})

   } catch(err){
       return res.status(400).send({message: "Please check details"})
   }

})
