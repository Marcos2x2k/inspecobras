import React from 'react';// estado, iniciadornomyape, domicilio, adrema, directorobraoperitovisor, destinodeobra, superficieterreno, superficieaconstruir, superficiesubsueloplantabaja, superficieprimerpisoymaspisos, zona, observaciones, permisobraoactainfrac }){ // platform
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsExpedientes } from "../actions/index";
import { Link } from "react-router-dom";

import './styles/Card.css';

function Details(){
    // trae del Reducer-index-> CASE (GET_DETAILS_EXPEDIENTE) expedientesDetail
    const allDetails = useSelector((state) => state.expedientesDetails);    
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getDetailsExpedientes(id));
        window.scrollTo(0, 0);
      },[dispatch,id])
      
    //   console.log(allDetails)
    return (
         
        <div>
            {allDetails.length > 0 ? (
            <div>
                {/* <img height="50" src={require('./images/logoMuni.png')}/>                */}
                
                {/* <h1 className="colorLetrasamarillas">DETALLES DE EXPEDIENTE SELECCIONADO</h1>  */}
                {/* <img src={require('./images/separadorpagina.png')}/> */}
                {/* <br /> */}
                <h1 className="colorLetrasamarillas">DETALLES DE EXPEDIENTE SELECCIONADO</h1> 
                           
                <img src={require('./images/separadorpagina.png')}/>
                <br />   
                <Link to='/home'><button>REGRESAR AL MENU PRINCIPAL</button></Link> <label> </label>
                <Link to='/ListExpediente'><button>REGRESAR AL LISTADO</button></Link>
                <br /> 
                
                
                <br />
                {/* <h1 className="colorLetrasamarillas">DETALLES DE EXPEDIENTE SELECCIONADO</h1> 
                <img src={require('./images/separadorpagina.png')}/>
                <br /><br /> */}

                {/* <h1 class="heading">{allDetails[0].name}</h1> */}
                {/* <img className="card" src={allDetails[0].image} alt="img not found"/> */}
                    {/* //fecha lanzamiento = released */}
                
                
                  <div class="detailcontainer">  
                  <div class="header">               
                    <h3 class="heading"> NUMERO EXPEDIENTE: </h3> 
                    <h3 class="headingRojo"> {allDetails[0].numexpediente}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading"> FECHA INICIO ENTRADA: </h3> 
                    <h3 class="headingRojo">{allDetails[0].fechainicioentrada}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">ESTADO: </h3> 
                    <h3 class="headingRojo">{allDetails[0].estado}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">INICIADOR (NyA): </h3> 
                    <h3 class="headingRojo">{allDetails[0].iniciadornomyape}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">ADREMA: </h3> 
                    <h3 class="headingRojo">{allDetails[0].adrema}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">DIRECTOS DE OBRA: </h3> 
                    <h3 class="headingRojo">{allDetails[0].directorobraoperitovisor}</h3>
                  </div> 
                  <div class="header">
                    <h3 class="heading">DESTINO DE OBRA: </h3> 
                    <h3 class="headingRojo">{allDetails[0].destinodeobra}</h3> 
                  </div>
                  <div class="header">
                    <h3 class="heading">SUP. TERRENO:  </h3> 
                    <h3 class="headingRojo">{allDetails[0].superficieterreno}</h3>
                  </div> 
                  <div class="header">
                    <h3 class="heading">SUP. A CONSTRUIR: </h3> 
                    <h3 class="headingRojo">{allDetails[0].superficieaconstruir}</h3> 
                  </div>
                  <div class="header">
                    <h3 class="heading">SUP. SUELO P.B.: </h3> 
                    <h3 class="headingRojo">{allDetails[0].superficiesubsueloplantabaja}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">SUP. SUELO 1º PISO O PISOS: </h3> 
                    <h3 class="headingRojo">{allDetails[0].superficieprimerpisoymaspisos}</h3> 
                  </div>
                  <div class="header">
                    <h3 class="heading">ZONA: </h3> 
                    <h3 class="headingRojo">{allDetails[0].zona}</h3> 
                  </div>
                  <div class="header">
                    <h3 class="heading">OBSERVACIONES: </h3>
                    <h3 class="headingRojo">{allDetails[0].observaciones}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">PERMISO OBRA/ACTA INFRACCIÓN: </h3>
                    <h3 class="headingRojo"> {allDetails[0].permisobraoactainfrac}</h3>
                  </div>
                  <br/>                  
                  <img className='logoredondo'  src={allDetails[0].fotoexpediente} width="400" height="200" /> <br/>
                  {/* <img className='logoredondo'  src={require('./images/mirandoplano.jpg')} width="400" height="200" /> <br/> */}
                  <h5 className='blanco'> --------------------------------------------------------------------------------- </h5>
                    {/* <img src={require('./images/mirandoplano.jpg')} width = "400px" height="270px"/>   */}
                    {/* <img className='logoredondo'  src={require('./images/mirandoplano.jpg')} width="400" height="270" /> */}
                </div>            
            </div>
            ) : (
                <div>
                    <h1>CARGANDO...</h1>                  
                </div>
            )}
             
             
                 <br />                  
              <img src={require('./images/separadorpagina.png')}/>
              <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
        </div>
    )
} 

export default Details;
//     // var genre2= []
//     // if (genre) { 
//     //     Array.isArray(genre)     
//     return (
//         <div>   
//             <h2 >{numexpediente}</h2> 
//             <h2 >{fechainicioentrada}</h2> 
//             <h2 >{estado}</h2> 
//             <h2 >{iniciadornomyape}</h2> 
//             <h2 >{domicilio}</h2> 
//             <h2 >{adrema}</h2> 
//             <h2 >{directorobraoperitovisor}</h2> 
//             <h2 >{destinodeobra}</h2> 
//             <h2 >{superficieterreno}</h2> 
//             <h2 >{superficieaconstruir}</h2> 
//             <h2 >{superficiesubsueloplantabaja}</h2> 
//             <h2 >{superficieprimerpisoymaspisos}</h2> 
//             <h2 >{zona}</h2> 
//             <h2 >{observaciones}</h2> 
//             <h2 >{permisobraoactainfrac}</h2> 
//             {/* <img src={image} alt="img not found" width = "400px" height="270px"/> */}
//             <h5> ------- </h5>
//         </div>)
// }