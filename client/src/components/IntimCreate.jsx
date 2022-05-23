

import React from 'react';
//import Button from '@material-ui/core/Button'; // importo estilo de boton
import './styles/Home.css'; // importo los styles de mi Home.css
import SearchBar from './SearchBar';

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
                <div><img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" />
                
                    <h1 className="colorLetras">SECCIÓN DE CREACIÓN DE INTIMACIONES</h1>                    
                    
                    <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>                   
                    
                    <Link to= '/Home'><button className="selectfont">Volver Menu Principal</button></Link>  
                </div>
                {/* <br /><br /> */}
                <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
                
                
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
                <br />

                <br />  <br /><br /><br />  <br /><br /><br />
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
            <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            </div>
        </div>        
)}