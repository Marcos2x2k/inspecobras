import React from 'react';
//import Button from '@material-ui/core/Button'; // importo estilo de boton
import './styles/Creates.css'; // importo los styles de mi Home.css
// import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Tablet, Container} from 'reactstrap'
import SearchBarInf from './SearchBarInf';


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
// import SearchBarInt from './SearchBarInt';
// import Paginado from './Paginado';

export default function Infracciones (){ 
        const [errors, setErrors] = useState({});
        const dispatch = useDispatch();    
        const navigate = useNavigate();

        //------------- PARTE DE VALIDACIONES ---------------

         function validate(input){
                let errors ={};
                if (!input.name) {
                        errors.name = 'Requiere Número Expediente';
                }else if (!input.description) {
                        errors.description = 'Requiere Fecha Inicio/Entrada'   
                return errors;
                };
        }
        const [input, setInput] = useState({
            
            numexpediente: "",
            fechainicioentrada:"",
            estado:"",
            iniciadornomyape: "",
            domicilio:"",
            adrema:"",
            directorobraoperitovisor:"",
            destinodeobra:"",
            superficieterreno:"",
            superficieaconstruir:"",
            superficiesubsueloplantabaja:"",
            superficieprimerpisoymaspisos:"",
            zona:"",
            observaciones:"",
            permisobraoactainfrac:""
   
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
                        fechainicioentrada:"",
                        estado:"",
                        iniciadornomyape: "",
                        domicilio:"",
                        adrema:"",
                        directorobraoperitovisor:"",
                        destinodeobra:"",
                        superficieterreno:"",
                        superficieaconstruir:"",
                        superficiesubsueloplantabaja:"",
                        superficieprimerpisoymaspisos:"",
                        zona:"",
                        observaciones:"",
                        permisobraoactainfrac:""
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
                
                    <h1 className="colorLetrasGris">SECCIÓN DE CARGA DE INFRACCIONES</h1>                    
                    <img className='logocorrientes' height="200" src={require('./images/fileserver.jpg')} /> <br/>
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    <Link to= '/ListInfraccion'><Button  color='primary'>Ir Lista Infracciones</Button></Link> <label> </label> 
                    <Link to= '/Home'><Button color='danger'>Volver Menu Principal</Button></Link> <label> </label> 
                    
                    <br/><br/>
                </div>
                {/* <br /><br /> */}
                <img src={require('./images/separadorpagina.png')}/>
                           
                <form onSubmit={(p) => handleSubmit(p)}>
                
                 <div>
                        
                      <div>
                        <br/><br/>
                        <label className='selectfont'> Nº Expediente: </label>
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
                        <label className='selectfont'>  Fecha Inicio/Entrada: </label>
                        <input
                        type="text"                    
                        name="fechainicioentrada"
                        size="10"
                        placeholder="dd/mm/aaaa"
                        value= {input.fechainicioentrada}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label> Estado:  </label>
                <input
                        type="text"                    
                        name="estado"
                        value= {input.estado}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Iniciador (nombre y apellido): </label>
                <input
                        type="text"                    
                        name="iniciadornomyape"
                        value= {input.iniciadornomyape}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont"> Domicilio: </label>
                <input
                        type="text"                    
                        name="domicilio"
                        value= {input.domicilio}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Nº Adrema: </label>
                <input
                        type="text"                    
                        name="adrema"
                        value= {input.adrema}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont"> Director de obra/Perito visor: </label>
                <input
                        type="text"                    
                        name="directorobraoperitovisor"
                        value={input.directorobraoperitovisor}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Destino de Obra: </label>
                <input
                        type="text"                    
                        name="destinodeobra"
                        value= {input.destinodeobra}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont"> Superficie Terreno: </label>
                <input
                        type="text"                    
                        name="superficieterreno"
                        value= {input.superficieterreno}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Superficie a Construir: </label>
                <input
                        type="text"                    
                        name="superficieaconstruir"
                        value= {input.superficieaconstruir}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont"> Superficie SubSuelo/Planta Baja: </label>
                <input
                        type="text"                    
                        name="superficiesubsueloplantabaja"
                        value= {input.superficiesubsueloplantabaja}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}
                <label className="selectfont"> Superficie 1º piso/más pisos: </label>
                <input
                        type="text"                    
                        name="superficieprimerpisoymaspisos"
                        value= {input.superficieprimerpisoymaspisos}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br /><br />
                <label className="selectfont"> Zona: </label>
                <input
                        type="text"                    
                        name="zona"
                        value= {input.zona}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                {/* <br /> */}                
                <br/><br/>
                <label className="selectfont"> Permiso Obra/Acta Infracción: </label>
                <input
                        type="text"                    
                        name="permisobraoactainfrac"
                        value= {input.permisobraoactainfrac}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        />
                <br />
                <label className="selectfont"> Observaciones: </label>
                <textarea rows="4" cols="50"                 
                        name="observaciones"
                        value= {input.observaciones}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                />                
                <br/><br/><br/>                
                <button type='submit'> Crear Expediente! </button>
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

// ******** parte original para mejorar ******

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
                
//                     <h1 className="colorLetras">SECCIÓN DE CREACIÓN DE INTIMACIONES</h1>                    
                    
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