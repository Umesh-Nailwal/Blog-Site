const express = require('express')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcryptjs')


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

router.post('/register',async (req,res) => {
    
    try {
        const { fullname, email , password, confmPass } = req.body ||{}
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
        const salt = bcrypt.genSaltSync(10);
        const hash_pass= 
        bcrypt.hashSync(password, salt);
        
        /*const smtp = db.prepare(`INSERT INTO users
        ( name , email, password ) VALUES(?,?,?`).run
        (fullname, email, hash_pass)
         if (result.changes === 0) {
        return res.status(400).json({
            error: "User was not created"
        });
        }*/
        
        res.redirect('/')
    } catch (error) {
      console.log(error);
      res.status(500).render('register',{ error: "Server error"})
        
    }
})

module.exports = router
