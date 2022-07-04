import React, {useState} from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import { applyMiddleware } from 'redux';

// const upload = require('./libs/storage')
// import multer from 'multer';

// const multer = require ('multer')
// const upload = multer({
//   dest: 'Storage/imgs'  
// })

function InspecCreate() {

  const dataExpedientes = [
    { id: 1, 
      numexpediente: "1221P2022", 
      intimacion: 105025,
      inspecfecha:"20/01/2021",
      inspector:"José Romero",
      vencintimacion:"22/01/2019"
    },
    { id: 2, numexpediente: "1221P2019", intimacion: 225,
    inspecfecha:"20/01/2019",
    inspector:"Carlos Soto", vencintimacion:"22/01/2019", fotoinspeccion:""},
    { id: 3, numexpediente: "1561P2020", intimacion: 216,
    inspecfecha:"20/01/2021",
    inspector:"Marcelos Alegre", vencintimacion:"22/01/2019", fotoinspeccion:""},
    { id: 4, numexpediente: "1289P2018", intimacion: 216,
    inspecfecha:"20/01/2018",
    inspector:"Fabián Zacarias", vencintimacion:"22/01/2019", fotoinspeccion:""},
    { id: 5, numexpediente: "1037P2017", intimacion: 207,
    inspecfecha:"20/01/2017",
    inspector:"Martín Mesa", vencintimacion:"22/01/2019", fotoinspeccion:""},
    { id: 6, numexpediente: "1221P2016", intimacion: 195,
    inspecfecha:"20/01/2016",
    inspector:"Agustin Sotomayor", vencintimacion:"22/01/2019", fotoinspeccion:""},
    { id: 7, numexpediente: "1221P2021", intimacion: 191,
    inspecfecha:"09/06/2021",
    inspector:"Carlos Samudio", vencintimacion:"22/01/2019", fotoinspeccion:""},
    { id: 8, numexpediente: "1221P2020", intimacion: 190,
    inspecfecha:"20/01/2020",
    inspector:"Armando Encina", vencintimacion:"22/01/2019", fotoinspeccion:""},
    { id: 9, numexpediente: "1229P2015", intimacion: 190,
    inspecfecha:"20/01/2015",
    inspector:"Marcos Romero", vencintimacion:"22/01/2019", fotoinspeccion:""},
    { id: 10, numexpediente: "1221P2022", intimacion: 186,
    inspecfecha:"20/01/2021",
    inspector:"Maximiliano Ayala", vencintimacion:"22/01/2019", fotoinspeccion:""},
  ];

  const [data, setData] = useState(dataExpedientes);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [ExpedienteSeleccionado, setExpedienteSeleccionado] = useState({
    id: '',
    numexpediente: '',
    intimacion: '',
    inspecfecha:'',
    inspector:'',
    vencintimacion:"",
    fotos:""
  });

  const seleccionarPais=(elemento, caso)=>{
setExpedienteSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setExpedienteSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar =()=>{
    var dataNueva=data;
    dataNueva.map(intimacion=>{
      if(intimacion.id===ExpedienteSeleccionado.id){
        intimacion.intimacion=ExpedienteSeleccionado.intimacion;
        intimacion.numexpediente=ExpedienteSeleccionado.numexpediente;
        intimacion.inspecfecha=ExpedienteSeleccionado.inspecfecha;
        intimacion.inspector=ExpedienteSeleccionado.inspector; 
        intimacion.vencintimacion=ExpedienteSeleccionado.vencintimacion;   
      }
    });  
    setData(dataNueva);
    setModalEditar(false);
    }
  

  const eliminar =()=>{
    setData(data.filter(intimacion=>intimacion.id!==ExpedienteSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setExpedienteSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=ExpedienteSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    
    <div className="App">
                    <a href="/home"><img height="50" src={require('./images/logoMuni.png')} /></a><br/>    
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                
                    <h2 className="colorLetrasGris">SECCIÓN DE CARGA DE MULTAS/INTIMACIONES</h2>                    
                    <img className='logocorrientes' height="200" src={require('./images/Multa-1.jpg')} /> <br/><br/>
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Multas</Button></Link> {" - "}  */}
                    {/* <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Crear Intimación</button> {" - "} */}
                    <button className="btn btn-danger" onClick={()=>abrirModalInsertar()}>Crear Multa/Infracción</button> {" - "}
                    <Link to= '/Home'><Button color='primary'>Volver Menu Principal</Button></Link> {" - "} 
                    <Link to= '/ListIntimacion'><Button  color='secondary'>Lista Instimaciones</Button></Link> {" - "} 
                    <img src={require('./images/separadorpagina.png')} /> <br/>
                    <h1 className="">Lista de Multas</h1>                     
      {/* <h2>Países en los que la gente pasa más tiempo en redes sociales (2019)</h2> */}
      {/* <br /> */}
    
    
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>numero de expediente</th>
            <th>Intimación</th>
            <th>Fecha Inspección</th>
            <th>Inspector</th>
            <th>Vencimiento Intimación</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              {/* <td>{elemento.id}</td> */}
              <td>{elemento.numexpediente}</td>
              <td>{elemento.intimacion}</td>
              <td>{elemento.inspecfecha}</td>
              <td>{elemento.inspector}</td>
              <td>{elemento.vencintimacion}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarPais(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarPais(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Intimación</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            {/* <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={ExpedienteSeleccionado && ExpedienteSeleccionado.id}
            /> */}
            <br />

            <label>Expediente</label>
            <input
              className="form-control"
              type="text"
              name="numexpediente"
              readOnly
              value={ExpedienteSeleccionado && ExpedienteSeleccionado.numexpediente}
              onChange={handleChange}
            />
            <br />

            <label>Intimación</label>
            <input
              className="form-control"
              type="text"
              name="intimacion"
              readOnly
              value={ExpedienteSeleccionado && ExpedienteSeleccionado.intimacion}
              onChange={handleChange}
            />
            <br />
            <label>Fecha Intimación</label>
            <input
              className="form-control"
              type="text"
              name="inspecfecha"
              readOnly
              value={ExpedienteSeleccionado && ExpedienteSeleccionado.inspecfecha}
              onChange={handleChange}
            />
            <br />
            <label>Inspector</label>
            <input
              className="form-control"
              type="text"
              name="inspector"
              value={ExpedienteSeleccionado && ExpedienteSeleccionado.inspector}
              onChange={handleChange}
            />
            <br />
            <label>Vencimiento Intimación</label>
            <input
              className="form-control"
              type="text"
              name="inspector"
              value={ExpedienteSeleccionado && ExpedienteSeleccionado.vencintimacion}
              onChange={handleChange}
            />
            
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
         <button className="btn btn-success" onClick={()=>editar()}>
            Modo Admin
          </button>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>

          Estás Seguro que deseas eliminar la Intimación Nº {ExpedienteSeleccionado && ExpedienteSeleccionado.intimacion}
          <br/>
          del Expediente Nº {ExpedienteSeleccionado && ExpedienteSeleccionado.numexpediente}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Acta de Infracción/Multa</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            {/* <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            /> */}
            <br />
            <label>Expediente Nº</label>
            <input
              className="form-control"
              type="text"
              name="numexpediente"
              value={ExpedienteSeleccionado ? ExpedienteSeleccionado.numexpediente: ''}
              onChange={handleChange}
            />
            <br />
            <label>Intimación Nº</label>
            <input
              className="form-control"
              type="text"
              name="intimacion"
              value={ExpedienteSeleccionado ? ExpedienteSeleccionado.intimacion: ''}
              onChange={handleChange}
            />
            <br />
            <label>Fecha Intimación (mes/dia/año)</label>
            <input
              className="form-control"
              type="text"
              name="inspecfecha"
              value={ExpedienteSeleccionado ? ExpedienteSeleccionado.inspecfecha: ''}
              onChange={handleChange}
            />
            <br />
            <label>Inspector</label>
            <input
              className="form-control"
              type="text"
              name="inspector"
              value={ExpedienteSeleccionado ? ExpedienteSeleccionado.inspector: ''}
              onChange={handleChange}
            />
            <br />
            <label>Vencimiento Intimación</label>
            <input
              className="form-control"
              type="text"
              name="vencintimacion"
              value={ExpedienteSeleccionado ? ExpedienteSeleccionado.vencintimacion: ''}
              onChange={handleChange}
            />
            <br />
            <label>Subir Fotos:</label>
            <input
              className="form-control"
              type="file"
              name="fotoinspeccion"
              value={ExpedienteSeleccionado ? ExpedienteSeleccionado.fotoinspeccion:''}
              onChange={handleChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default InspecCreate;
// import React from 'react';
// //import Button from '@material-ui/core/Button'; // importo estilo de boton
// import './styles/Creates.css'; // importo los styles de mi Home.css
// // import Button from '@mui/material/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {Button, Tablet, Container} from 'reactstrap'
// import SearchBar from './SearchBar';

// //IMPORTO PORQUE USAMOS HOOKS
// import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
// import {useDispatch, useSelector} from 'react-redux'; 
// import { useNavigate } from 'react-router-dom';
// import {postExpediente} from '../actions';

// //import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';//Siempre importo las acciones nuevas 

// //LINK nos sirve para poder movernos por nuestra aplicación
// //más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
// import {Link} from 'react-router-dom';

// //ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// // import Card from './Card';
// // import SearchBar from './SearchBar';
// // import Paginado from './Paginado';

// export default function InspecCreate (){ 
//         const [errors, setErrors] = useState({});
//         const dispatch = useDispatch();    
//         const navigate = useNavigate();

//         //------------- PARTE DE VALIDACIONES ---------------

//          function validate(input){
//                 let errors ={};
//                 if (!input.name) {
//                         errors.name = 'Requiere Número Inspección';
//                 }else if (!input.description) {
//                         errors.description = 'Requiere Fecha Inicio/Entrada'   
//                 return errors;
//                 };
//         }
//         const [input, setInput] = useState({            
//             numexpediente: "",
//             fechaentradinspec:"",
//             inspecfecha:"",
//             inspector: "",
//             fotoinspeccion:"",
//             intimacion:"",
//             infracciones:"",
//             observaciones:"",
//             paseanumdestino:"",
//             fecha:"",
//             pasea:"",
//             fechapasea:"",   
//         })

// //     //------------- PARTE DE HANDLES ---------------------
//         function handleChange(p) { // va a  ir modificando cuando cambien los input
//                 setInput({
//                     ...input,
//                     [p.target.name] : p.target.value  // VER PORQUE BLOQUEA 24-5-22
//                 })
//                 setErrors(validate({
//                     ...input,
//                     [p.target.fechainicioentrada] : p.target.value
//                 }))
//                 console.log(input)
//          }

//         function handleSelect(p){
//                 setInput({
//                 ...input,
//                 //genre:[...input.genre, p.target.value] //para el array de Generos q concatene las selecciones
//                 })
//             }
//             function handleDelete(p){
//                 setInput({
//                     ...input,
//                     // va guardando en el arreglo todo lo que voy eligiendo de generos linea 42
//                     //genre: input.genre.filter (occ => occ !== p)
//                 })
//             }  
//         function handleSubmit(p) {
//                 p.preventDefault();
//                 //console.log(p)
//                 setErrors(validate({
//                     ...input,
//                     [p.target.numexpediente]:p.target.value
//                 }));        
//                 dispatch(postExpediente(input)); // input es el payload
//                 alert ("Expediente Creado!!!")
//                 setInput({ // seteo el input a cero
//                     numexpediente: "",
//                     fechaentradinspec:"",
//                     inspecfecha:"",
//                     inspector: "",
//                     fotoinspeccion:"",
//                     intimacion:"",
//                     infracciones:"",
//                     observaciones:"",
//                     paseanumdestino:"",
//                     fecha:"",
//                     pasea:"",
//                     fechapasea:"",
//                 })
//                 // history.push('/home')
//                 navigate('/home');
//             } 
//     return(
        
//         <div>        
//             <div>             
//                 <div>
//                     <img height="50" src={require('./images/logoMuni.png')}/> 
//                     {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                
//                     <h1 className="colorLetrasGris">SECCIÓN DE CREACIÓN DE INSPECCIONES</h1>                    
//                     <img className='logocorrientes' height="200" src={require('./images/fileserver.jpg')} /> <br/>
//                     {/* <select className="selectfont">
//                         <option value="" selected disabled hidden>ORDENAR</option>                
//                         <option value='asc'>Fecha</option>
//                         <option value='desc'>Estado</option>
//                         <option value='desc'>Fecha Inicio Expediente</option>
//                         <option value='desc'>Fecha Plano Registrado</option>
//                     </select>        */}
//                     <Link to= '/ListInspección'><Button color='primary'> Ir Lista Inspección </Button></Link> <label> </label>                       
//                     <Link to= '/Home'><Button color='danger'>Volver Menu Principal</Button></Link>  
//                     <br/><br/>
//                 </div>
//                 {/* <br /><br /> */}
//                 <img src={require('./images/separadorpagina.png')}/>
//                 {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                           
//                 <form onSubmit={(p) => handleSubmit(p)} >
//                  <div>
//                       <div>
//                         <br/><br/>
//                         <label className='selectfont'> Nº de Expediente: </label>
//                         <input
//                         type="text" 
//                         value= {input.numexpediente}                                           
//                         name="numexpediente"
//                         size="40"
//                         placeholder="nnnn/l/aaaa"                        
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                         {/* <br /> */}                
//                         <label className='selectfont'>  Fecha de Entrada a Inspección: </label>
//                         <input
//                         type="text"                    
//                         name="fechaentradinspec"
//                         size="10"
//                         placeholder="dd/mm/aaaa"
//                         value= {input.fechaentradinspec}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br /><br />
//                 <label> Fecha de inspección:  </label>
//                 <input
//                         type="text"                    
//                         name="inspecfecha"
//                         value= {input.inspecfecha}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 {/* <br /> */}
//                 <label className="selectfont"> Inspector (nombre y apellido): </label>
//                 <input
//                         type="text"                    
//                         name="inspector"
//                         value= {input.inspector}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br /><br />
//                 <label className="selectfont"> Fotos de Inspeccion: </label>
//                 <input
//                         type="text"                    
//                         name="fotoinspeccion"
//                         value= {input.fotoinspeccion}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 {/* <br /> */}
//                 <label className="selectfont"> Cantidad de Infracciones: </label>
//                 <input
//                         type="text"                    
//                         name="infracciones"
//                         value= {input.infracciones}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br /><br />
//                 <label className="selectfont"> Pasea a Nº de destino: </label>
//                 <input
//                         type="text"                    
//                         name="paseanumdestino"
//                         value={input.paseanumdestino}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 {/* <br /> */}
//                 <label className="selectfont"> Fecha: </label>
//                 <input
//                         type="text"                    
//                         name="fecha"
//                         value= {input.fecha}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br /><br />
//                 <label className="selectfont"> Pase a: </label>
//                 <input
//                         type="text"                    
//                         name="pasea"
//                         value= {input.pasea}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 {/* <br /> */}
//                 <label className="selectfont"> Fecha del Pase: </label>
//                 <input
//                         type="text"                    
//                         name="fechapasea"
//                         value= {input.fechapasea}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                         />
//                 <br /><br />                
//                 <br />
//                 <label className="selectfont"> Observaciones: </label>
//                 <textarea rows="4" cols="50"                 
//                         name="observaciones"
//                         value= {input.observaciones}
//                         onChange={(p)=>handleChange(p)}
//                         autoComplete="off"
//                 />                
//                 <br/><br/><br/>                
//                 <button type='submit'> Crear Inspección! </button>
//                 <input type='reset'></input>
//                 </div>
//                 </div>  
//         </form>
//         <script>
//                 document.addEventListener('DOMContentLoaded', () => {
//                 document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
//                 if(e.keyCode == 13) {
//                         e.preventDefault();
//                 }
//                 }))
//                 });
//         </script>

//                 <br />  <br /><br /><br />                 
//                 <img src={require('./images/separadorpagina.png')}/>
//                 <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
//             </div>
//         </div>        
// )}


// // import React from 'react';
// // //import Button from '@material-ui/core/Button'; // importo estilo de boton
// // import './styles/Home.css'; // importo los styles de mi Home.css
// // import SearchBar from './SearchBar';

// // //IMPORTO PORQUE USAMOS HOOKS
// // import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
// // import {useDispatch, useSelector} from 'react-redux'; 
// // //import {getGames, getListGenres, filterGamesByGenre, filterCreated, orderByName, getPlatforms, orderByRating, setPage} from '../actions';//Siempre importo las acciones nuevas 

// // //LINK nos sirve para poder movernos por nuestra aplicación
// // //más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
// // import {Link} from 'react-router-dom';

// // //ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// // // import Card from './Card';
// // // import SearchBar from './SearchBar';
// // // import Paginado from './Paginado';

// // export default function Home (){ 

// //     return(
        
// //         <div>        
// //             <div>             
// //                 <div><img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" />
                
// //                     <h1 className="colorLetras">SECCIÓN DE CREACIÓN DE INSPECCIONES</h1>                    
                    
// //                     <select className="selectfont">
// //                         <option value="" selected disabled hidden>ORDENAR</option>                
// //                         <option value='asc'>Fecha</option>
// //                         <option value='desc'>Estado</option>
// //                         <option value='desc'>Fecha Inicio Expediente</option>
// //                         <option value='desc'>Fecha Plano Registrado</option>
// //                     </select>                   
                    
// //                     <Link to= '/Home'><button className="selectfont">Volver Menu Principal</button></Link>   
// //                 </div>
// //                 {/* <br /><br /> */}
// //                 <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
                
                
// //                 <br/><br/>
// //                 <label className="selectfont">Numero de Expediente:</label>
// //                 <input
// //                         type="text"                    
// //                         name="numexpediente"
// //                         // value= {input.name}
// //                         // onChange={(p)=>handleChange(p)}
// //                         autoComplete="off"
// //                         />
// //                 <br />
// //                 <label className="selectfont">Numero de Adrema:</label>
// //                 <input
// //                         type="text"                    
// //                         name="numexpediente"
// //                         // value= {input.name}
// //                         // onChange={(p)=>handleChange(p)}
// //                         autoComplete="off"
// //                         />
// //                 <br />
// //                 <label className="selectfont">Fecha de Inicio:</label>
// //                 <input
// //                         type="text"                    
// //                         name="numexpediente"
// //                         // value= {input.name}
// //                         // onChange={(p)=>handleChange(p)}
// //                         autoComplete="off"
// //                         />
// //                 <br />
// //                 <label className="selectfont">Plano Registrado:</label>
// //                 <input
// //                         type="text"                    
// //                         name="numexpediente"
// //                         // value= {input.name}
// //                         // onChange={(p)=>handleChange(p)}
// //                         autoComplete="off"
// //                         />
// //                 <br />

// //                 <br />  <br /><br /><br />  <br /><br /><br />
// //             <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
// //             <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
// //             </div>
// //         </div>        
// // )}

// // // ******** parte original para mejorar ******





// // // import React from 'react';
// // // import {Navigate, useNavigate} from 'react-router-dom';
// // // import {Link} from 'react-router-dom';
// // // import {useState, useEffect} from 'react';

// // // export default function newInspeccion (){

// // //     const [input, setInput] = useState({
// // //         numexpediente:"",
// // //         fechaentradinspec:"",
// // //         inspecfecha:"",
// // //         inspector:"",
// // //         intimacion:"",
// // //         infracciones:"",
// // //         observaciones:"",
// // //         paseanumdestino:"",
// // //         fecha:"",
// // //         paseafecha:""   
// // //     })
// // //     const [errors, setErrors] = useState({});

// // //     function validate(input){
// // //     let errors = {};
// // //     if (input.numexpediente){
// // //         errors.numexpediente = 'requiere un Nº de Expediente'
// // //     } else if (input.fechaentradinspec){
// // //         errors.adrema = 'Se Requiere fecha entrada inspección'
// // //     }
// // //     }
// // //     function handleSubmit(p){
// // //         p.preventDefault();
// // //         setErrors(validate({
// // //             ...input,
// // //             [p.target.nuxexpediente]:p.target.value
// // //         }))
// // //         dispatch(input)
// // //         alert("Expediente Creado")
// // //         setInput ({
// // //             numexpediente:"",
// // //             fechaentradinspec:"",
// // //             inspecfecha:"",
// // //             inspector:"",
// // //             intimacion:"",
// // //             infracciones:"",
// // //             observaciones:"",
// // //             paseanumdestino:"",
// // //             fecha:"",
// // //             paseafecha:""            
// // //         })
// // //         Navigate('/home');
// // //     }

// // //     return (      
// // //         <div>
// // //         <div>                        
// // //             <div>
// // //                 <h1>** Crear Nueva Inspección **</h1>
// // //             </div>
// // //         </div>   
            
// // //         <form onSubmit={(p) => handleSubmit(p)} >
// // //                 <div>
// // //                     <div>
// // //                         <label>Numero de Expediente:</label>
// // //                         <input
// // //                         type="text"                    
// // //                         name="numexpediente"
// // //                         value= {input.numexpediente}
// // //                         onChange={(p)=>handleChange(p)}
// // //                         autoComplete="off"
// // //                         />
// // //                         {errors.name && (<p>{errors.numexpediente}</p>
// // //                         )}   
// // //                     </div>             
// // //                     <br/> 
// // //                 </div> 
// // //         </form> 
// // //         </div>
// // //     )
// // // }