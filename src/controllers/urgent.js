const Urgent = require('../models/urgent')
const express = require('express')
const router = express.Router();
// const news = require('../models/news');


router.get("", async (req, res)=>{
    const urgent = await Urgent.find()
    return res.status(200).send(urgent)
})

router.post("", async (req, res)=>{
    const urgent = await Urgent.create({
        name : req.body.name,
        email :req.body.email,
        phone :req.body.phone,
        problem :req.body.problem,
    })
    return res.status(201).send(urgent)
})

module.exports = router