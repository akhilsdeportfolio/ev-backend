const Comments = require('../models/comments')
const express = require('express')
const router = express.Router();
// const news = require('../models/news');


router.get("", async (req, res)=>{
    const comments = await Comments.find().populate({path : "news", select: 'title'})
    return res.status(200).send(comments)
})

router.post("", async (req, res)=>{
    const comments = await Comments.create({
        name : req.body.name,
        email :req.body.email,
        comment :req.body.comment,
        news_id : req.body.news_id
    })
    return res.status(201).send(comments)
})

module.exports = router