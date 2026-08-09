const express = require('express')
const router = express.Router()
const path = require('path')
const { blogData, blogMap } = require('../db')

router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'..','public','user_profile.html'))
})

router.get('/edit_profile',(req,res) => {
    res.sendFile(path.join(__dirname,'..','public','edit_profile.html'))
})

router.post('/edit_profile',(req,res) => {
    res.redirect('/user_profile')
})

module.exports = router

