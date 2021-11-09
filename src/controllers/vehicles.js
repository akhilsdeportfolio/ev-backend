const Vehicle = require('../models/vehicles')
const express = require('express')
const router = express.Router();
const upload = require('../middlewares/upload')
// const users = require('../models/users')
// const fs = require('fs')

router.get("", async (req, res)=>{
    const vehicle = await Vehicle.find().populate({path : "user_id", select: 'name'})
    return res.status(200).send(vehicle)
})

router.post("", upload.any('images') , async (req, res)=>{
    const filePaths = req.files.map(file => file.path)

    const vehicle = await Vehicle.create({
        title : req.body.title,
        price : req.body.price,
        key_specs : req.body.key_specs,
        images : filePaths,
        features : req.body.features,
        update : req.body.update

    })


    return res.status(201).send(vehicle)
})

module.exports = router