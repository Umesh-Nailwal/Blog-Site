const express = require('express')
const router = express.Router()
const path = require('path')
const pool = require('../db/database')
const {upload} = require('../middleware/upload')
const login_required = require('../middleware/login_required')
const {blog_validation }= require('../middleware/validate_input')
const { blogData, blogMap} = require('../db')

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

router.get('/create_blog',login_required, (req,res) =>{
    res.render('create_blog',{})
})

router.post('/create_blog',login_required,upload.single("file"),blog_validation,async (req,res) =>{
    try { 
        const { title ,summary, content, category} = req.body
        const file = req.file
        
        const result = await pool.query(`INSERT INTO 
        blogs(author_id, title, summary, content, category, image)
        VALUES($1,$2,$3,$4,$5,$6)`,[parseInt(req.session.user.id,10), title, summary, content, category,file.filename])
        
        if (result.rowCount >0){
            res.redirect('/user_profile')
        } else {
            res.render('create_blog', {error :"Blog Creation Failed"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).render('create_blog',{error : "Server Error"})
    }
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

