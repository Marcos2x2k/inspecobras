

import React from 'react';
//import Button from '@material-ui/core/Button'; // importo estilo de boton
import './styles/Home.css'; // importo los styles de mi Home.css
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';

//IMPORTO PORQUE USAMOS HOOKS
import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import {useDispatch, useSelector} from 'react-redux'; 
//import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';//Siempre importo las acciones nuevas 

//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import {Link} from 'react-router-dom';

//ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// import Card from './Card';
// import SearchBar from './SearchBar';
// import Paginado from './Paginado';

export default function Home (){ 

    return(
        
        <div>        
            <div>             
                <div><img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" />
                
                    <h1 className="colorLetras">SECCIÓN DE CREACIÓN DE EXPEDIENTES</h1>                    
                    
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    
                    <Link to= '/Home'><Button variant="contained" component="span">Volver Menu Principal</Button></Link>  
                    <br/><br/>
                </div>
                {/* <br /><br /> */}
                <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>

                <form>
                        <fieldset>
                <br/><br/>
                <label className="selectfont">Numero de Expediente:</label>
                <input
                        type="text"                                            
                        name="numexpediente"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont">Fecha Inicio/Entrada:</label>
                <input
                        type="text"                    
                        name="fechainicioentrada"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont">Estado:</label>
                <input
                        type="text"                    
                        name="estado"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont">Iniciador (nombre y apellido):</label>
                <input
                        type="text"                    
                        name="iniciadornomyape"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont">Domicilio:</label>
                <input
                        type="text"                    
                        name="domicilio"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont">Numero de Adrema:</label>
                <input
                        type="text"                    
                        name="adrema"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont">Director de obra/Perito visor:</label>
                <input
                        type="text"                    
                        name="directorobraperitovisor"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont">Destino de Obra:</label>
                <input
                        type="text"                    
                        name="destinoobra"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont">Superficie Terreno:</label>
                <input
                        type="text"                    
                        name="superficieterreno"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont">Superficie a Construir:</label>
                <input
                        type="text"                    
                        name="superficieaconstruir"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont">Superficie SubSuelo/Planta Baja:</label>
                <input
                        type="text"                    
                        name="superficiesubsueloplantabaja"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont">Superficie 1º piso/más pisos:</label>
                <input
                        type="text"                    
                        name="superficieprimerpisoymaspisos"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont">Zona:</label>
                <input
                        type="text"                    
                        name="zona"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont">Observaciones:</label>
                <input
                        type="text"                    
                        name="observaciones"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br/><br/>
                <label className="selectfont">Permiso Obra/Acta Infracción:</label>
                <input
                        type="text"                    
                        name="permisobraoactainfrac"
                        // value= {input.name}
                        // onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br />
                        </fieldset>
                </form>

                <br />  <br /><br /><br /> 
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
            <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            </div>
        </div>        
)}

// ******** parte original para mejorar ******


// import React from 'react';
// import {Navigate, useNavigate} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import {useState, useEffect} from 'react';

// export default function newExpediente (){

//     const [input, setInput] = useState({
//         numexpediente:"",
//         estado:"",
//         iniciadornomyape:"",
//         domicilio:"",
//         adrema:"",
//         directorobraperitovisor:"",
//         destinoobra:"",
//         zona:"",
//         observaciones:"",
//         permisobraoactainfrac:""
//     })
//     const [errors, setErrors] = useState({});

//     function validate(input){
//     let errors = {};
//     if (input.numexpediente){
//         errors.numexpediente = 'requiere un Nº de Expediente'
//     } else if (input.adrema){
//         errors.adrema = 'Se Requiere Adrema'
//     }
//     }
//     function handleSubmit(p){
//         p.preventDefault();
//         setErrors(validate({
//             ...input,
//             [p.target.nuxexpediente]:p.target.value
//         }))
//         dispatch(input)
//         alert("Expediente Creado")
//         setInput ({
//             numexpediente:"",
//             estado:"",
//             iniciadornomyape:"",
//             domicilio:"",
//             adrema:"",
//             directorobraperitovisor:"",
//             destinoobra:"",
//             zona:"",
//             observaciones:"",
//             permisobraoactainfrac:""
//         })
//         Navigate('/home');
//     }

//     return (      
//         <div>
//         <div>                        
//             <div>
//                 <h1>** Crear Nuevo Expediente **</h1>
//             </div>
//         </div>   
            
//         <form onSubmit={(p) => handleSubmit(p)} >
//                 <div>
//                     <div>
//                         <label>Numero de Expediente:</label>
//                         <input
//                         type="text"                    
//                         name="numexpediente"
//                         value= {input.numexpediente}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                         {errors.name && (<p>{errors.numexpediente}</p>
//                         )}   
//                     </div>             
//                     <br/> 
//                 </div> 
//         </form> 
//         </div>
//     )
// }
