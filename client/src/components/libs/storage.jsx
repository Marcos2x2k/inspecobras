const multer = require ('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, '/storage/imgs')
    },
      filename: function (req, file, cb){
        // cb(null, file.filename+'-'+Date.now())
        cb(null, `${file.fieldname}-${Date.now()}`)
            
    }
  })
  const upload = multer ({storage : storage})

  module.exports = upload