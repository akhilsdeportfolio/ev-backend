const Vehicles = require('../models/vehicles')
const express = require('express')
const router = express.Router();
const upload = require('../middlewares/upload')

router.get("", async (req, res)=>{
    const vehicles = await Vehicle.find().populate({path : "user_id", select: 'name'})
    return res.status(200).send(vehicles)
})

router.post("", upload.any('images') , async (req, res)=>{
    const filePaths = req.files.map(file => file.path)

    const vehicles = await Vehicles.create({
        name : req.body.name,
        price : req.body.price,
        key_specs : req.body.key_specs,
        images : filePaths,
        features : req.body.features,
        update : req.body.update
    })


    return res.status(201).send(vehicles)
})

module.exports = router