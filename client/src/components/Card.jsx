//Card solo renderiza lo que yo necesito
import React from "react";
import './styles/Card.css'; // importo los styles de mi Card.css

export default function Card({numexpediente, fechainicioentrada, adrema, estado, }){ // platform
    
    // var genre2= []
    // if (genre) { 
    //     Array.isArray(genre)     
    return (
        <div>   
            <h2 class="heading">{numexpediente}</h2>
            <h2 class="heading">{adrema}</h2>  
            <h2 class="heading">{fechainicioentrada}</h2> 
            <h2 class="heading">{estado}</h2>            
            {/* <img src={image} alt="img not found" width = "400px" height="270px"/> */}
            <h5> ------- </h5>
        </div>)
}


// import React from 'react';

// export default function Card({name, image, genre, genres, platform, platforms}){ // platform

//     return (
//         <div> 
//         </div>)

// }