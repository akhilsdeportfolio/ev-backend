const mongoose = require('mongoose')

const urgentSchema = new mongoose.Schema({
    name : {type:String, required:true},
    phone : {type:Number, required:true},
    email : {type:String, required:true},
    problem : {type:String, required:true},
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('urgent', urgentSchema)
