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

app.use(morgan('dev'));
app.use(express.json());


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
router.use(express.json());
const axios = require('axios');
const { pool } = require('pg');

// ACA DEFINO PARA PODER SUBIR IMAGENES
const multer = require('multer');
// const ejs = require('ejs')

//defino los models a usar e importo los modelos conectados
const { Expediente, Inspeccion, Intimacion, Infraccion, Ticket, expedienteinspeccion } = require('../db.js'); 
// const { default: Infracciones } = require('../../../client/src/components/IntimCreate.jsx');
// const { route } = require('../app.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// **** SECTOR LLAMADA INFO DE BASE DE DATOS

const getDbInfo = async () => {
    const infoDB = await Expediente.findAll({
       include:{
           model: Inspeccion,
           atributes: ['numexpediente']
       } 
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


// ********* Sector de GET ********

router.get ('/expedientes', async (req,res) => { // llama todos los expedientes en la DB
    const numexpediente = req.query.name;
    const infoTotal = await getAllExpedientes();
    if(numexpediente) {
        const expedientesnum = await infoTotal.filter(p => p.numexpediente.toLowerCase().includes(numexpediente.toLowerCase()))
        res.status(200).send(expedientesnum)
        res.status(400).send('No se encuentra el Expediente Requerido')
    }else{
        res.status(200).send(infoTotal)
    }   
})
router.get ('/intimaciones', async (req,res) => { // llama todas las intimaciones en la DB
    const numdeboletaint = req.query.name;
    const infoTotalint = await getAllIntimaciones();
    if(numdeboletaint) {
        const intnumboleta = await infoTotalint.filter(p => p.numdeboletaint.toLowerCase().includes(numdeboletaint.toLowerCase()))
        res.status(200).send(intnumboleta)
        res.status(400).send('No se encuentra la Intimación Requerida')
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

router.delete("/deleteint/:boletaintnum", async (req, res) => {
    // const boletaintnum = req.params.id;
    // const infoTotalinf = await getAllInfracciones();
    // const deleteid = 
    await Intimacion.destroy({ where: { boletaintnum: req.params.boletaintnum } })
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



router.get("/expedientes/:id", async (req, res) => {
    const id = req.params.id;
    const infoTotal = await getAllExpedientes();   
    if (id){
        const expId = await infoTotal.filter((p) => p.numexpediente == id)                 
        expId.length ? 
                res.status(200).send(expId) : 
                res.status(404).send('NO EXISTE el Expediente Requerido')        
    } 
});

router.get("/intimaciones/:id", async (req, res) => {
    const id = req.params.id;
    const infoTotal = await getAllIntimaciones();        
    if (infoTotal){
        const infboletaintnum = await infoTotal.filter((p) => p.boletaintnum === id)                 
        boletaintnum.length ? 
                res.status(200).send(infboletaintnum) : 
                res.status(404).send('NO EXISTE Id de Intimación Requerido')        
    } 
});
router.get("/infracciones/:id", async (req, res) => {
    const id = req.params.id;
    const infoTotal = await getAllInfracciones();  
    if (infoTotal){
        const infId = await infoTotal.filter((p) => p.id == id)
        console.log(infId)        
        expId.length ? 
                res.status(200).send(infId) : 
                res.status(404).send('NO EXISTE Id de Infracción Requerido')        
    } 
});

// *************** post **************

// con MULTER
// const storage = multer.diskStorage({
//     destination:(req, res, cb) =>{
//       cb(null, './src/uploads') //guarda imagen cruda
//       },
//     filename:(req, file, cb) => {
//         const ext = file.originalname.split('.').pop() // retorna png
//         cb(null, `${Date.now()}.${ext}`)
//       }
//   })
  
//   const upload = multer({storage:storage})
  
//   router.post('/upload', upload.single('file'), (req, res) => {    
//     res.send ({data:'Imagen Cargada'})
//   })

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

        // let expedientesDb = await Inspeccion.findAll({
        //     where: { name: numexpediente }
        // })        
        //expedienteCreate.addExpediente(expedienteCreate)
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

    // let inspeccionDb = await Expediente.findAll({
    //         where: { name: numexpediente }
    //     })
    // inspeccioncreate.addInspecciones(inspeccionDb)
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
