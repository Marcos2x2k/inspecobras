
import React from 'react';
// import Button from '@material-ui/core/Button'; // importo estilo de boton
// import Button from '@mui/material/Button'; // importo estilo de boton
// import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Tablet, Container } from 'reactstrap'
import './styles/Home.css'; // importo los styles de mi Home.css
// import NavBar from './NavBar';

//IMPORTO PORQUE USAMOS HOOKS
import { useState, useEffect, Fragment } from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import { useDispatch, useSelector } from 'react-redux';
//Siempre importo las acciones nuevas 
//import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';

//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import { Link } from 'react-router-dom';

//ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// import Card from './Card';
// import SearchBar from './SearchBar';
// import Paginado from './Paginado';

export default function Home() {
    // const expedientes = [
    //     {
    //                     numexpediente: "0920Ñ2020",
    //                     fechainicioentrada:"20/10/2020",
    //                     estado:"P/Insp",
    //                     iniciadornomyape: "Joselo Ortiz",
    //                     domicilio:"Las Heras 2029",
    //                     adrema:"A1-888888-1",
    //                     directorobraoperitovisor:"Sosa Hernan Carlos",
    //                     destinodeobra:"Viv.Familiar",
    //                     superficieterreno:"1000",
    //                     superficieaconstruir:"500",
    //                     superficiesubsueloplantabaja:"500",
    //                     superficieprimerpisoymaspisos:"0",
    //                     zona:"A1",
    //                     observaciones:"",
    //                     permisobraoactainfrac:""
    //     },
    // ]

    return (

        <div>
            <div>

                <div>
                    <a href="/"><img height="80" src={require('./images/logoMuni.png')} /></a><br/><br/>
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' height="50" alt="to home" /> */}

                    <h1 className="colorLetrasamarillas">Menú del Sector de Inspección de Obras</h1>
                    {/* <Button variant="contained">CARGAR EXPEDIENTE</Button> */}
                    {/* <Link to= '/ExpedCreate'><button className="selectfont">CARGAR EXPEDIENTE</button></Link> */}
                    
                    {/* <NavBar
                    /> */}
                    <Link to='/ListExpediente'><Button color='primary'> LISTA EXPEDIENTES </Button></Link> {" - "}
                    <Link to='/ListTicket'><Button color='primary'> LISTA TICKET </Button></Link> {" - "}
                    <Link to='/ListIntimacion'><Button color='danger'>INTIMACIONES</Button></Link>  {" - "}
                    <Link to='/InspecCreate'><Button color='danger'> INFRACCIONES/MULTAS </Button></Link>  {" - "}
                    {/* <Link to='/ExpedCreate'><Button color='danger'>CREAR EXPEDIENTE</Button></Link>  {" - "}                
                    <Link to='/TicketCreate'><Button color='danger'>CREAR TICKET</Button></Link>  {" - "} */}              

                    {/* <img className='logocorrientes' src="https://muchosnegociosrentables.com/wp-content/uploads/2020/11/crear-una-constructora-guia-completa.jpg" width="600" height="300" /> */}
                    

                   

                    {/* <Link to='/ListInspeccion'><Button color='primary'> LISTAR INSPECCIONES </Button></Link> {" - "} */}
                    {/* <Link to='/ListInspeccion'><Button color='primary'> LISTA INSPECCIONES </Button></Link> {" - "} */}
                    


                    <br />
                </div>
                {/* <br /><br /> */}
                <img src={require('./images/separadorpagina.png')} />
                <br />
                <br />
                {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                
                <img className='logocorrientes' src={require('./images/constructor.jpg')} width="550" height="280" />
                <br />
                <br />
                {/* <Link to='/ListExpediente'><Button color='primary'> LISTA EXPEDIENTES </Button></Link> {" - "} */}
                    {/* <Link to='/ListInfraccion'><Button color='primary'> LISTA INFRACCIONES </Button></Link> {" - "} */}
                    {/* <Link to='/Construccion'><Button color='primary'> LISTAR INFRACCIONES </Button></Link> {" - "} */}
                    {/* <Link to='/ListTicket'><Button color='primary'> LISTAR TICKET </Button></Link> {" - "} */}
                    <Link to='/LandingPage'><Button color="success"> IR AL INICIO </Button></Link> {" - "}
                    <Link to='/Estadisticas'><Button color='warning'> Sección Estadisticas </Button></Link>
                <br />
                <img src={require('./images/separadorpagina.png')} />

                {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                <br />
                <a href="tel: 080055556864"><img src={require('./images/Muni-pie-pagina.png')}/></a>
                <a target="_blank" href="https://www.google.com/maps/place/25+de+Mayo+1178,+W3400+BCO,+Corrientes/@-27.4643245,-58.8359019,19z/data=!4m5!3m4!1s0x94456ca5cf8581b3:0xc800c5930b7d65f0!8m2!3d-27.4645143!4d-58.835628"><img src={require('./images/Muni-pie-pagina2.png')}  /></a>
                {/* <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/> */}
                <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            </div>
        </div>
    )
}