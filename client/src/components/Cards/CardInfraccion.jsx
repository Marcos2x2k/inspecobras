//Card solo renderiza lo que yo necesito
import React from "react";
import '../styles/Card.css'; // importo los styles de mi Card.css

export default function CardInfraccion({numacta, fechainfraccion, infractor, fotoinfraccion, domicilio }){ // platform
    
    // var genre2= []
    // if (genre) { 
    //     Array.isArray(genre)     
    return (
        <div > 
            <div class="detailcontainerlist">
                <div class="header"> 
                    <h3 class="heading">Numero de Acta:</h3>
                    <h3 class="headingRojo">  {numacta}</h3>
                </div>
                <div class="header">
                    <h3 class="heading">  Fecha de Infracción: </h3>                 
                    <h3 class="headingRojo"> {fechainfraccion}  </h3>  
                </div>
                <div class="header">
                    <h3 class="heading">Infractor (NyA): </h3> 
                    <h3 class="headingRojo"> {infractor}</h3> 
                </div>
                {/* <div class="header">
                    <h3 class="heading">Foto Infracción: </h3>
                    <h3 class="headingRojo"> {fotoinfraccion}</h3> 
                </div> */}
                <div class="header">
                    <h3 class="heading">Domicilio: </h3>
                    <h3 class="headingRojo"> {domicilio}</h3>
                </div>      
                <p> </p>
                <img className='miniaturaimagen' src={fotoinfraccion} alt="img not found" width = "250px"/>
                {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/modules/custom/frontpage_sections/front_varios/icons/consulta-de-infracciones.png?4443" alt="img not found" width = "130px"/> */}
                <h5 class="blanco"> ------------------------------------------------------------------------ </h5>
            </div>
        </div>)
}


// import React from 'react';

// export default function Card({name, image, genre, genres, platform, platforms}){ // platform

//     return (
//         <div> 
//         </div>)

// }