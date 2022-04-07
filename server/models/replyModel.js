const mongoose = require('mongoose')

const replyTemplate = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    comment:{
        type:String,
        required: true
    },
    commentId:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('replies', replyTemplate)
