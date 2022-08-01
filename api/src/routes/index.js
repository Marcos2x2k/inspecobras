// *** ejemplos practicos
// router.get('/users', getUsers); TRAER TODOS
// router.get('/users/:id', getUserById); TRAER 1 
// router.post('/users', createUser); CREAR
// router.put('/users/:id', updateUser) ACTUALIZAR
// router.delete('/users/:id', deleteUser); BORRAR


const express = require('express');
const router = express.Router();
const morgan = require('morgan')
const app = express();
const bcrypt = require('bcrypt')
const passport = require('passport')
// los dos de abajo permiten a express manejar sesiones
const cookieParser = require('cookie-parser')
const session = require('express-session')
const PassportLocal = require('passport-local').Strategy;


// ESTOS SON MIDLEWARE Q USO
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cookieParser('miultrahipersecreto'))
// app.use(session({
//     secret: 'miultrahipersecreto',
//     resave: true,
//     saveUninitialized:true
// }))
// app.set('view engine', 'ejs')
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new PassportLocal(function(user, password, done){
//     // done(err,{name:"Marcos"},{}) Opcional
//     if (user === "Marcos" && password === "123")
//         return done(null, {id:1, name: "cody"});   // CREO EL USUARIO
//     done(null, false)
// }));
// // {id: 1, name: "Cody"}
// // 1 => Serialización
// passport.serializeUser(function(user, done){
//     done(null, user.id)
// })
// // Deserialización
// passport.serializeUser(function(id, done){
//     done(null, {id:1 , name:"Cody"})
// })

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
router.use(express.json());
const axios = require('axios');
const { pool } = require('pg');

// ACA DEFINO PARA PODER SUBIR IMAGENES
const multer = require('multer');
const ejs = require('ejs')

//defino los models a usar e importo los modelos conectados
const { User, Expediente, Inspeccion, Intimacion, Infraccion, Ticket, expedienteinspeccion } = require('../db.js'); 
// const { default: Infracciones } = require('../../../client/src/components/IntimCreate.jsx');
// const { route } = require('../app.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// **** SECTOR LLAMADA INFO DE BASE DE DATOS

const getDbInfo = async () => {
    const infoDB = await Expediente.findAll({
    //    include:{
    //        model: Inspeccion,
    //        atributes: ['numexpediente']
    //    } 
    })
    return infoDB;
}

const getDbInfoInt = async () => {
    const infoDBint = await Intimacion.findAll({
    //    include:{
    //        model: Inspeccion,
    //        atributes: ['numexpediente']
    //    } 
    })
    return infoDBint;
}
const getDbInfoInf = async () => {
    const infoDBinf = await Infraccion.findAll({
    //    include:{
    //        model: Inspeccion,
    //        atributes: ['numexpediente']
    //    } 
    })
    return infoDBinf;
}
const getDbInfoTickets = async () => {
    const infoDBticket = await Ticket.findAll({
    //    include:{
    //        model: Inspeccion,
    //        atributes: ['numexpediente']
    //    } 
    })
    return infoDBticket;
}


const getAllExpedientes = async () =>{
    try{
        const DBinfo = await getDbInfo()
        return DBinfo;
    }catch (err){
        console.log('error trayendo info de la Base de Datos', err)
    }
}

const getAllIntimaciones = async () =>{
    try{
        const DBinfoint = await getDbInfoInt()
        return DBinfoint;
    }catch (err){
        console.log('error trayendo info de la Base de Datos', err)
    }
}

const getAllInfracciones = async () =>{
    try{
        const DBinfoinf = await getDbInfoInf()
        return DBinfoinf;
    }catch (err){
        console.log('error trayendo info de la Base de Datos', err)
    }
}

const getAllTickets = async () =>{
    try{
        const DBinfoTickets = await getDbInfoTickets()
        return DBinfoTickets;
    }catch (err){
        console.log('error trayendo info de la Base de Datos', err)
    }
}
// ********* Sector de GET ********

router.get("/", (req, res) =>{
    //si iniciamos sesion mostramos LANDING

    //Si no se inicia que mande al login de nuevo
})

router.get('/login', async (req, res) =>{
    //Mostrar el formulario de Login
    res.render("login")
})

router.post('/login', passport.authenticate('local',{
    successRedirect: "http://localhost:3000/LandingPage",
    failure: "http://localhost:3000/"
    //Mostrar el formulario de Login
}));


router.get ('/expedientes', async (req,res) => { // llama todos los expedientes en la DB
    const numexpediente = req.query.name;
    const infoTotal = await getAllExpedientes();
    if(numexpediente) {
        const expedientesnum = await infoTotal.filter(p => p.numexpediente.toLowerCase().includes(numexpediente.toLowerCase()))
        res.status(200).send(expedientesnum)
        // res.status(400).send('No se encuentra el Expediente Requerido')
    }
    else{
        // res.status(400).send('No se encuentra el Expediente Requerido')
        res.status(200).send(infoTotal)
    }   
})
router.get ('/intimaciones', async (req,res) => { // llama todas las intimaciones en la DB
    const boletaintnum = req.query.name;
    const infoTotalint = await getAllIntimaciones();
    if(boletaintnum) {
        const intnumboleta = await infoTotalint.filter(p => p.boletaintnum.toLowerCase().includes(boletaintnum.toLowerCase()))
        res.status(200).send(intnumboleta)
        // res.status(400).send('No se encuentra la Intimación Requerida')
    }else{
        res.status(200).send(infoTotalint)
    }   
})
router.get ('/infracciones', async (req,res) => { // llama todos las infracciones en la DB
    const numinfraccion = req.query.name;
    const infoTotalinf = await getAllInfracciones();
    if(numinfraccion) {
        const infraccionesnum = await infoTotalinf.filter(p => p.numinfraccion.toLowerCase().includes(numinfraccion.toLowerCase()))
        res.status(200).send(infraccionesnum)
        res.status(400).send('No se encuentra la Infracción Requerida')
    }else{
        res.status(200).send(infoTotalinf)
    }   
})

router.get ('/tickets', async (req,res) => { // llama todos las infracciones en la DB
    const numticket = req.query.name;
    const infoTotalTickets = await getAllTickets();
    if(numticket) {
        const ticketsnum = await infoTotalTickets.filter(p => p.numticket.toLowerCase().includes(numticket.toLowerCase()))
        res.status(200).send(ticketsnum)
        // res.status(400).send('No se encuentra la Infracción Requerida')
    }else{
        res.status(200).send(infoTotalTickets)
    }   
})

// *** zona delete ***
router.delete("/deleteexp/:numexpediente", async (req, res) => {
    // const boletaintnum = req.params.id;
    // const infoTotalinf = await getAllInfracciones();
    // const deleteid = 
    await Expediente.destroy({ where: { numexpediente: req.params.numexpediente } })
    .then(result => {
        res.json(`EXPEDIENTE BORRADO ${result}`);
    });   
    // res.json(`User ${deleteid} deleted Successfully`);
}); 

router.delete("/deleteinsp/:informeinspnum", async (req, res) => {
    // const boletaintnum = req.params.id;
    // const infoTotalinf = await getAllInfracciones();
    // const deleteid = 
    await Inspeccion.destroy({ where: { informeinspnum: req.params.informeinspnum } })
    .then(result => {
        res.json(`INFRACCION BORRADA ${result}`);
    });   
    // res.json(`User ${deleteid} deleted Successfully`);
}); 

router.delete("/deleteint/:id", async (req, res) => {
    // const boletaintnum = req.params.id;
    // const infoTotalinf = await getAllInfracciones();
    // const deleteid = 
    await Intimacion.destroy({ where: { id: req.params.id } })
    .then(result => {
        res.json(`BOLETA DE INTIMACIÓN BORRADA ${result}`);
    });   
    // res.json(`User ${deleteid} deleted Successfully`);
}); 

router.delete("/deleteinf/:actainfnum", async (req, res) => {
    // const boletaintnum = req.params.id;
    // const infoTotalinf = await getAllInfracciones();
    // const deleteid = 
    await Infraccion.destroy({ where: { actainfnum: req.params.actainfnum } })
    .then(result => {
        res.json(`ACTA DE INFRACCION BORRADA`);
    });   
    // res.json(`User ${deleteid} deleted Successfully`);
}); 


// ***** SECTOR BUSCAR ******

router.get("/expedientes/:id", async (req, res) => {    
    let numexpediente = req.params.id;
    Expediente.findOne({where: {id:numexpediente}})
    .then (p =>{
        res.json (p)
    })   
    // const infoTotal = await getAllExpedientes();   
    // if (id){
    //     const expId = await infoTotal.filter((p) => p.numexpediente == id)                 
    //     expId.length ? 
    //             res.status(200).send(expId) : 
    //             res.status(404).send('NO EXISTE el Expediente Requerido')        
    // } 
});

router.get("/intimaciones/:boletaintnum", async (req, res) => {
    let boletaintnum = req.params.boletaintnum;
    Intimacion.findOne({where: {boletaintnum:boletaintnum}})
    .then (p =>{
        res.json (p)
    })    
});
router.get("/infracciones/:actainfnum", async (req, res) => {
    let actainfnum = req.params.actainfnum;
    Infraccion.findOne({where: {actainfnum:actainfnum}})
    .then (p =>{
        res.json (p)
    })    
});
router.get("/tickets/:id", async (req, res) => {    
    let numticket = req.params.id;
    Ticket.findOne({where: {id:numticket}})
    .then (p =>{
        res.json (p)
    })
});

// ****** SECTOR DE EDITAR - PUT ******

router.put ("editarint/:id", async (res, req) =>{
    Post.Update({
        
        boletaintnum: req.body.boletaintnum, 
        adremaint: req.body.adremaint,
        numexpedienteint: req.body.numexpedienteint,
        señorseñora: req.body.señorseñora,
        domiciliopart: req.body.domiciliopart,
        lugaractuacion: req.body.lugaractuacion,
        otorgaplazode: req.body.otorgaplazode,
        paracumplimientoa: req.body.paracumplimientoa,
        fechaintimacion: req.body.fechaintimacion,
        horaintimacion: req.body.horaintimacion,
        vencimientoint: req.body.vencimientoint,
        notificadoint: req.body.notificadoint,
        aclaracion: req.body.aclaracion,
        numcodigoint: req.body.numcodigoint,
        inspectorint: req.body.inspectorint,
        fotoint: req.body.fotoint
     }, { where: { boletaintnum: req.params.id } })
    .then(result => {
        res.json(`ACTA DE INFRACCION EDITADA`);
    });
})




// *************** UPDATE IMAGENES **************

// ** este multer filtra las imagenes y muestra la info del archivo y ubic
// en storage se coloca donde van a ser guardado los archivos
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads')
    },    
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
});

