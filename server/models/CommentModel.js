const mongoose = require('mongoose')

const commentTemplate = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    comment:{
        type:String,
        required: true
    }

})

module.exports = mongoose.model('comments', commentTemplate)
 