const multer = require("multer");
const crypto = require('crypto')
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let subfolder =  "blog-image"
    if (file.fieldname === "avatar") {
      subfolder = "authors/avatar";
    } else if (file.fieldname === "banner") {
      subfolder = "authors/banner";
    } 
    cb(null, path.join(__dirname,'../uploads',subfolder))
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function(err, bytes) {
      if (err) {
        return cb(err)
      }
       const fn = bytes.toString("hex")+ path.extname(file.originalname)
      cb(null, fn)
    })
  }
})

const upload = multer({ storage: storage })

module.exports = {upload}