const fileFilter = (res, file, cb) =>{
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png"){
        cb(null, true)
    }else{       
        cb(null, false)
    }
}

var upload = multer({
    storage:storage,
    fileFilter:fileFilter
})

router.post("/upload", upload.single('fotoint'), async(req, res, cb)=>{
    if (req.file) {
        const fotoint=req.file.path;
        res.send(fotoint)
    }
})

// CON EXPRESS UPLOAD
// const uploadexpress = require('express-fileupload')
// router.post('/uploadexpress', (req, res) => {
//     let fileUpload = req.files.file
//     fileUpload.mv(`./upload/$(fileUpload.name)`, err =>{
//         if(err) return res.status(500).send({message : err})
//         return res.status(200).send({message:'Archivo Cargado al Server'})
//     })
// })

// ******* SECTOR POST - AGREGAR *******
router.post('/login', async (req,res)=>{
    let {            
       user,
       email,
       password
    } = req.body
    // password = await bcrypt.hash(password, 10);
    let userCreate = await User.create({          
       user,
       email,
       password
    })
    let errors = [];
    if(!user || !email || !password){
        errors.push({message: "POR FAVOR RELLENAR TODOS LOS DATOS"})
    } 
    if (password.length > 6) {errors.push({message: "Contraseña debe tener más de 6 caracteres"})}

    if(errors.length>0){
        // res.render("registro", 
        ({errors})
    }else{
        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)
    }




    res.send('USUARIO Creado')
})


