const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:Array, required:true},
    text : {type:String, required:true},
    vehicle_id : {type:mongoose.Schema.Types.ObjectId, ref:'vehicles', required:true}
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('reviews', reviewSchema)
