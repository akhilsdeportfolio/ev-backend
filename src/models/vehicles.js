const mongoose = require('mongoose')
// const users = require('./users')


const vehicleSchema = new mongoose.Schema({
    title : {type:String, required:true},
    price : {type:Number, required:true},
    key_specs : {type:Array, required:true},
    images : {type:Array, required:true},
    features : {type:Array, required:true},
    update : {type:String, required:true},
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('vehicles', vehicleSchema)
