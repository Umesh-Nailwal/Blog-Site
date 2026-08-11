const express = require('express')
const router = express.Router()
const path = require('path')
const { blogData, blogMap } = require('../db')
const upload = require('../middleware/upload')


router.get('/',(req,res) => {
    const featured_blog = blogMap[1]
    const blogs = blogData
    res.render('index',{
        featured_blog: featured_blog,
        blogs: blogs
    })
})

router.get('/blogs',(req,res) => {
    const blogs = blogData
    res.render('blogs',{
        blogs: blogs
    })
})

router.get('/create_blog',(req,res) =>{
    res.render('create_blog',{})
})

router.post('/create_blog',upload.single("file"),async (req,res) =>{
    const { title ,summary, content, categories} = req.body
    const file = req.file
    
    res.redirect('/user_profile')
})

router.get('/edit_blog',(req,res) =>{
    res.render('edit_blog',{})
})

router.post('/edit_blog',(req,res) =>{
    res.redirect('/user_profile')
})

router.get('/blog/:id',(req,res) => {
    const {id} = req.params
    const blog = blogMap[id]
    if (id && blog){
     res.render('sep-blog', {
         blog : blog
     })
    } else {
        res.status(404).send("Blog Not Found")
    }
})

module.exports = router

