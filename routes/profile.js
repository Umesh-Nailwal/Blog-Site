const express = require('express')
const router = express.Router()
const path = require('path')
const login_required = require('../middleware/login_required')
const { blogData, blogMap } = require('../db')

router.get('/',login_required,(req,res) => {
    res.render('user_profile',{})
})

router.get('/edit_profile',login_required,(req,res) => {
    res.render('edit_profile',{})
})

router.post('/edit_profile',login_required,(req,res) => {
    res.redirect('/user_profile')
})

module.exports = router

