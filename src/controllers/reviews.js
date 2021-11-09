const Reviews = require('../models/reviews')
const express = require('express')
const router = express.Router();
const vehicles = require('../models/users')

router.get("", async (req, res)=>{
    const reviews = await Reviews.find().populate({path : "vehicles", select: 'name'})
    return res.status(200).send(reviews)
})

module.exports = router