const express = require('express');
const router = express.Router();


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
router.use(express.json());
const axios = require('axios');
const multer = require('multer');


//defino los models a usar e importo los modelos conectados
const { Expediente, Inspeccion, Ticket, expedienteinspeccion } = require('../db.js'); 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getDbInfo = async () => {
    const infoDB = await Expediente.findAll({
       include:{
           model: Inspeccion,
           atributes: ['numexpediente']
       } 
    })
    return infoDB;
}

const getAllExpedientes = async () =>{
    try{
        const DBinfo = await getDbInfo()
        return DBinfo;
    }catch (err){
        console.log('error trayendo info de la Base de Datos', err)
    }
}

// ********* Sector de GET Y POST

router.get ('/expedientes', async (req,res) => {
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

router.get ('/infracciones', async (req,res) => {
    const numinfracciones = req.query.name;
    const infoTotali = await getAllInfracciones();
    if(numinfracciones) {
        const infraccionesnum = await infoTotal.filter(p => p.numinfraccion.toLowerCase().includes(numinfraccion.toLowerCase()))
        res.status(200).send(infraccionesnum)
        res.status(400).send('No se encuentra el Expediente Requerido')
    }else{
        res.status(200).send(infoTotali)
    }   
})

router.get("/expedientes/:id", async (req, res) => {
    const id = req.params.id;
    const infoTotal = await getAllExpedientes();    
    //console.log (infoTotal)
    if (id){
        const expId = await infoTotal.filter((p) => p.id == id)
        
        console.log(expId)        
        expId.length ? 
                res.status(200).send(expId) : 
                res.status(404).send('NO EXISTE Id del Expediente Requerido')        
    } 
});

router.get("/infracciones/:id", async (req, res) => {
    const id = req.params.id;
    const infoTotal = await getAllInfracciones();    
    //console.log (infoTotal)
    if (id){
        const infId = await infoTotal.filter((p) => p.id == id)
        
        console.log(infId)        
        expId.length ? 
                res.status(200).send(infId) : 
                res.status(404).send('NO EXISTE Id del Expediente Requerido')        
    } 
});


// *************** post **************

const storage = multer.diskStorage({
    destination:(req, res, cb) =>{
      cb(null, './src/uploads') //guarda imagen cruda
      },
    filename:(req, file, cb) => {
        const ext = file.originalname.split('.').pop() // retorna png
        cb(null, `${Date.now()}.${ext}`)
      }
  })

  const upload = multer({storage:storage})
  
  router.post('/upload', upload.single('file'), (req, res) => {    
    res.send ({data:'Imagen Cargada'})
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
