const express = require('express')
const router = express.Router()
const path = require('path')
const pool = require('../db/database')
const {upload} = require('../middleware/upload')
const login_required = require('../middleware/login_required')
const {blog_validation }= require('../middleware/validate_input')

router.get('/',async (req,res) => {
    const { q } = req.query
    const conditions =[]
    const values =[]
    if (q){
        values.push(`${q}`)
        conditions.push(`blogs.category= $${values.length}`)
    }

    let sql= `SELECT blogs.id, blogs.title, blogs.summary, blogs.category, blogs.content,
     blogs.image , blogs.created_at, users.name, users.avatar FROM blogs JOIN users ON blogs.author_id=users.id `
    let featured_blog= await pool.query(sql+` ORDER BY blogs.created_at ASC LIMIT 1`)
    if(conditions.length >0){
        sql+= `WHERE ${conditions.join("")}`
    }
    sql +=` ORDER BY blogs.created_at ASC LIMIT 9`
    
    
    const blogs = await pool.query(sql, values)
    res.render('index', {blogs: blogs.rows , featured_blog: featured_blog.rows[0]})
})

router.get('/blogs',async (req,res) => {
    const { q, order_by, category} = req.query
    const conditions =[]
    const values =[]
    if (q){
        values.push(`%${q}%`)
        conditions.push(`(blogs.title ILIKE $${values.length}
        OR blogs.summary ILIKE $${values.length}
        OR blogs.content ILIKE $${values.length})`)
        
    }
    if (category){
        values.push(`${category}`)
        conditions.push(`blogs.category= $${values.length}`)
    }
    let sql= `
    SELECT blogs.id, blogs.title, blogs.summary, blogs.category, blogs.content,
    blogs.image , blogs.created_at, users.name, users.avatar FROM blogs JOIN users ON blogs.author_id=users.id `
    
    if(conditions.length >0){
        sql+= `WHERE ${conditions.join(' AND ')}`
    }
    const order = order_by === "ASC"?"ASC":"DESC"
    sql+= ` ORDER BY blogs.created_at ${order}`
    const blogs = await pool.query(sql,values)
    res.render('blogs', {blogs: blogs.rows,
        q: q || null, 
        order_by: order_by || null,
        category: category ||null
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

router.post('/delete_blog/:id',login_required,async (req,res) =>{
    const blog_id = parseInt(req.params.id,10)
    const blog = await pool.query(`DELETE FROM blogs WHERE id =$1 AND author_id=$2`,[blog_id, req.session.user.id])
    if (blog.rowCount>0){
        res.redirect('/user_profile')
    } else {
        res.render('user_profile',{error:"Cannot Delete"})
    }
})

router.get('/edit_blog/:id',login_required,async (req,res) =>{
    const blog_id = parseInt(req.params.id,10)
    const blog = await pool.query(`
    SELECT * FROM blogs WHERE id =$1 AND author_id=$2`,
    [blog_id, req.session.user.id])
    if (blog.rowCount >0){
        res.render('edit_blog',{blog: blog.rows[0]})
    } else {
        res.redirect('/user_profile')
    }
})

router.post('/edit_blog/:id',login_required,upload.single("file"),async (req,res) =>{
    try { 
        
        const title = req.body.title?.trim()|| null
        const summary = req.body.summary || null
        const content = req.body.content || null
        const category = req.body.category || null
        const file = req.file || null
        const blog_id = parseInt(req.params.id,10)
        const user_id = parseInt(req.session.user.id,10)
        
        const result = await pool.query(`UPDATE 
        blogs SET title=COALESCE($1, title), summary=COALESCE($2, summary), content=COALESCE($3, content), category=COALESCE($4,category), image=COALESCE($5, image)
        WHERE author_id=$6 AND id=$7`,[title, summary, content, category,file?.filename || null,user_id,blog_id])
        
        if (result.rowCount >0){
            res.redirect('/user_profile')
        } else {
            res.render('edit_blog', {error :"Blog Creation Failed"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).render('edit_blog',{error : "Server Error"})
    }
})

router.get('/blog/:id',async (req,res) => {
    const blog_id = parseInt(req.params.id,10)
    const blog = await pool.query(`SELECT * FROM blogs WHERE id =$1`,[blog_id])
    if (blog.rowCount>0){
     res.render('sep-blog', {
         blog : blog.rows[0]
     })
    } else {
        res.status(404).send("Blog Not Found")
    }
})

module.exports = router

