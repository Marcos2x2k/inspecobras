import React from 'react';
//import Button from '@material-ui/core/Button'; // importo estilo de boton
import './styles/Creates.css'; // importo los styles de mi Home.css
// import Button from '@mui/material/Button';
import {Button, Tablet, Container} from 'reactstrap'
// import SearchBarTick from './SearchBars/SearchBarTick';

//IMPORTO PORQUE USAMOS HOOKS
import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import {useDispatch, useSelector} from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import {postTicket} from '../actions';

//import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';//Siempre importo las acciones nuevas 

//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import {Link} from 'react-router-dom';

//ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// import Card from './Card';
// import SearchBar from './SearchBar';
// import Paginado from './Paginado';

export default function TicketCreate (){ 
        const [errors, setErrors] = useState({});
        const dispatch = useDispatch();    
        const navigate = useNavigate();

        //------------- PARTE DE VALIDACIONES ---------------

         function validate(input){
                let errors ={};
                if (!input.name) {
                        errors.name = 'Requiere Número Ticket';
                }else if (!input.description) {
                        errors.description = 'Requiere Iniciador'   
                return errors;
                };
        }
        const [input, setInput] = useState({
            
                numticket:"",
                iniciador:"",
                ubicacion:"",
                adrema:"",
                directordeobra:"",
                destinodelaobra:"",
                zona:"",
                observaciones:"",
                permisodeobranum:"",
                actasdeinfraccionnum:"",
                fechaentradaainspecciones:"",
                inspector:"",
                fechainspecccion:"",
                intimacion:"",
                infracciones:"",
                observacioneslugar:"",
                pasea:"",
                fecha:""   
        })

//     //------------- PARTE DE HANDLES ---------------------
        function handleChange(p) { // va a  ir modificando cuando cambien los input
                setInput({
                    ...input,
                    [p.target.name] : p.target.value  // VER PORQUE BLOQUEA 24-5-22
                })
                setErrors(validate({
                    ...input,
                    [p.target.iniciador] : p.target.value
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
                    [p.target.numticket]:p.target.value
                }));        
                dispatch(postTicket(input)); // input es el payload
                alert ("Ticket Creado!!!")
                setInput({ // seteo el input a cero
                        numticket:"",
                        iniciador:"",
                        ubicacion:"",
                        adrema:"",
                        directordeobra:"",
                        destinodelaobra:"",
                        zona:"",
                        observaciones:"",
                        permisodeobranum:"",
                        actasdeinfraccionnum:"",
                        fechaentradaainspecciones:"",
                        inspector:"",
                        fechainspecccion:"",
                        intimacion:"",
                        infracciones:"",
                        observacioneslugar:"",
                        pasea:"",
                        fecha:""
                })
                // history.push('/home')
                navigate('/home');
            } 
    return(
        
        <div>        
            <div>             
                <div>
                    <img height="50" src={require('./images/logoMuni.png')}/>                     
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" />                 */}
                    <h1 className="colorLetrasGris">SECCIÓN DE CREACIÓN DE TICKETS</h1>  
                    <img className='logocorrientes' height="200" src={require('./images/fileserver.jpg')} /> <br/>                  
                    
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    <Link to= '/ListTicket'><Button color='primary'> Ir Lista Ticket </Button></Link> <label> </label>                       
                    <Link to= '/Home'><Button color='danger'>Volver Menu Principal</Button></Link>    
                    <br/><br/>
                </div>
                {/* <br /><br /> */}
                <img src={require('./images/separadorpagina.png')}/>
                {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                           
                <form onSubmit={(p) => handleSubmit(p)}>
                 <div>
                      <div>
                        <br/><br/>
                        <label className='selectfont'> Nº Ticket: </label>
                        <input
                        type="text" 
                        value= {input.numticket}                                           
                        name="numticket"
                        size="40"
                        placeholder="nnnn/l/aaaa"                        
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                        {/* <br /> */}                
                        <label className='selectfont'>  Iniciador (nombre y apellido): </label>
                        <input
                        type="text"                    
                        name="iniciador"
                        size="10"
                        placeholder="dd/mm/aaaa"
                        value= {input.iniciador}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label> Ubicación:  </label>
                <input
                        type="text"                    
                        name="ubicacion"
                        value= {input.ubicacion}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Nº Adrema: </label>
                <input
                        type="text"                    
                        name="adrema"
                        value= {input.adrema}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Domicilio: </label>
                <input
                        type="text"                    
                        name="domicilio"
                        value= {input.domicilio}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}                
                <label className="selectfont"> Director de obra/Perito visor: </label>
                <input
                        type="text"                    
                        name="directordeobra"
                        value={input.directordeobra}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Destino de Obra: </label>
                <input
                        type="text"                    
                        name="destinodelaobra"
                        value= {input.destinodelaobra}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Zona: </label>
                <input
                        type="text"                    
                        name="zona"
                        value= {input.zona}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Permiso de Obra Nº: </label>
                <input
                        type="text"                    
                        name="permisodeobranum"
                        value= {input.permisodeobranum}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Acta de Infracción Nº: </label>
                <input
                        type="text"                    
                        name="actasdeinfraccionnum"
                        value= {input.actasdeinfraccionnum}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Fecha de Entrada Inspección: </label>
                <input
                        type="text"                    
                        name="fechaentradaainspecciones"
                        value= {input.fechaentradaainspecciones}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Inspector: </label>
                <input
                        type="text"                    
                        name="inspector"
                        value= {input.inspector}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}  
                <label className="selectfont"> Fecha Inspección: </label>
                <input
                        type="text"                    
                        name="fechainspecccion"
                        value= {input.fechainspecccion}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br/><br/>
                <label className="selectfont"> Intimación: </label>
                <input
                        type="text"                
                        name="intimacion"
                        value= {input.intimacion}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                />             
                <label className="selectfont"> Infracciones: </label>
                <input
                        type="text"                 
                        name="infracciones"
                        value= {input.infracciones}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                />    
                <br/>  <br/>
                <label className="selectfont"> Observaciones del Lugar: </label>
                <textarea rows="4" cols="50"                 
                        name="observacioneslugar"
                        value= {input.observacioneslugar}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                />  
                <br/><br/>
                <label className="selectfont"> Pase a: </label>
                <input
                        type="text"                     
                        name="pasea"
                        value= {input.pasea}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                />   
                 <label className="selectfont"> Fecha: </label>
                 <input
                        type="text"                    
                        name="fecha"
                        value= {input.fecha}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                />              
                
                <br/><br/><br/>                
                <button type='submit'> Crear Ticket! </button>
                <input type="reset"></input>
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
// import './styles/Creates.css'; // importo los styles de mi Home.css
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
                
//                     <h1 className="colorLetras">SECCIÓN DE CREACIÓN DE TICKETS</h1>                    
                    
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

// // export default function newExpediente (){

// //     const [input, setInput] = useState({
// //         numticket:"",
// //         iniciador:"",
// //         ubicacion:"",
// //         adrema:"",
// //         directordeobra:"",
// //         destinodelaobra:"",
// //         zona:"",
// //         observaciones:"",
// //         permisodeobranum:"",
// //         actasdeinfraccionnum:"",
// //         fechaentradaainspecciones:"",
// //         inspector:"",
// //         fechainspecccion:"",
// //         intimacion:"",
// //         infracciones:"",
// //         observacioneslugar:"",
// //         pasea:"",
// //         fecha:"",
// //     })
// //     const [errors, setErrors] = useState({});

// //     function validate(input){
// //     let errors = {};
// //     if (input.numexpediente){
// //         errors.numexpediente = 'requiere un Nº de Expediente'
// //     } else if (input.adrema){
// //         errors.adrema = 'Se Requiere Adrema'
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
// //             numticket:"",
// //             iniciador:"",
// //             ubicacion:"",
// //             adrema:"",
// //             directordeobra:"",
// //             destinodelaobra:"",
// //             zona:"",
// //             observaciones:"",
// //             permisodeobranum:"",
// //             actasdeinfraccionnum:"",
// //             fechaentradaainspecciones:"",
// //             inspector:"",
// //             fechainspecccion:"",
// //             intimacion:"",
// //             infracciones:"",
// //             observacioneslugar:"",
// //             pasea:"",
// //             fecha:"",
// //         })
// //         Navigate('/home');
// //     }

// //     return (      
// //         <div>
// //         <div>                        
// //             <div>
// //                 <h1>** Crear Nuevo Ticket **</h1>
// //             </div>
// //         </div>   
            
// //         <form onSubmit={(p) => handleSubmit(p)} >
// //                 <div>
// //                     <div>
// //                         <label>Numero de TICKET:</label>
// //                         <input
// //                         type="text"                    
// //                         name="numexpediente"
// //                         value= {input.numticket}
// //                         onChange={(p)=>handleChange(p)}
// //                         autoComplete="off"
// //                         />
// //                         {errors.name && (<p>{errors.numticket}</p>
// //                         )}   
// //                     </div>             
// //                     <br/> 
// //                 </div> 
// //         </form> 
// //         </div>
// //     )
// // }
