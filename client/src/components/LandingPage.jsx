import React from 'react';
import {Link} from 'react-router-dom';
import './styles/LandingPage.css'; // importo los styles de mi landinpage.css
import { Button, Tablet, Container } from 'reactstrap'


export default function LandingPage(){
    return(
        <div>
            <br/>
            <img height="90" src={require('./images/logoMuni.png')} alt="to home"/> 
            <label className='blanco'> ----------------- </label>
            <img height="110" src={require('./images/logo redondo muni.png')} alt="to home"/>
            <br/>
            {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
            <h1 className="colorLetras">Bienvenidos a la App de Inspeciones Urbanas</h1>            
            <img src={require('./images/separadorpagina.png')}/><br/>
            <Link to = '/home'>     
                <br/>
                <img className="logo"  src={require('./images/obras-y-gestion.png')} alt="to home"/>   
            </Link>
            <br /> <br /> 
            <Button color='primary' src='/Home'>LOGIN</Button>            
            <br />  
            {/* <p aling="center">
                ---------------------------------------------------------------------------------------------------------------------------------------
            </p>  */}    
            <br/>
            <img src={require('./images/separadorpagina.png')}/>
            <br/>
            <a href="tel: 080055556864"><img src={require('./images/Muni-pie-pagina.png')}/></a>
            <a target="_blank" href="https://www.google.com/maps/place/25+de+Mayo+1178,+W3400+BCO,+Corrientes/@-27.4643245,-58.8359019,19z/data=!4m5!3m4!1s0x94456ca5cf8581b3:0xc800c5930b7d65f0!8m2!3d-27.4645143!4d-58.835628"><img src={require('./images/Muni-pie-pagina2.png')}  /></a>
            {/* <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/> */}
            <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            
            <p><a href="https://www.linkedin.com/in/Marcos-Dacunda/" target="_blank">WebMaster: Marcos A. Dacunda G.</a></p>            
        </div>
    )
}


{/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png'/> */}
                
            {/* <img src="./images/Muni-pie-pagina2.png" alt="to home" /> */}