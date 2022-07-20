var multer = require('multer');
var ejs = require ('ejs');

const { Route } = require('react-router-dom');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
});

const fileFilter = (req,file,cb) =>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

var upload = multer({
    storage:storage,
    fileFilter:fileFilter
})

// ** para poner en las rutas de Post

// Router.post("/upload", upload.single('myImg'),async(req,res,next)=>{
//     if(req,file){
//         const pathName=req.file.path;
//         res.send(req.file,pathName)
//     }
// })