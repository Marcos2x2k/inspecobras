//Card solo renderiza lo que yo necesito
import React from "react";
import './styles/Card.css'; // importo los styles de mi Card.css

export default function Card({numexpediente, fechainicioentrada, adrema, estado, iniciadornomyape }){ // platform
    
    // var genre2= []
    // if (genre) { 
    //     Array.isArray(genre)     
    return (
        <div>   
            <h2 class="headingRojo">EXPEDIENTE: {numexpediente}</h2>
            <h2 class="heading">ADREMA: {adrema}</h2>  
            <h2 class="heading">INICIO ENTRADA: {fechainicioentrada}</h2> 
            <h2 class="heading">ESTADO: {estado}</h2> 
            <h2 class="heading">INICIADOR: {iniciadornomyape}</h2>           
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyWAaTFapVC--3RYbSrGnlOPepq00cPmRZw&usqp=CAU" alt="img not found" width = "200px" height="100px"/>
            <h5> ----------------------------------------------------------------- </h5>
        </div>)
}


// import React from 'react';

// export default function Card({name, image, genre, genres, platform, platforms}){ // platform

//     return (
//         <div> 
//         </div>)

// }