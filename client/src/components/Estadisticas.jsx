
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

export default function Estadisticas() {
    

    return (

        <div>
            <div>

                <div>
                    <a href="/Home"><img height="60" src={require('./images/logoMuni.png')} /></a>
                    <br />
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' height="50" alt="to home" /> */}
                    <img className='logocorrientes' src={require('./images/statistics.jpg')} width="180" />
                    <br /><br />
                    <h1 className="colorLetrasamarillas">Sección de Estadisticas</h1>
                    {/* <Button variant="contained">CARGAR EXPEDIENTE</Button> */}
                    {/* <Link to= '/ExpedCreate'><button className="selectfont">CARGAR EXPEDIENTE</button></Link> */}

                    <Link to='/Construccion'><Button color='warning'> Estadisticas Expedientes </Button></Link> {" - "}
                    <Link to='/Construccion'><Button color='primary'> Estadisticas Infracciones </Button></Link> {" - "}
                    <Link to='/Construccion'><Button color='warning'> Estadisticas Ticket </Button></Link> {" - "}
                    <Link to='/Construccion'><Button color='primary'> Estadisticas Inspecciones </Button></Link> {" - "} 
                    <Link to='/Home'><Button color="success"> IR AL MENU </Button></Link>                   
                    <br/><br/>
                    <select>                
                            <option value="" selected disabled hidden>Expedientes Años</option>                
                            <option value="r20">2020</option>
                            <option value="r21">2021</option>
                            <option value="r22">2022</option>
                            {/* <option value="api">Api</option> */}
                    </select>  
                    {"  --   "}
                    <select>                
                            <option value="" selected disabled hidden>Inspecciones Años</option>                
                            <option value="r20">2020</option>
                            <option value="r21">2021</option>
                            <option value="r22">2022</option>
                            {/* <option value="api">Api</option> */}
                    </select>  
                    {"  --   "}
                    <select>                
                            <option value="" selected disabled hidden>Intimaciones Años</option>                
                            <option value="r20">2020</option>
                            <option value="r21">2021</option>
                            <option value="r22">2022</option>
                            {/* <option value="api">Api</option> */}
                    </select> 
                    {"  --   "}
                    <select>                
                            <option value="" selected disabled hidden>Infracciones Años</option>                
                            <option value="r20">2020</option>
                            <option value="r21">2021</option>
                            <option value="r22">2022</option>
                            {/* <option value="api">Api</option> */}
                    </select> 
                    {"  --   "}
                    <select>                
                            <option value="" selected disabled hidden>Tickets Años</option>                
                            <option value="r20">2020</option>
                            <option value="r21">2021</option>
                            <option value="r22">2022</option>
                            {/* <option value="api">Api</option> */}
                    </select> 
                    

                    

                    <br />
                </div>                
                
                <img src={require('./images/separadorpagina.png')} />
                <br />
                <br />
                {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
             
                
                <label>---------------------------------------------------------------------------------</label>
                <br />
                <img src={require('./images/estadistica1.jpg')} width="550" />
                <img src={require('./images/estadistica2.jpg')} width="550" />
                <br />
                <label>---------------------------------------------------------------------------------</label>
                
                <br />
                <br />
                {/* <Link to='/'><Button color='danger'>CARGAR EXPEDIENTE</Button></Link>  {" - "}
                <Link to='/'><Button color='danger'>CARGAR INFRACCIONES</Button></Link>  {" - "}
                <Link to='/'><Button color='danger'>CARGAR TICKET</Button></Link>  {" - "}
                <Link to='/'><Button color='danger'>CARGAR INSPECCION</Button></Link>  {" - "} */}

                {/* <img className='logocorrientes' src="https://muchosnegociosrentables.com/wp-content/uploads/2020/11/crear-una-constructora-guia-completa.jpg" width="600" height="300" /> */}

                
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