
import React from 'react';
// import Button from '@material-ui/core/Button'; // importo estilo de boton
// import Button from '@mui/material/Button'; // importo estilo de boton
// import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Tablet, Container } from 'reactstrap'
import './styles/Home.css'; // importo los styles de mi Home.css

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
                    <img height="50" src={require('./images/logoMuni.png')} />
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' height="50" alt="to home" /> */}

                    <h1 className="colorLetrasamarillas">Menú del Sector de Inspección de Obras</h1>
                    {/* <Button variant="contained">CARGAR EXPEDIENTE</Button> */}
                    {/* <Link to= '/ExpedCreate'><button className="selectfont">CARGAR EXPEDIENTE</button></Link> */}

                    <Link to='/ListExpediente'><Button color='primary'> LISTAR EXPEDIENTES </Button></Link> {" - "}
                    <Link to='/ListInfraccion'><Button color='primary'> LISTAR INFRACCIONES </Button></Link> {" - "}
                    <Link to='/ListTicket'><Button color='primary'> LISTAR TICKET </Button></Link> {" - "}
                    <Link to='/ListInspeccion'><Button color='primary'> LISTAR INSPECCIONES </Button></Link>


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
                <Link to='/ExpedCreate'><Button color='danger'>CARGAR EXPEDIENTE</Button></Link>  {" - "}
                <Link to='/IntimCreate'><Button color='danger'>CARGAR INFRACCIONES</Button></Link>  {" - "}
                <Link to='/TicketCreate'><Button color='danger'>CARGAR TICKET</Button></Link>  {" - "}
                <Link to='/InspecCreate'><Button color='danger'>CARGAR INSPECCION</Button></Link>  {" - "}

                {/* <img className='logocorrientes' src="https://muchosnegociosrentables.com/wp-content/uploads/2020/11/crear-una-constructora-guia-completa.jpg" width="600" height="300" /> */}

                <Link to='/'><Button color="success"> IR AL INICIO </Button></Link>
                <br />
                <img src={require('./images/separadorpagina.png')} />

                {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                <br />
                <img src={require('./images/Muni-pie-pagina.png')} />
                <img src={require('./images/Muni-pie-pagina2.png')} />
                {/* <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/> */}
                <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            </div>
        </div>
    )
}