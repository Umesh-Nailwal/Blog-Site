const express = require('express')
const router = express.Router()
const path = require('path')
const login_required = require('../middleware/login_required')
const pool = require('../db/database')
const {upload_path} = require('../middleware/upload')

router.get('/',login_required,async (req,res) => {
    const user_id = req.session.user.id
    const user_blogs = await pool.query(`
    SELECT * FROM BLOGS WHERE author_id =$1`,
    [user_id])
    res.render('user_profile',{user_blogs: user_blogs.rows , upload_path: upload_path})
})

router.get('/edit_profile',login_required,(req,res) => {
    res.render('edit_profile',{})
})

router.post('/edit_profile',login_required,(req,res) => {
    res.redirect('/user_profile')
})

module.exports = router

