const Vehicle = require('../models/vehicles')
const Reviews = require('../models/reviews')
const Gallery = require('../models/gallery')

const express = require('express')
const router = express.Router();
const upload = require('../middlewares/upload')

router.get("", async (req, res)=>{
    const vehicles = await Vehicle.find()
    return res.status(200).send(vehicles)
})

router.post("", upload.any('images') , async (req, res)=>{
    const filePaths = req.files.map(file => file.path)

    const vehicles = await Vehicle.create({
        name : req.body.name,
        price : req.body.price,
        key_specs : req.body.key_specs,
        images : filePaths,
        features : req.body.features,
        update : req.body.update,
        tag : req.body.tag
    })
    return res.status(201).send(vehicles)
})

//get all reviews on a vehicle
router.get("/:id/reviews", async (req, res)=>{
    const reviews = await Reviews.find({vehicle_id: req.params.id}).lean().exec();
    const vehicle = await Vehicle.findById(req.params.id)
    return res.status(200).send({vehicle, reviews})
})


router.get("/:id/gallery", async (req, res)=>{
    const gallery = await Gallery.find({vehicle_id: req.params.id}).lean().exec();
    const vehicle = await Vehicle.findById(req.params.id)
    return res.status(200).send({vehicle, gallery})
})


module.exports = router