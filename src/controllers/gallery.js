const Gallery = require('../models/gallery')
const express = require('express')
const router = express.Router();
const upload = require('../middlewares/upload')


router.post("",  upload.any('images'), async(req, res)=>{
    const filePaths = req.files.map(file => file.path)

    const gallery = await Gallery.create({
        vehicle_id : req.body.vehicle_id,
        images: filePaths
    })

    return res.status(201).send(gallery)
})

//find gallery using vehicle id
router.get("/:id", async (req, res)=>{
    const gallery = await Gallery.find({vehicle_id : req.params.id})
    return res.status(200).send(gallery)
})

module.exports = router