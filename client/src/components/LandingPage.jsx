import React from 'react';
import {Link} from 'react-router-dom';
import './styles/LandingPage.css'; // importo los styles de mi landinpage.css

export default function LandingPage(){
    return(
        <div>
            <br/>
            <img height="110" src={require('./images/logoMuni.png')} alt="to home"/>
            {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                <h1 className="colorLetras">Bienvenidos a la App de Inspeciones Urbanas</h1>            
                
                <Link to = '/home'>     
                    <br/>
                    <img className="logo"  src={require('./images/obras-y-gestion.png')} alt="to home"/>   
                </Link>
            {/* <button src='/Home'>INGRESAR</button>             */}
            <br /><br />  
            {/* <p aling="center">
                ---------------------------------------------------------------------------------------------------------------------------------------
            </p>  */}    
            <br/>
            <img src={require('./images/separadorpagina.png')}/>
            <br/>
            <img src={require('./images/Muni-pie-pagina.png')}/>
            <img src={require('./images/Muni-pie-pagina2.png')}/>
            {/* <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/> */}
            <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            
            <h5><a href="https://www.linkedin.com/in/Marcos-Dacunda/" target="_blank">WebMaster: Marcos A. Dacunda G.</a></h5>            
        </div>
    )
}


{/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png'/> */}
                
            {/* <img src="./images/Muni-pie-pagina2.png" alt="to home" /> */}