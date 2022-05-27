
import React from 'react';
// import Button from '@material-ui/core/Button'; // importo estilo de boton
// import Button from '@mui/material/Button'; // importo estilo de boton
import Button from '@mui/material/Button';
import './styles/Home.css'; // importo los styles de mi Home.css

//IMPORTO PORQUE USAMOS HOOKS
import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import {useDispatch, useSelector} from 'react-redux'; 
//import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';//Siempre importo las acciones nuevas 

//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import {Link} from 'react-router-dom';

//ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// import Card from './Card';
// import SearchBar from './SearchBar';
// import Paginado from './Paginado';

export default function Home (){ 

    return(
        
        <div>        
            <div>   
                 
                <div>
                    <br/>
                    <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' height="110" alt="to home" />
                
                    <h1 className="colorLetras">Bienvenidos a la App de Sector Inspección de Obras</h1> 
                    {/* <Button variant="contained">CARGAR EXPEDIENTE</Button> */}

                    {/* <Link to= '/ExpedCreate'><button className="selectfont">CARGAR EXPEDIENTE</button></Link> */}
                    
                    <Link to= '/ExpedCreate'><Button  variant="contained" component="span">CARGAR EXPEDIENTE</Button></Link>                    
                    <Link to= '/TicketCreate'><Button  variant="contained" component="span">CARGAR TICKET</Button></Link>
                    <Link to= '/InspecCreate'><Button  variant="contained" component="span">CARGAR INSPECCION</Button></Link>                    
                    <Link to= '/IntimCreate'><Button  variant="contained" component="span">CARGAR INTIMACION</Button></Link>  
                    <br/>
                    <Link to= '/ListExpediente'><button> LISTAR EXPEDIENTES </button></Link> 
                    <label> </label>
                                        
                    <Link to= '/'><Button variant="outlined" color="error">IR A LANZAMIENTO</Button></Link>  
                    <br/><br/>
                </div>
                {/* <br /><br /> */}
                <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
                <br/>
                <img className='logocorrientes' src="https://ciudaddecorrientes.gov.ar/sites/default/files/se_aletica.jpg" width="600" height="300" />
{/*                 
                <br/><br/>
                <label className="selectfont">Numero de Expediente:</label>
                <input
                        type="text"                    
                        name="numexpediente"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br />
                <label className="selectfont">Numero de Adrema:</label>
                <input
                        type="text"                    
                        name="numexpediente"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br />
                <label className="selectfont">Fecha de Inicio:</label>
                <input
                        type="text"                    
                        name="numexpediente"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br />
                <label className="selectfont">Plano Registrado:</label>
                <input
                        type="text"                    
                        name="numexpediente"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /> */}

                {/* <br />  <br /><br /><br />  <br /><br /><br /> */}
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
            <br/>
            <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/>
            <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            </div>
        </div>        
)}