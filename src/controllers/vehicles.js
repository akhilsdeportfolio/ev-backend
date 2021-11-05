const vehicle = require('../models/vehicles')
const express = require('express')
const router = express.Router();
const upload = require('../middlewares/upload')
// const users = require('../models/users')
// const fs = require('fs')

router.get("", async (req, res)=>{
    const news = await News.find().populate({path : "user_id", select: 'name'})
    return res.status(200).send(news)
})

router.post("", upload.any('images') , async (req, res)=>{
    const filePaths = req.files.map(file => file.path)

    const vehicle = await vehicle.create({
        title : req.body.title,
        text : req.body.text,
        tags : req.body.tags,
        images : filePaths,
        user_id : req.body.user_id
    })


    return res.status(201).send(news)
})

module.exports = router