const express = require('express');
const router = express.Router();


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
router.use(express.json());
const axios = require('axios');


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
}

const getallexpedientes = async () =>{
    try{
        const DBinfo = await getDbInfo()
        return DBinfo;
    }catch (err){
        console.log('error trayendo info de la Base de Datos', err)
    }
}



// ********* Sector de GET Y POST

router.get ('/expedientes', async (req,res) => {
    const numexpediente = req.query.numexpediente;
    const infoTotal = await getallexpedientes();
    if(numexpediente) {
        const expedientesnum = await infoTotal.filter(p => p.numexpedientetoLowerCase().includes(numexpediente.toLowerCase()))
    }else{
        res.status(200).send(infoTotal)
        res.status(400).send('No se encuentra el Expediente Requerido')
    }   
})

router.get("/expedientes/:id", async (req, res) => {
    const id = req.params.id;
    const infoTotal = await getallexpedientes();    
    //console.log (infoTotal)
    if (id){
        const expId = await infoTotal.filter((p) => p.id == id)
        
        console.log(expId)        
        expId.length ? 
                res.status(200).send(expId) : 
                res.status(404).send('NO EXISTE Id del Expediente Requerido')        
    } 
});

router.post('/newexpediente', async (req, res) => {

        let {
            numexpediente,
            estado,
            iniciadornomyape,
            domicilio,
            adrema,
            directorobraperitovisor,
            destinoobra,
            zona,
            observaciones,
            permisobraoactainfrac
        } = req.body

        let expedienteCreate = await Expediente.create({
            numexpediente,
            estado,
            iniciadornomyape,
            domicilio,
            adrema,
            directorobraperitovisor,
            destinoobra,
            zona,
            observaciones,
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
        ticket,
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
        ticket,
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
