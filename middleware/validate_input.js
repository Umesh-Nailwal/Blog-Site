function blog_validation(req, res, next){
    const {title , summary, content, category} = req.body
    const file = req.file
    if (!title) {
        return res.status(400).render('create_blog',{
            error :"Title required"
        })
    }
    if (!summary) {
        return res.status(400).render('create_blog',{
            error :"Summary Required"
        })
    }
    if (!content) {
        return res.status(400).render('create_blog',{
            error :"Content required"
        })
    }
    if (!category) {
        return res.status(400).render('create_blog',{
            error :"Category required"
        })
    }
    if (!file) {
        return res.status(400).render('create_blog',{
            error :"Image required"
        })
    }
    next()
    
}//function end
module.exports = {blog_validation}
