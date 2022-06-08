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
    console.log(allDetails) 
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getDetailsExpedientes(id));
      },[dispatch,id])

      console.log(allDetails)
    return (
        <div>
            {allDetails.length > 0 ? (
            <div>
                <img height="50" src={require('./images/logoMuni.png')}/>
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' height="50" alt="to home" /> */}
                
                    <h1 className="colorLetrasamarillas">DETALLES DE EXPEDIENTE SELECCIONADO</h1> 
                <Link to='/home'><button>REGRESAR AL HOME</button></Link>
                <br />
                <img src={require('./images/separadorpagina.png')}/>
                <br /><br />

                <h1 class="heading">{allDetails[0].name}</h1>
                {/* <img className="card" src={allDetails[0].image} alt="img not found"/> */}
                    {/* //fecha lanzamiento = released */}
                    <h3 class="heading"> NUMERO EXPEDIENTE: {allDetails[0].numexpediente}</h3> 
                    <h3 class="heading"> FECHA INICIO ENTRADA: {allDetails[0].fechainicioentrada}</h3>
                    <h3 class="heading">ESTADO: {allDetails[0].estado}</h3>
                    <h3 class="heading">INICIADOR (NyA): {allDetails[0].iniciadornomyape}</h3>
                    <h3 class="heading">ADREMA: {(allDetails[0].adrema)}</h3>
                    <h2 class="heading">DIRECTOS DE OBRA: {(allDetails[0].directorobraoperitovisor)}</h2> 
                    <h2 class="heading">DESTINO DE OBRA: {(allDetails[0].destinodeobra)}</h2> 
                    <h2 class="heading">SUP. TERRENO: {(allDetails[0].superficieterreno)}</h2> 
                    <h2 class="heading">SUP. A CONSTRUIR: {(allDetails[0].superficieaconstruir)}</h2> 
                    <h2 class="heading">SUP. SUELO P.B.: {(allDetails[0].superficiesubsueloplantabaja)}</h2> 
                    <h2 class="heading">SUP. SUELO 1º PISO O PISOS:  {(allDetails[0].superficieprimerpisoymaspisos)}</h2>  
                    <h2 class="heading">ZONA: {(allDetails[0].zona)}</h2> 
                    <h2 class="heading">OBSERVACIONES:  {(allDetails[0].observaciones)}</h2> 
                    <h2 class="heading">PERMISO OBRA/ACTA INFRACCIÓN:  {(allDetails[0].permisobraoactainfrac)}</h2> 
                    {/* <img src={image} alt="img not found" width = "400px" height="270px"/> */}



                    {/* <h3 class="heading">PLATAFORMAS: {allDetails[0].platforms
                        ? allDetails[0].platform.map((p) => p + ", ")
                        : allDetails[0].platforms.map((p) => p + ", ")}</h3>  */}
                    {/* <h3>{allDetails[0].genre
                    ? allDetails[0].genre
                    : allDetails[0].genres?.map((p) => p.name + " ")}
                    </h3> */}
                    {/* <h3>{allDetails[0].platform
                        ? allDetails[0].platform
                        : allDetails[0].platforms?.map((p) => p.name + " ")}
                    </h3>               */}
            </div>
            ) : (
                <div>
                    <h1>CARGANDO...</h1>                  
                </div>
              )}
              <br />  <br /><br /><br />                 
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