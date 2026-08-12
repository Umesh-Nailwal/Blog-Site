const express = require('express')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcryptjs')
const {users, user_email,userMap} = require('../db')
const db = require('../db/database')
router.get('/login',(req,res) => {
    res.render('login',{})
})

router.get('/register',(req,res) => {
    res.render('register',)
})

router.post('/logout',(req,res) => {
    req.session.destroy(err=>{
        if(err) {
            return res.status(500).send("Could not logout")
        }
        res.redirect('/')
    })
})
router.post('/login',async (req,res) => {
    let {email, password} = req.body
    email = email?.trim()
    const user_data = user_email[email]
    if (!user_data) {
        return res.status(400).render('login',{
            error :"User does not exist"
        })
    }
    const isMatch = bcrypt.compareSync(password, user_data.password)
    if (!isMatch){
        return res.status(400).render('login',{
            error:"Password incorrect"
        })
    }
    req.session.user = {
        id: user_data.id,
        name: user_data.name,
        email: user_data.email,
    }
    res.redirect('/')
})

router.post('/register',async (req,res) => {
    
    try {
        let { fullname, email , password, confmPass } = req.body ||{}
        email = email.trim()
        if (!email){
            return res.status(400).render('register',{ error: 'Email required'})
        }
        if (!password){
            return res.status(400).render('register',{ error: 'Password Required'})
        }
        if (!confmPass){
            return res.status(400).render('register',{ error: 'Confirm Password Required'})
        }
        if (password !== confmPass){
            return res.status(400).render('register',{ error: 'Confirm Password does not match' })
        }
        const isUser = user_email[email]
        if (isUser){
            return res.status(400).render('register',{error :'User already exists'})
        }
        
        const salt = bcrypt.genSaltSync(10);
        const hash_pass= 
        bcrypt.hashSync(password, salt);
        const id = users.length+1
        const user_data = {id: id,
            name:fullname,
            email:email,
            password:hash_pass
        }
        users.push(user_data)
        userMap[user_data.id] = user_data
        user_email[user_data.email] = user_data
        
        req.session.user= {
            id: id,
            name: fullname,
            email: email
        }
        
        res.redirect('/')
    } catch (error) {
      console.log(error);
      return res.status(500).render('register',{ error: "Server error"})
        
    }
})

module.exports = router
