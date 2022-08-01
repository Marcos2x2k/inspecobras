//Card solo renderiza lo que yo necesito
import React from "react";
import '../styles/Card.css'; // importo los styles de mi Card.css

export default function CardTicket({numticket, iniciador, ubicacion, adrema, directordeobra,destinodelaobra }){
    
    return (
        <div > 
            <div class="detailcontainerlist">
                <div class="header"> 
                    <h3 class="heading">Numero de Ticket:</h3>
                    <h3 class="headingRojo">  {numticket}</h3>
                </div>
                <div class="header">
                    <h3 class="heading">  Iniciador (NyA): </h3>                 
                    <h3 class="headingRojo"> {iniciador}  </h3>  
                </div>
                <div class="header">
                    <h3 class="heading">Ubicación: </h3> 
                    <h3 class="headingRojo"> {ubicacion}</h3> 
                </div>
                <div class="header">
                    <h3 class="heading">Numero Adrema: </h3>
                    <h3 class="headingRojo"> {adrema}</h3> 
                </div>
                <div class="header">
                    <h3 class="heading">Director de Obra: </h3>
                    <h3 class="headingRojo"> {directordeobra}</h3>
                </div>      
                <div class="header">
                    <h3 class="heading">Destino de la Obra: </h3>
                    <h3 class="headingRojo"> {destinodelaobra}</h3>
                </div>  
                <p> </p>
                <img src={require('../images/ticket.png')} alt="img not found" width = "150px"/>
                <h5 class="blanco"> ------------------------------------------------------- </h5>
            </div>
        </div>)
}