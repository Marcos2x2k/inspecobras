import React from 'react';
import {Link} from 'react-router-dom';
import './styles/LandingPage.css'; // importo los styles de mi landinpage.css

export default function LandingPage(){
    return(
        <div>
            <br/>
            <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" />
                <h1 className="colorLetras">Página de Inspeciones Urbanas</h1>            
                
                <Link to = '/home'>     
                <br />
                {/* <img className="logo" src="https://sistemas.ciudaddecorrientes.gov.ar/suinda/1.0/img/logo_grande.gif?av=1.0.0" alt="to home" /> */}
                {/* <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/06/Escudo_de_la_Municipalidad_de_Corrientes.jpg" alt="to home" /> */}
                
                <img className="logo" src="data:image/jpeg;base64,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" alt="to home" />
                        
            </Link>
            {/* <button src='/Home'>INGRESAR</button>             */}
            <br /><br /><br />  
            {/* <p aling="center">
                ---------------------------------------------------------------------------------------------------------------------------------------
            </p>  */}    
            <br/>
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
            <br/>
            <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/>
            <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            
        </div>
    )
}


{/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png'/> */}
                
            {/* <img src="./images/Muni-pie-pagina2.png" alt="to home" /> */}