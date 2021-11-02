const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title : {type:String, required:true},
    text : {type:String, required:true},
    images : {type:String, required:true},
    user_id : {type:mongoose.Schema.Types.ObjectId, ref:'user', required:true}
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('news', newsSchema)