router.post('/newexpediente', async (req, res) => {

        let {
            numexpediente,
            fechainicioentrada,
            estado,
            iniciadornomyape,
            domicilio,
            adrema,
            directorobraoperitovisor,
            destinodeobra,
            superficieterreno,
            superficieaconstruir,
            superficiesubsueloplantabaja,
            superficieprimerpisoymaspisos,
            observaciones,
            zona,
            permisobraoactainfrac
        } = req.body

        let expedienteCreate = await Expediente.create({
            numexpediente,
            fechainicioentrada,
            estado,
            iniciadornomyape,
            domicilio,
            adrema,
            directorobraoperitovisor,
            destinodeobra,
            superficieterreno,
            superficieaconstruir,
            superficiesubsueloplantabaja,
            superficieprimerpisoymaspisos,
            observaciones,
            zona,
            permisobraoactainfrac
        })

        // let errors = [];
        // if(!numexpediente || !fechainicioentrada || !estado|| !iniciadornomyape|| !domicilio|| !adrema|| !directorobraoperitovisor
        //    || !destinodeobra|| !superficieterreno|| !superficieaconstruir|| !superficiesubsueloplantabaja|| !superficieprimerpisoymaspisos
        //    || !observaciones|| !zona|| !permisobraoactainfrac){
        //     errors.push({message: "POR FAVOR RELLENAR TODOS LOS DATOS"})
        //    } 
            res.send('Expediente Nuevo Creado')
    })



