import React from 'react';
//import Button from '@material-ui/core/Button'; // importo estilo de boton
import './styles/Creates.css'; // importo los styles de mi Home.css
// import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Tablet, Container} from 'reactstrap'
// import SearchBarExp from './Searchbars/SearchBarExp';

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

export default function ExpedCreate (){ 
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
            permisobraoactainfrac:"",
            fotoexpediente:""
   
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
                        permisobraoactainfrac:"",
                        fotoexpediente:""
                })
                // history.push('/home')
                navigate('/home');
            } 
    return(
        
        <div>        
            <div>             
                <div>
                    <a href="/home"><img height="50" src={require('./images/logoMuni.png')} /></a><br/>                                 
                    <h1 className="colorLetrasGris">SECCIÓN DE CREACIÓN DE EXPEDIENTES</h1> 
                    <img className='logocorrientes' height="200" src={require('./images/fileserver.jpg')} /> <br/>
                    <Link to= '/ListExpediente'><Button color='primary'> Ir Lista Expedientes </Button></Link> <label> </label>
                    <Link to= '/Home'><Button color='danger'>Volver Menu Principal</Button></Link>                   
                    <br/><br/>
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}                     
                </div>
                {/* <br /><br /> */}
                {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                <img src={require('./images/separadorpagina.png')}/>
                
                <form onSubmit={(p) => handleSubmit(p)}>
                 <div>
                      <div>
                        <br/>
                        <label className='selectfont'> Nº Expediente: </label>
                        <input
                        type="text" 
                        value= {input.numexpediente}                                           
                        name="numexpediente"
                        size="30"
                        placeholder="NNNN/L/AAAA"                        
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                        <label> </label>
                        {/* <br /> */}                
                        <label className='selectfont'>  Fecha Ini/Ent: </label>
                        <input
                        type="text"                    
                        name="fechainicioentrada"
                        size="10"
                        placeholder="dd/mm/aaaa"
                        value= {input.fechainicioentrada}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className='selectfont'> Estado:  </label>
                <input
                        type="text"                    
                        name="estado"
                        placeholder="Inspección /Retenido /Salir" 
                        value= {input.estado}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Iniciador: </label>
                <input
                        type="text"                    
                        name="iniciadornomyape"
                        placeholder="Nombre y Apellido"
                        value= {input.iniciadornomyape}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Domicilio: </label>
                <input
                        type="text"                    
                        name="domicilio"
                        placeholder="Ingrese Domicilio"
                        value= {input.domicilio}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Adrema: </label>
                <input
                        type="text"                    
                        name="adrema"
                        placeholder="Numero de Adrema"
                        value= {input.adrema}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Fiduciario/Prop/Socio: </label>                                
                <input
                        type="text"                    
                        name="fiduciariopropsocio"
                        placeholder="Fiduciario/Prop/Socio"
                        value= {input.fiduciariopropsocio}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <label className="selectfont"> Dirección Fiduciario/Prop/Socio: </label>
                <input
                        type="text"                    
                        name="direcfiduciariopropsocio"
                        placeholder="Dirección"
                        value= {input.direcfiduciariopropsocio}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> E-Mail Fiduciario/Prop/Socio: </label>
                <input
                        type="text"                    
                        name="correofiduciariopropsocio"
                        placeholder="E-Mail / Correo"
                        value= {input.correofiduciariopropsocio}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Director o Perito: </label>
                <input
                        type="text"                    
                        name="directorobraoperitovisor"
                        placeholder="Director de obra/Perito visor"
                        value={input.directorobraoperitovisor}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Destino de Obra: </label>
                <input
                        type="text"                    
                        name="destinodeobra"
                        value= {input.destinodeobra}
                        placeholder="Viv.Familiar/Deposito/Negocio/etc"
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Superficie Terreno: </label>
                <input
                        type="text"                    
                        name="superficieterreno"
                        placeholder="superficie en M2" 
                        value= {input.superficieterreno}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Superf. a Const.: </label>
                <input
                        type="text"                    
                        name="superficieaconstruir"
                        placeholder="superficie en M2"
                        value= {input.superficieaconstruir}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /><br />
                <label className="selectfont"> Superficie A:</label>
                <input
                        type="text"                    
                        placeholder=" SubSuelo/Planta Baja"
                        name="superficiesubsueloplantabaja"
                        value= {input.superficiesubsueloplantabaja}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                {/* <br /> */}
                <label className="selectfont"> Superficie B:</label>
                <input
                        type="text"                    
                        name="superficieprimerpisoymaspisos"
                        placeholder=" 1º piso  - más pisos"
                        value= {input.superficieprimerpisoymaspisos}
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
                <br/><br/>
                <label className="selectfont"> Permiso / Obra: /  </label>
                <label className="selectfont">Acta Infracción: </label>
                <br/>
                <input
                        type="text"                    
                        name="permisobraoactainfrac"
                        placeholder="NO POSEE" 
                        value= {input.permisobraoactainfrac}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                        />
                <br /> <br />
                <label className="selectfont"> Observaciones: </label>
                <br/>
                <textarea rows="4" cols="50"                 
                        name="observaciones"
                        placeholder="Ingrese Observaciones Pertinentes a la Obra" 
                        value= {input.observaciones}
                        onChange={(p)=>handleChange(p)}
                        autoComplete="off"
                        required
                />  
                <br/>          
                {/* <label className="negrita">Subir Fotos:</label>
                <br/>
                <input
                //  className="negrita"
                 type="file"
                 name="fotosint"
                 value={input.fotoexpediente}
                 onChange={(p)=>handleChange(p)}
                  />    
                <br/><br/><br/>                 */}                        
                 
                </div>
                </div>  
                <button variant="contained" component="span" type='submit'> Crear Expediente! </button>  
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
