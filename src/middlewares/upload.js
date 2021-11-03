const multer = require('multer')
const path = require('path')

// storage destination and file name
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../uploads'))
    },

    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })

//filter file type
  function fileFilter (req, file, cb) {
      if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg'){
        cb(null, true)
      } else cb(null, false)
  }

//file size limit
module.exports = multer({
      storage : storage,
      fileFilter : fileFilter,
      limits : {
          filesize : {
              filesize : 1024 * 1024 * 5
          }
      }
  })