router.post('/newinspeccion', async (req, res) =>{

    let {
        numexpediente,
        fechaentradinspec,
        inspecfecha,
        inspector,
        intimacion,
        infracciones,
        observaciones,
        paseanumdestino,
        fecha,
        paseafecha    
    } = req.body

    let inspeccioncreate = await Inspeccion.create ({
        numexpediente,
        fechaentradinspec,
        inspecfecha,
        inspector,
        intimacion,
        infracciones,
        observaciones,
        paseanumdestino,
        fecha,
        paseafecha 
    })
    res.send('Nueva Inspección Creada')
})

router.post ('/newintimacion', async (req,res) =>{
    let {
        boletaintnum, 
        adremaint,
        numexpedienteint,
        señorseñora,
        domiciliopart,
        lugaractuacion,
        otorgaplazode,
        paracumplimientoa,
        fechaintimacion,
        horaintimacion,
        vencimientoint,
        notificadoint,
        aclaracion,
        numcodigoint,
        inspectorint,
        fotoint
    } = req.body
    
    let intimacionCreate = await Intimacion.create ({
        boletaintnum, 
        adremaint,
        numexpedienteint,
        señorseñora,
        domiciliopart,
        lugaractuacion,
        otorgaplazode,
        paracumplimientoa,
        fechaintimacion,
        horaintimacion,
        vencimientoint,
        notificadoint,
        aclaracion,
        numcodigoint,
        inspectorint,
        fotoint
    })
    res.send ('INTIMACION CREADA')
})

router.post ('/newinfraccion', async (req, res) =>{
    let {
        actainfnum, 
        fechainfraccion,
        horainfraccion,
        numexpedienteinf,
        adremainf,
        apellidonombrepropietarioinf,
        dnipropietarioinf,
        cuilpropietarioinf,
        lugardeconstitucioninf,
        Causasinf,
        Ordenanzanum,
        articuloinf,
        incisonum,
        observacion,
        apellidonombretestigoinf,
        Inspectorinf,
        Inspectorcod,
        detallegeneral,
        informeinpecnum,
        inforinspecobsevaciones,
        fotoinf
    } = req.body

    let infraccionCreate = await Infraccion.create ({
        actainfnum, 
        fechainfraccion,
        horainfraccion,
        numexpedienteinf,
        adremainf,
        apellidonombrepropietarioinf,
        dnipropietarioinf,
        cuilpropietarioinf,
        lugardeconstitucioninf,
        Causasinf,
        Ordenanzanum,
        articuloinf,
        incisonum,
        observacion,
        apellidonombretestigoinf,
        Inspectorinf,
        Inspectorcod,
        detallegeneral,
        informeinpecnum,
        inforinspecobsevaciones,
        fotoinf
    })
    res.send ('NUEVA INFRACCION CREADA')
})

router.post ('/newticket', async (req, res) =>{

    let {
        numticket,
        iniciador,
        ubicacion,
        adrema,
        directordeobra,
        destinodelaobra,
        zona,
        observaciones,
        permisodeobranum,
        actasdeinfraccionnum,
        fechaentradaainspecciones,
        inspector,
        fechainspecccion,
        intimacion,
        infracciones,
        observacioneslugar,
        pasea,
        fecha,
    } = req.body

    let ticketcreate = await Ticket.create ({
        numticket,
        iniciador,
        ubicacion,
        adrema,
        directordeobra,
        destinodelaobra,
        zona,
        observaciones,
        permisodeobranum,
        actasdeinfraccionnum,
        fechaentradaainspecciones,
        inspector,
        fechainspecccion,
        intimacion,
        infracciones,
        observacioneslugar,
        pasea,
        fecha,
    })
    res.send('Nuevo Ticket Creado!')
})




module.exports = router;
