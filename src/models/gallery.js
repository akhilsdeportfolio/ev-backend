const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    vehicle_id : {type:mongoose.Schema.Types.ObjectId, ref:'vehicles', required:true},
    images1 : [{type:String, required:true}],
    images1 : [{type:String, required:true}],
    // type :
},
{
    versionKey:false
})

module.exports = mongoose.model('gallery', gallerySchema)