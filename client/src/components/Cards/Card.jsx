//Card solo renderiza lo que yo necesito
import React from "react";
import '../styles/Card.css'; // importo los styles de mi Card.css

export default function Card({numexpediente, fechainicioentrada, adrema, estado, iniciadornomyape, fotoexpediente }){ // platform
    
  
    return (
        <div > 
            <div class="detailcontainerlist">
                <div class="header"> 
                    <h3 class="heading">EXPEDIENTE:</h3>
                    <h3 class="headingRojo">  {numexpediente}</h3>
                </div>
                <div class="header">
                    <h3 class="heading">INICIO ENTRADA: </h3> 
                    <h3 class="headingRojo"> {fechainicioentrada}</h3> 
                </div>
                <div class="header">
                    <h3 class="heading">INICIADOR: </h3>
                    <h3 class="headingRojo"> {iniciadornomyape}</h3>
                </div>                 
                <div class="header">
                    <h3 class="heading">  ADREMA: </h3>                 
                    <h3 class="headingRojo"> {adrema}  </h3>  
                </div>                                
                <div class="header">
                    <h3 class="heading">ESTADO: </h3>
                    <h3 class="headingRojo"> {estado}</h3> 
                </div>                 
                <p> </p>
                <img className='miniaturaimagen' src={fotoexpediente} alt="Imagen No Disponible" width = "200px" height="100px"/>
                
                {/* <img className='miniaturaimagen' src={fotoexpediente} alt="Imagen No Disponible" width = "280px" height="150px"/> */}
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyWAaTFapVC--3RYbSrGnlOPepq00cPmRZw&usqp=CAU" alt="img not found" width = "200px" height="100px"/> */}
                <h5 class="blanco"> ----------------------------------------------------------------------------- </h5>
            </div>
        </div>)
}