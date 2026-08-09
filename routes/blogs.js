const express = require('express')
const router = express.Router()
const path = require('path')
const { blogData, blogMap } = require('../db')

router.get('/',(req,res) => {
    const featured_blog = blogMap[1]
    const blogs = blogData
    res.render('index',{
        featured_blog: featured_blog,
        blogs: blogs
    })
})

router.get('/blogs',(req,res) => {
    res.sendFile(path.join(__dirname,'..','public','blogs.html'))
})

router.get('/create_blog',(req,res) =>{
    res.sendFile(path.join(__dirname,'..','public','create_blog.html'))
})

router.post('/create_blog',(req,res) =>{
    res.redirect('/user_profile')
})

router.get('/edit_blog',(req,res) =>{
    res.sendFile(path.join(__dirname,'..','public','edit_blog.html'))
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

