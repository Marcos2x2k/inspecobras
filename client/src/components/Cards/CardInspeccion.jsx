//Card solo renderiza lo que yo necesito
import React from "react";
import '../styles/Card.css'; // importo los styles de mi Card.css

export default function CardInspeccion({numexpediente, fechaentradinspec, inspecfecha, inspector, fotoinspeccion, intimacion, infracciones  }){ // platform
    
    // var genre2= []
    // if (genre) { 
    //     Array.isArray(genre)     
    return (
        <div > 
            <div class="detailcontainerlist">
                <div class="header"> 
                    <h3 class="heading">Numero de Expediente:</h3>
                    <h3 class="headingRojo">  {numexpediente}</h3>
                </div>
                <div class="header">
                    <h3 class="heading">  Fecha Entrada Inspección (NyA): </h3>                 
                    <h3 class="headingRojo"> {fechaentradinspec}  </h3>  
                </div>
                <div class="header">
                    <h3 class="heading">Fecha inspección: </h3> 
                    <h3 class="headingRojo"> {inspecfecha}</h3> 
                </div>
                <div class="header">
                    <h3 class="heading">Inspector: </h3>
                    <h3 class="headingRojo"> {inspector}</h3> 
                </div>
                <div class="header">
                    <h3 class="heading">Foto Inspección: </h3>
                    <h3 class="headingRojo"> {fotoinspeccion}</h3>
                </div>  
                <div class="header">
                    <h3 class="heading">Intimacion: </h3>
                    <h3 class="headingRojo"> {intimacion}</h3>
                </div>  
                <div class="header">
                    <h3 class="heading">Infracciones: </h3>
                    <h3 class="headingRojo"> {infracciones}</h3>
                </div>      
                <p> </p>
                <img src="https://ciudaddecorrientes.gov.ar/sites/default/modules/custom/frontpage_sections/front_varios/icons/consulta-de-infracciones.png?4443" alt="img not found" width = "130px"/>
                <h5 class="blanco"> ------------------------------------------------------------------------ </h5>
            </div>
        </div>)
}