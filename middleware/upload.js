const multer = require("multer");
const crypto = require('crypto')
const path = require('path')

const upload_path = path.join(__dirname,'../uploads/blog-image')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, upload_path)
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

module.exports = {upload, upload_path}

