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
    //console.log(allDetails) 
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getDetailsExpedientes(id));
      },[dispatch,id])
      //console.log(allDetails)
    return (
        <div>
            {allDetails.length > 0 ? (
            <div>
                <br /><br />
                <Link to='/home'><button>REGRESAR AL HOME</button></Link>
                <br /><br /><br />

                     {/* <h1 class="heading">{allDetails.numexpediente}</h1> */}
                    {/* <img className="card" src={allDetails[0].image} alt="img not found"/> */}
                    {/* //fecha lanzamiento = released */}
                    <h3 class="heading"> NUMERO EXPEDIENTE: {allDetails.numexpediente}</h3> 
                    <h3 class="heading"> FECHA INICIO ENTRADA: {allDetails.fechainicioentrada}</h3>
                    <h3 class="heading">ESTADO: {allDetails.estado}</h3>
                    <h3 class="heading">INICIADOR (NyA): {allDetails.iniciadornomyape}</h3>
                    <h3 class="heading">ADREMA: {allDetails.adrema}</h3>
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
        </div>
    )
} 

export default Details;
// var genre2= []
// if (genre) { 
//     Array.isArray(genre)     
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