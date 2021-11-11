const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    vehicle_id : {type:mongoose.Schema.Types.ObjectId, ref:'vehicles', required:true},
    images : [{type:String, required:true}]
},
{
    versionKey:false
})

module.exports = mongoose.model('gallery', gallerySchema)