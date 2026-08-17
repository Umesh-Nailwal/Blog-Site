const express = require('express')
const router = express.Router()
const path = require('path')
const login_required = require('../middleware/login_required')
const pool = require('../db/database')
const { upload} = require('../middleware/upload')
router.get('/',login_required,async (req,res) => {
    const user_id = req.session.user.id
    const user_blogs = await pool.query(`
    SELECT * FROM BLOGS WHERE author_id =$1`,
    [user_id])
    res.render('user_profile',{user_blogs: user_blogs.rows})
})

router.get('/edit_profile',login_required,async (req,res) => {
    const user_id= req.session.user.id
    const profile = await pool.query(`SELECT * FROM users WHERE id = $1`,[user_id])
    res.render('edit_profile',{profile: profile.rows[0]})
})

const cpUpload = upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'banner', maxCount: 1 }
]);

router.post('/edit_profile',login_required,cpUpload,async (req,res) => {
        try {
            const name = req.body.name?.trim()|| null
            const avatar = req.files['avatar'] ? req.files['avatar'][0] : null
            const banner  = req.files['banner']  ? req.files['banner'][0]  : null
            const user_id = parseInt(req.session.user.id,10)
        
            const avatarFilename = avatar ? avatar.filename : null
            const bannerFilename  = banner ? banner.filename  : null
            const result = await pool.query(`UPDATE 
        users SET name=COALESCE($1, name), avatar=COALESCE($2, avatar), banner=COALESCE($3, banner) WHERE id = $4 RETURNING *`,[name,avatarFilename, bannerFilename,user_id])
            
        if (result.rowCount >0){
            if(avatarFilename){
            req.session.user.avatar = avatarFilename
            }
            if(bannerFilename){
            req.session.user.banner = bannerFilename
            }
            if(name){
                req.session.user.name=name
            }
            res.redirect('/user_profile')
        } else {
            res.render('edit_blog', {error :"Blog Creation Failed"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).render('edit_profile',{error : "Server Error"})
    }
})

module.exports = router

