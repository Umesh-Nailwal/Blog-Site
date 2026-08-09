const express = require('express')
const router = express.Router()
const path = require('path')
const { blogData, blogMap } = require('../db')

router.get('/login',(req,res) => {
   
    res.render('login',{})
})

router.get('/register',(req,res) => {
    res.render('register',)
})

router.post('/logout',(req,res) => {
    res.redirect('/')
})
router.post('/login',(req,res) => {
    res.redirect('/')
})

router.post('/register',(req,res) => {
    res.redirect('/')
})

module.exports = router
