// // ACA DEFINO PARA PODER SUBIR IMAGENES
// const multer = require('multer');
// // const ejs = require('ejs')

// // ** este multer filtra las imagenes y muestra la info del archivo y ubic

// // en storage se coloca donde van a ser guardado los archivos
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './src/uploads')
//     },    
//     filename: (req, file, cb) => {
//         cb(null, Date.now()+file.originalname)
//     }
// });

// const fileFilter = (res, file, cb) =>{
//     if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png"){
//         cb(null, true)
//     }else{       
//         cb(null, false)
//     }
// }

// var upload = multer({
//     storage:storage,
//     fileFilter:fileFilter
// })

// router.post("/upload", upload.single('file'), async(req, res, cb)=>{
//     if (req.file) {
//         const fotoint=req.file.path;
//         res.send(fotoint)
//     }
// })

// // ** para poner en las rutas de Post

// // Router.post("/upload", upload.single('myImg'),async(req,res,next)=>{
// //     if(req,file){
// //         const pathName=req.file.path;
// //         res.send(req.file,pathName)
// //     }
// // })