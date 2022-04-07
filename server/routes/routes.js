const { response } = require('express');
const express = require ('express');
const router = express.Router()
const commentTemplate = require('../models/CommentModel');
const replyTemplate = require('../models/replyModel');


//get all comments
router.get('/', (req, res) => {
    commentTemplate.find({
     })
    .then((data) => {
        
        console.log('data from db: ', data)
        res.json(data)
    }).catch((error) => {
        console.log('error: ', error)
    })
})

    //get all responses
router.get('/reply', (req, res) => {
    replyTemplate.find({
     })
    .then((data) => {
        console.log('replies from db: ', data)
        res.json(data)
    }).catch((error) => {
        console.log('error: ', error)
    })
})


//post a new comment
router.post('/postcomment', (req, res) => {
    const newComment = new commentTemplate({
        name: req.body.name,
        comment: req.body.comment
    })
        newComment.save() 
        .then(data => {
            res.json(data)  
        })
        .catch(error => {
            console.log(error)
        })
})

//post a answer to a comment

router.post('/postcomment/id', (req, res) => {
    const replyComment = new replyTemplate({
        name: req.body.name,
        comment: req.body.comment,
        commentId: req.body.commentId
    })
        replyComment.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router;
 