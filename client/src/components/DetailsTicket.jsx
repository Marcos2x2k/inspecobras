import React from 'react';// estado, iniciadornomyape, domicilio, adrema, directorobraoperitovisor, destinodeobra, superficieterreno, superficieaconstruir, superficiesubsueloplantabaja, superficieprimerpisoymaspisos, zona, observaciones, permisobraoactainfrac }){ // platform
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsTickets } from "../actions/index";
import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';

import './styles/Card.css';

function DetailsTicket(){
  const navigate = useNavigate();
    // trae del Reducer-index-> CASE (GET_DETAILS_EXPEDIENTE) expedientesDetail
    const allDetailsTickets = useSelector((state) => state.ticketsDetails);   
    console.log ("TICKET DETAIL", allDetailsTickets)
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getDetailsTickets(id));
        window.scrollTo(0, 0);
      },[dispatch,id])

    function myalert() {
      alert("Funcion NO disponible!");
    }
          
      // function handleDelete(p){
      //   p.preventDefault();
      //   console.log(p)
      //   setErrors(validate({
      //     ...getDetailsTickets.id,
      //     [p.target.id]: p.target.value
      //   }));
      //   dispatch(deleteIntimaciones(getDetailsTickets.id)); // input es el payload
      //   alert("Intimación Borrada!!!")
      //   dispatch(getIntimaciones())
      //   navigate('/Home');
      // }
      // console.log(allDetails)
    return (
         
        <div>
            {/* {allDetails[0].length > 0 ? ( */}
            <div>
                <img height="50" src={require('./images/logoMuni.png')}/>               
                
                <h1 className="colorLetrasamarillas">DETALLES DE TICKET SELECCIONADO</h1> 
                           
                <img src={require('./images/separadorpagina.png')}/>
                <br />   
                <Link to='/home'><button>REGRESAR AL MENU PRINCIPAL</button></Link> <label> </label>
                <Link to='/ListTicket'><button>REGRESAR AL LISTADO</button></Link>
                {/* <Link to='/ListTicket'><button>ELIMINAR TICKETS</button></Link> */}
                {/* <button color='primary' onClick={p => { handleDelete(p) }}>ELIMINAR TICKETS</button> <label> </label> */}
                <br /> <br />                    
                
                  <div class="detailcontainer">  
                   <div class="header">               
                    <h3 class="heading"> NUMERO DE TICKET: </h3> 
                    <h3 class="headingRojo"> {allDetailsTickets.numticket}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading"> INICIADOR (N/A): </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.iniciador}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">UBICACIÓN: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.ubicacion}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">ADREMA: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.adrema}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">DIRECTOR DE OBRA: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.directordeobra}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">DESTINO DE OBRA: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.destinodelaobra}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">ZONA: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.zona}</h3>
                  </div> 
                  <div class="header">
                    <h3 class="heading">OBSERVACIONES: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.observaciones}</h3> 
                  </div>
                  <div class="header">
                    <h3 class="heading">PERMISO OBRA NUMERO:  </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.permisodeobranum}</h3>
                  </div> 
                  <div class="header">
                    <h3 class="heading">ACTA INFRACCION NUMERO: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.actasdeinfraccionnum}</h3> 
                  </div>
                  <div class="header">
                    <h3 class="heading">FECHA DE ENTRADA INSPECCIONES: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.fechaentradaainspecciones}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">INSPECTOR: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.inspector}</h3> 
                  </div>
                  <div class="header">
                    <h3 class="heading">FECHA DE INSPECCIÓN: </h3> 
                    <h3 class="headingRojo">{allDetailsTickets.fechainspecccion}</h3> 
                  </div>
                  <div class="header">
                    <h3 class="heading">INTIMACIÓN: </h3>
                    <h3 class="headingRojo">{allDetailsTickets.intimacion}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">INFRACCIONES:</h3>
                    <h3 class="headingRojo"> {allDetailsTickets.infracciones}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">OBSERVACIONES DEL LUGAR:</h3>
                    <h3 class="headingRojo"> {allDetailsTickets.observacioneslugar}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">PASE A:</h3>
                    <h3 class="headingRojo"> {allDetailsTickets.pasea}</h3>
                  </div>
                  <div class="header">
                    <h3 class="heading">FECHA:</h3>
                    <h3 class="headingRojo"> {allDetailsTickets.fecha}</h3>
                  </div>
                  <br/>                  
                  {/* <img className='logoredondo'  src={allDetailsTickets.fotoexpediente} width="300" height="150" /> <br/> */}
                  {/* <img className='logoredondo'  src={require('./images/mirandoplano.jpg')} width="400" height="200" /> <br/>
                  <h5 className='blanco'> --------------------------------------------------------------------------------- </h5>
                    {/* <img src={require('./images/mirandoplano.jpg')} width = "400px" height="270px"/>   */}
                    {/* <img className='logoredondo'  src={require('./images/mirandoplano.jpg')} width="400" height="270" /> */}
                </div>   
                <br /> 
          {/* <button onclick="myalert()">
            Show Alert Message
          </button>           */}
                            
            </div>
            <Button color='primary'> Editar </Button> {"   "}
            <Button color='danger'> Eliminar </Button>
            {/* ) : (
               <div>
                   <h1>CARGANDO...</h1>                  
               </div>
             )}       */}
             
             
                 <br />                  
              <img src={require('./images/separadorpagina.png')}/>
              <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
        </div>
    )
} 

export default DetailsTicket;
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