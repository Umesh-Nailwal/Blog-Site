const express = require('express')
const router = express.Router()
const path = require('path')
const bcrypt = require('bcryptjs')
const pool = require('../db/database')

router.get('/login',(req,res) => {
    res.render('login',{})
})

router.get('/register',(req,res) => {
    res.render('register',{})
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
   try {
        let { email, password } = req.body

        if (!email) {
            return res.status(400).render('login', {
                error: 'Email required'
            })
        }

        if (!password) {
            return res.status(400).render('login', {
                error: 'Password Required'
            })
        }

        email = email.trim()

        const result = await pool.query(
       `SELECT * FROM users WHERE email = $1`,
            [email]
        )

        const user_data = result.rows[0]

        if (!user_data) {
            return res.status(400).render('login', {
                error: 'User does not exist'
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            user_data.password
        )

        if (!isMatch) {
            return res.status(400).render('login', {
                error: 'Password incorrect'
            })
        }

        // Create a new session after successful login
        req.session.regenerate(err => {
            if (err) {
                console.log(err)
                return res.status(500).render('login', {
                    error: 'Session error'
                })
            }

            // Store user information in the new session
            req.session.user = {
                id: user_data.id,
                name: user_data.name,
                email: user_data.email,
                avatar: user_data.avatar,
                banner: user_data.banner
            }

            // Save session to PostgreSQL session store
            req.session.save(err => {
                if (err) {
                    console.log(err)
                    return res.status(500).render('login', {
                        error: 'Session save error'
                    })
                }

                // Only redirect after session has been saved
                res.redirect('/')
            })
        })

    } catch (error) {
        console.log(error)

        return res.status(500).render('login', {
            error: 'Server Error'
        })
    }
})

router.post('/register',async (req,res) => {
    
    try {
        let { name, email , password, confmPass } = req.body
        email = email?.trim()
        fullname = fullname?.trim()
        if(!fullname) {
            return res.status(400).render('register',{error:"Name is required"})
        }
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
        
        const result_email = await pool.query(`
        SELECT * FROM users WHERE email=$1`,[email])
        const existing_user = result_email.rows[0]
        if (existing_user){
            return res.status(400).render('register',{error :'User already exists'})
        }
        
        const salt =await bcrypt.genSalt(10);
        const hash_pass= await bcrypt.hash(password, salt);
        
        const result = await pool.query(`INSERT INTO users(name, email, password) 
        VALUES($1,$2,$3) RETURNING *`, [fullname, email, hash_pass])
        const user_data = result.rows[0]
        
        req.session.user= {
            id: user_data.id,
            name: user_data.name,
            email: user_data.email,
            avatar: user_data.avatar,
            banner: user_data.banner
        }
        req.session.save(err => {
            if (err) {
            console.log(err)
            return res.status(500).render('register', {
            error: 'Session save error'
            })
       }
        
        res.redirect('/')
        })
    } catch (error) {
      console.log(error);
      return res.status(500).render('register',{ error: "Server error"})
        
    }
})

module.exports = router
