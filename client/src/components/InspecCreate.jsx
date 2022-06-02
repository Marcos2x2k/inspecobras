import React from 'react';
//import Button from '@material-ui/core/Button'; // importo estilo de boton
import './styles/Creates.css'; // importo los styles de mi Home.css
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';

//IMPORTO PORQUE USAMOS HOOKS
import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import {useDispatch, useSelector} from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import {postExpediente} from '../actions';

//import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';//Siempre importo las acciones nuevas 

//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import {Link} from 'react-router-dom';

//ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// import Card from './Card';
// import SearchBar from './SearchBar';
// import Paginado from './Paginado';

export default function Home (){ 
        const [errors, setErrors] = useState({});
        const dispatch = useDispatch();    
        const navigate = useNavigate();

        //------------- PARTE DE VALIDACIONES ---------------

         function validate(input){
                let errors ={};
                if (!input.name) {
                        errors.name = 'Requiere Número Inspección';
                }else if (!input.description) {
                        errors.description = 'Requiere Fecha Inicio/Entrada'   
                return errors;
                };
        }
        const [input, setInput] = useState({            
            numexpediente: "",
            fechaentradinspec:"",
            inspecfecha:"",
            inspector: "",
            fotoinspeccion:"",
            intimacion:"",
            infracciones:"",
            observaciones:"",
            paseanumdestino:"",
            fecha:"",
            pasea:"",
            fechapasea:"",   
        })

//     //------------- PARTE DE HANDLES ---------------------
        function handleChange(p) { // va a  ir modificando cuando cambien los input
                setInput({
                    ...input,
                    [p.target.name] : p.target.value  // VER PORQUE BLOQUEA 24-5-22
                })
                setErrors(validate({
                    ...input,
                    [p.target.fechainicioentrada] : p.target.value
                }))
                console.log(input)
         }

        function handleSelect(p){
                setInput({
                ...input,
                //genre:[...input.genre, p.target.value] //para el array de Generos q concatene las selecciones
                })
            }
            function handleDelete(p){
                setInput({
                    ...input,
                    // va guardando en el arreglo todo lo que voy eligiendo de generos linea 42
                    //genre: input.genre.filter (occ => occ !== p)
                })
            }  
        function handleSubmit(p) {
                p.preventDefault();
                //console.log(p)
                setErrors(validate({
                    ...input,
                    [p.target.numexpediente]:p.target.value
                }));        
                dispatch(postExpediente(input)); // input es el payload
                alert ("Expediente Creado!!!")
                setInput({ // seteo el input a cero
                    numexpediente: "",
                    fechaentradinspec:"",
                    inspecfecha:"",
                    inspector: "",
                    fotoinspeccion:"",
                    intimacion:"",
                    infracciones:"",
                    observaciones:"",
                    paseanumdestino:"",
                    fecha:"",
                    pasea:"",
                    fechapasea:"",
                })
                // history.push('/home')
                navigate('/home');
            } 
    return(
        
        <div>        
            <div>             
                <div>
                    <img height="50" src={require('./images/logoMuni.png')}/> 
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                
                    <h1 className="colorLetrasGris">SECCIÓN DE CREACIÓN DE INSPECCIONES</h1>                    
                    
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    
                    <Link to= '/Home'><button variant="contained" component="span">Volver Menu Principal</button></Link>  
                    <br/><br/>
                </div>
                {/* <br /><br /> */}
                <img src={require('./images/separadorpagina.png')}/>
                {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                           
                <form onSubmit={(p) => handleSubmit(p)} >
                 <div>
                      <div>
                        <br/><br/>
                        <label className='selectfont'> Nº de Expediente: </label>
                        <input
                        type="text" 
                        value= {input.numexpediente}                                           
                        name="numexpediente"
                        size="40"
                        placeholder="nnnn/l/aaaa"                        
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                        {/* <br /> */}                
                        <label className='selectfont'>  Fecha de Entrada a Inspección: </label>
                        <input
                        type="text"                    
                        name="fechaentradinspec"
                        size="10"
                        placeholder="dd/mm/aaaa"
                        value= {input.fechaentradinspec}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label> Fecha de inspección:  </label>
                <input
                        type="text"                    
                        name="inspecfecha"
                        value= {input.inspecfecha}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Inspector (nombre y apellido): </label>
                <input
                        type="text"                    
                        name="inspector"
                        value= {input.inspector}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont"> Fotos de Inspeccion: </label>
                <input
                        type="text"                    
                        name="fotoinspeccion"
                        value= {input.fotoinspeccion}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Cantidad de Infracciones: </label>
                <input
                        type="text"                    
                        name="infracciones"
                        value= {input.infracciones}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont"> Pasea a Nº de destino: </label>
                <input
                        type="text"                    
                        name="paseanumdestino"
                        value={input.paseanumdestino}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Fecha: </label>
                <input
                        type="text"                    
                        name="fecha"
                        value= {input.fecha}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont"> Pase a: </label>
                <input
                        type="text"                    
                        name="pasea"
                        value= {input.pasea}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Fecha del Pase: </label>
                <input
                        type="text"                    
                        name="fechapasea"
                        value= {input.fechapasea}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />                
                <br />
                <label className="selectfont"> Observaciones: </label>
                <textarea rows="4" cols="50"                 
                        name="observaciones"
                        value= {input.observaciones}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                />                
                <br/><br/><br/>                
                <button type='submit'> Crear Intimación! </button>
                <input type='reset'></input>
                </div>
                </div>  
        </form>
        <script>
                document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
                if(e.keyCode == 13) {
                        e.preventDefault();
                }
                }))
                });
        </script>

                <br />  <br /><br /><br />                 
                <img src={require('./images/separadorpagina.png')}/>
                <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            </div>
        </div>        
)}


