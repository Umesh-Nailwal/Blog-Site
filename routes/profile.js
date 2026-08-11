const express = require('express')
const router = express.Router()
const path = require('path')
const { blogData, blogMap } = require('../db')

router.get('/',(req,res) => {
    res.render('user_profile',{})
})

router.get('/edit_profile',(req,res) => {
    res.render('edit_profile',{})
})

router.post('/edit_profile',(req,res) => {
    res.redirect('/user_profile')
})

module.exports = router