// import React from 'react';
// //import Button from '@material-ui/core/Button'; // importo estilo de boton
// import './styles/Home.css'; // importo los styles de mi Home.css
// import SearchBar from './SearchBar';

// //IMPORTO PORQUE USAMOS HOOKS
// import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
// import {useDispatch, useSelector} from 'react-redux'; 
// //import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';//Siempre importo las acciones nuevas 

// //LINK nos sirve para poder movernos por nuestra aplicación
// //más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
// import {Link} from 'react-router-dom';

// //ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// // import Card from './Card';
// // import SearchBar from './SearchBar';
// // import Paginado from './Paginado';

// export default function Home (){ 

//     return(
        
//         <div>        
//             <div>             
//                 <div><img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" />
                
//                     <h1 className="colorLetras">SECCIÓN DE CREACIÓN DE INSPECCIONES</h1>                    
                    
//                     <select className="selectfont">
//                         <option value="" selected disabled hidden>ORDENAR</option>                
//                         <option value='asc'>Fecha</option>
//                         <option value='desc'>Estado</option>
//                         <option value='desc'>Fecha Inicio Expediente</option>
//                         <option value='desc'>Fecha Plano Registrado</option>
//                     </select>                   
                    
//                     <Link to= '/Home'><button className="selectfont">Volver Menu Principal</button></Link>   
//                 </div>
//                 {/* <br /><br /> */}
//                 <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
                
                
//                 <br/><br/>
//                 <label className="selectfont">Numero de Expediente:</label>
//                 <input
//                         type="text"                    
//                         name="numexpediente"
//                         // value= {input.name}
//                         // onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br />
//                 <label className="selectfont">Numero de Adrema:</label>
//                 <input
//                         type="text"                    
//                         name="numexpediente"
//                         // value= {input.name}
//                         // onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br />
//                 <label className="selectfont">Fecha de Inicio:</label>
//                 <input
//                         type="text"                    
//                         name="numexpediente"
//                         // value= {input.name}
//                         // onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br />
//                 <label className="selectfont">Plano Registrado:</label>
//                 <input
//                         type="text"                    
//                         name="numexpediente"
//                         // value= {input.name}
//                         // onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br />

//                 <br />  <br /><br /><br />  <br /><br /><br />
//             <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
//             <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
//             </div>
//         </div>        
// )}

// // ******** parte original para mejorar ******





// // import React from 'react';
// // import {Navigate, useNavigate} from 'react-router-dom';
// // import {Link} from 'react-router-dom';
// // import {useState, useEffect} from 'react';

// // export default function newInspeccion (){

// //     const [input, setInput] = useState({
// //         numexpediente:"",
// //         fechaentradinspec:"",
// //         inspecfecha:"",
// //         inspector:"",
// //         intimacion:"",
// //         infracciones:"",
// //         observaciones:"",
// //         paseanumdestino:"",
// //         fecha:"",
// //         paseafecha:""   
// //     })
// //     const [errors, setErrors] = useState({});

// //     function validate(input){
// //     let errors = {};
// //     if (input.numexpediente){
// //         errors.numexpediente = 'requiere un Nº de Expediente'
// //     } else if (input.fechaentradinspec){
// //         errors.adrema = 'Se Requiere fecha entrada inspección'
// //     }
// //     }
// //     function handleSubmit(p){
// //         p.preventDefault();
// //         setErrors(validate({
// //             ...input,
// //             [p.target.nuxexpediente]:p.target.value
// //         }))
// //         dispatch(input)
// //         alert("Expediente Creado")
// //         setInput ({
// //             numexpediente:"",
// //             fechaentradinspec:"",
// //             inspecfecha:"",
// //             inspector:"",
// //             intimacion:"",
// //             infracciones:"",
// //             observaciones:"",
// //             paseanumdestino:"",
// //             fecha:"",
// //             paseafecha:""            
// //         })
// //         Navigate('/home');
// //     }

// //     return (      
// //         <div>
// //         <div>                        
// //             <div>
// //                 <h1>** Crear Nueva Inspección **</h1>
// //             </div>
// //         </div>   
            
// //         <form onSubmit={(p) => handleSubmit(p)} >
// //                 <div>
// //                     <div>
// //                         <label>Numero de Expediente:</label>
// //                         <input
// //                         type="text"                    
// //                         name="numexpediente"
// //                         value= {input.numexpediente}
// //                         onChange={(p)=>handleChange(p)}
// //                         autoComplete="off"
// //                         />
// //                         {errors.name && (<p>{errors.numexpediente}</p>
// //                         )}   
// //                     </div>             
// //                     <br/> 
// //                 </div> 
// //         </form> 
// //         </div>
// //     )
// // }