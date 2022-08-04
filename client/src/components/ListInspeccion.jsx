import React, {useState, useEffect, Fragment} from 'react';
import logo from './styles/logo.svg';
import './styles/AppCrud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'; 
import {getDetailsInspecciones, postInspeccion, deleteInspecciones, getNameInspecciones, getInspecciones} from '../actions';
import SearchBarInt from './SearchBars/SearchBarInt';


// import { applyMiddleware } from 'redux';
const dataInspeccionarray = [
];

function ListInspeccion() { 
  const [errors, setErrors] = useState({});     
  const navigate = useNavigate();
  const dispatch = useDispatch(); // PARA USAR HOOKS
  const inspecciones = useSelector((state) => state.inspecciones) //HOOKS es lo mismo q maps.state.props
  const [orden, setOrden] = useState(''); // es un estado local q arranca vacio para el Asc y Desc Order
  //const { intimaciones, name, page, order } = useSelector(state => state);
  const alldata = dataInspeccionarray.concat(inspecciones);

  function validate(input){
    let errors ={};
    if (!input.informeinspnum) {
            errors.boletaintnum = 'Requiere Numero de Boleta';
    }else if (!input.numexpediente) {
            errors.señorseñora = 'Requiere Nombre y Apellido'   
    return errors;
    };
    }  
  const [data, setData] = useState(alldata);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEditarInfo, setModalEditarInfo] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [inspeccionSeleccionado, setInspeccionSeleccionado] = useState({
    numexpediente:'',
    fechaentradinspec:'',
    inspecfecha:'',
    inspector:'',
    intimacion:'',
    infracciones:'',
    observaciones:'',
    paseanumdestino:'',
    fecha:'',
    paseafecha:'',
    userid:''
  });
 // TRAIGO DEL ESTADO LAS INTIMACIONES CUANDO EL COMPONENTE SE MONTA
  useEffect(() => {
  dispatch(getInspecciones());
  // getListGenres para usar con filtrados por Genero
  }, [dispatch])
  const seleccionarInspeccion=(elemento, caso)=>{
  setInspeccionSeleccionado(elemento);
  if (caso==='EditarInfo') setModalEditarInfo(true)
  else
  if (caso==='Editar') setModalEditar(true)
  else
  if (caso==='Eliminar') setModalEliminar(true)
  
//   (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

//     ------------- PARTE DE HANDLES ---------------------
//   function handleChange(p) { // va a  ir modificando cuando cambien los input
//     setInput({
//         ...input,
//         [p.target.name] : p.target.value  // VER PORQUE BLOQUEA 24-5-22
//     })
//     setErrors(validate({
//         ...input,
//         [p.target.fechainicioentrada] : p.target.value
//     }))
//     console.log(input)
// }
const handleChange= (e) =>{
  const {name, value}=e.target;    
  setInspeccionSeleccionado((prevState)=>({
    ...prevState,
    [name]: value
  }));
}
function handleClick(p) {
  p.preventDefault(); //PREVENTIVO PARA Q NO RECARGUE TODA LA PAGINA
  dispatch(getInspecciones())
};
function handleSelect(p){
  setInspeccionSeleccionado({
    ...inspeccionSeleccionado,
    //genre:[...input.genre, p.target.value] //para el array de Generos q concatene las selecciones
    })
}
// function handleDelete(p){
//     p.preventDefault();
//     //console.log(p)
//     setErrors(validate({
//       ...inspeccionSeleccionado,
//       [p.target.boletaintnum]: p.target.value
//     }));
//     dispatch(deleteIntimacion(inspeccionSeleccionado)); // input es el payload
//     alert("Intimación Borrada!!!")
//     navigate('/home');
//   }
  
  function handleSubmit(p) {
    p.preventDefault();
    //console.log(p)
    setErrors(validate({
      ...inspeccionSeleccionado,
      [p.target.informeinspnum]: p.target.value
    }));
    dispatch(postInspeccion(inspeccionSeleccionado)); // input es el payload
    alert("Intimación Creada!!!")
    setInspeccionSeleccionado({ // seteo el input a cero
        numexpediente:'',
        fechaentradinspec:'',
        inspecfecha:'',
        inspector:'',
        intimacion:'',
        infracciones:'',
        observaciones:'',
        paseanumdestino:'',
        fecha:'',
        paseafecha:'',
        userid:''
    })
    // history.push('/home')
    navigate('/home');
  } 


  const editar =()=>{
    var dataNueva=data;
    dataNueva.map(inspeccion=>{
      if(inspeccion.id===inspeccionSeleccionado.id){
        inspeccion.numexpediente=inspeccionSeleccionado.numexpediente;
        inspeccion.fechaentradinspec=inspeccionSeleccionado.fechaentradinspec;
        inspeccion.inspecfecha=inspeccionSeleccionado.inspecfecha;
        inspeccion.inspector=inspeccionSeleccionado.inspector;
        inspeccion.intimacion=inspeccionSeleccionado.intimacion;
        inspeccion.infracciones=inspeccionSeleccionado.infracciones; 
        inspeccion.observaciones=inspeccionSeleccionado.observaciones;
        inspeccion.paseanumdestino=inspeccionSeleccionado.paseanumdestino;
        inspeccion.fecha=inspeccionSeleccionado.fecha;
        inspeccion.paseafecha=inspeccionSeleccionado.paseafecha;
        inspeccion.userid=inspeccionSeleccionado.userid;        
      }
    });  
    setData(dataNueva);
    setModalEditar(false);
    }

    const EditarInfo =()=>{
        var dataNueva=data;
        dataNueva.map(inspeccion=>{
            if(inspeccion.id===inspeccionSeleccionado.id){
                inspeccion.numexpediente=inspeccionSeleccionado.numexpediente;
                inspeccion.fechaentradinspec=inspeccionSeleccionado.fechaentradinspec;
                inspeccion.inspeccionSeleccionado=inspeccionSeleccionado.inspecfecha;
                inspeccion.inspector=inspeccionSeleccionado.inspector;
                inspeccion.intimacion=inspeccionSeleccionado.intimacion;
                inspeccion.infracciones=inspeccionSeleccionado.infracciones; 
                inspeccion.observaciones=inspeccionSeleccionado.observaciones;
                inspeccion.paseanumdestino=inspeccionSeleccionado.paseanumdestino;
                inspeccion.fecha=inspeccionSeleccionado.fecha;
                inspeccion.paseafecha=inspeccionSeleccionado.paseafecha;
                inspeccion.userid=inspeccionSeleccionado.userid;
            } 
        }); 
        setData(dataNueva);
        setModalEditarInfo(false);
        }

  const eliminar =()=>{
    setData(data.filter(inspeccion=>inspeccion.id!==inspeccionSeleccionado.id));

    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setInspeccionSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=inspeccionSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

return (
    
    <div>
                    <a href="/home"><img height="50" src={require('./images/logoMuni.png')} /></a><br/>    
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                
                    <h1>SECCIÓN DE CARGA DE INSPECCIONES</h1>                     
                                  
                    <img className= 'imagenredondoint' height="200" src={require('./images/prog-obra-const.jpg')} /> <br/>
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Instimaciones</Button></Link> {" - "}  */}
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Multas</Button></Link> {" - "}  */}
                     
                    <br/>
                    <button className='btn btn-success' onClick={()=>abrirModalInsertar()}>Crear/Cargar Inspección</button> {" - "}                    
                    <Link to= '/ListIntimacion'><Button color='secondary'>Ir a Intimaciones</Button></Link> {" - "}
                    <Link to= '/InspecCreate'><Button color='secondary'>Ir a Multas/Infracciones</Button></Link> {" - "}
                    <Link to= '/Home'><Button color='primary'>Volver Menu Principal</Button></Link> 
                    {/* <Button to= '/ListIntimacion'>Recargar Exp.</Button> <label> </label> */}
                    <br/>
                    <img src={require('./images/separadorpagina.png')} />
                    <h1>Lista de Inspecciones</h1>  
                    <SearchBarInt
                    />     
    
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Numero Expediente</th>
            <th>Fecha Entrada Insp</th>
            <th>Fecha Inspección</th>
            <th>Inspector</th>
            <th>Intimaciones</th>
            <th>Infracciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              {/* <td>{elemento.id}</td> */}
              <td>{elemento.numexpediente}</td>
              <td>{elemento.fechaentradinspec}</td>
              <td>{elemento.inspecfecha}</td>
              <td>{elemento.inspector}</td>
              <td>{elemento.intimacion}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarInspeccion(elemento, 'EditarInfo')}>Info Completa</button> <button className="btn btn-primary" onClick={()=>seleccionarInspeccion(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarInspeccion(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>


      {/* // ***** INSERTAR - CREAR ****** */}      
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Carga de Boleta Inspección</h3>
          </div>
        </ModalHeader>
        <ModalBody>
        <form method="post" enctype="multipart/form-data" action="/upload">
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
            <h5>Numero de Expediente</h5>
            <input
              className="form-control"
              type="text"
              name="numexpediente"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.numexpediente: ''}
              onChange={handleChange}
            />
            <br />
            <label> Fecha Entrada a Inspección </label>
            <input
              className="form-control"
              type="text"
              name="fechaentradinspec"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.fechaentradinspec: ''}
              onChange={handleChange}
            />
            <br />
            <label> Fecha Inspección</label>
            <input
              className="form-control"
              type="text"
              name="inspecfecha"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.inspecfecha: ''}
              onChange={handleChange}
            />
            <br />
            <label> Inspector (Nom/Apell) </label>
            <input
              className="form-control"
              type="text"
              name="inspector"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.inspector: ''}
              onChange={handleChange}
            />
            <label> Número de Intimaciones </label>
            <input
              className="form-control"
              type="text"
              name="intimacion"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.intimacion: ''}
              onChange={handleChange}
            />
            <br />
            <label> Número de Insfracciones </label>
            <input
              className="form-control"
              type="text"
              name="infracciones"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.infracciones: ''}
              onChange={handleChange}
            />
            <br />
            <label> Observaciones </label>
            <input
              className="form-control"
              type="text"
              name="observaciones"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.observaciones: ''}
              onChange={handleChange}
            />
            <br />
            <label> Pase a Número Destino </label>
            <input
              className="form-control"
              type="text"
              name="paseanumdestino"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.paseanumdestino: ''}
              onChange={handleChange}
            />
            <br />
            <label> Fecha: </label>
            <input
              className="form-control"
              type="text"
              name="fecha"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.fecha: ''}
              onChange={handleChange}
            />
            <br />
            <label> Pase a Fecha </label>
            <input
              className="form-control"
              type="text"
              name="paseafecha"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.paseafecha: ''}
              onChange={handleChange}
            />
            <br />
            <label> Identificación de Usuario </label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="userid"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.userid: ''}
              onChange={handleChange}
            />
            <br />            
            {/* <label>Subir Fotos:</label>
            <br/><br/>             */}
              {/* <input
                className="form-control"
                type="text"
                name="fotoint"
                value={inspeccionSeleccionado ? inspeccionSeleccionado.fotoint : ''}
                onChange={handleChange}
              /> */}
              {/* <br /> */}
          </div>      
              {/* ACA SE DEBE SUBIR LAS FOTOS */}
              {/* <input 
              type="file" 
              name="fotoint"
              value={inspeccionSeleccionado ? inspeccionSeleccionado.fotoint: ''}
              // value={inspeccionSeleccionado ? inspeccionSeleccionado.fotoint : ''}
              onChange={handleChange}>              
              </input>               */}
              {/* <input type="submit" value="Submit"></input> */}
            </form>
        </ModalBody>
        <ModalFooter>
          <form onSubmit={(p) => handleSubmit(p)}>
              <button className="btn btn-primary" type='submit'> Crear Intimación! </button>
          </form>
          {/* <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Crear
          </button> */}
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      {/* ************* MODO EDITAR ***************/}
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Intimación</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <h5>Numero de Expediente</h5>
                <input
                    className="form-control"
                    type="text"
                    name="numexpediente"
                    required
                    value={inspeccionSeleccionado ? inspeccionSeleccionado.numexpediente: ''}
                    onChange={handleChange}
                />
            <br />
            <label> Fecha Entrada a Inspección </label>
            <input
              className="form-control"
              type="text"
              name="fechaentradinspec"
              required
              value={inspeccionSeleccionado ? inspeccionSeleccionado.fechaentradinspec: ''}
              onChange={handleChange}
            />
            <br />
            <label>Hora Intimación</label>
            <input
              className="form-control" 
              type="text" 
              name="horaintimacion"
            //   readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.horaintimacion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Expediente</label>
            <input
              className="form-control" 
              type="text" 
              name="numexpedienteint" 
              //   readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.numexpedienteint}
              onChange={handleChange}
            />
            <br />
            <label> Fecha Entrada a Inspección </label>
            <input
              className="form-control"
              type="text"
              name="fechaentradinspec"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.fechaentradinspec: ''}
              onChange={handleChange}
            />
            <br />
            <label> Fecha Inspección</label>
            <input
              className="form-control"
              type="text"
              name="inspecfecha"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.inspecfecha: ''}
              onChange={handleChange}
            />
            <br />
            <label> Inspector (Nom/Apell) </label>
            <input
              className="form-control"
              type="text"
              name="inspector"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.inspector: ''}
              onChange={handleChange}
            />
            <br />
            <label> Número de Intimaciones </label>
            <input
              className="form-control"
              type="text"
              name="intimacion"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.intimacion: ''}
              onChange={handleChange}
            />
            <br />
            <label> Número de Insfracciones </label>
            <input
              className="form-control"
              type="text"
              name="infracciones"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.infracciones: ''}
              onChange={handleChange}
            />
            <br />
            <label> Observaciones </label>
            <input
              className="form-control"
              type="text"
              name="observaciones"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.observaciones: ''}
              onChange={handleChange}
            />
            <br />
            <label> Pase a Número Destino </label>
            <input
              className="form-control"
              type="text"
              name="paseanumdestino"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.paseanumdestino: ''}
              onChange={handleChange}
            />
            <br />
            <label> Fecha: </label>
            <input
              className="form-control"
              type="text"
              name="fecha"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.fecha: ''}
              onChange={handleChange}
            />
            <br />
            <label> Pase a Fecha </label>
            <input
              className="form-control"
              type="text"
              name="paseafecha"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.paseafecha: ''}
              onChange={handleChange}
            />
            <br />
            <label> Identificación de Usuario </label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="userid"              
              value={inspeccionSeleccionado ? inspeccionSeleccionado.userid: ''}
              onChange={handleChange}
            />
            <br />
            
            {/* <img className="imagenredondo" src={inspeccionSeleccionado.fotoint}/> */}
            {/* <img src={require('./images/obradeconstruccion.jpg')} /> */}
            <br />
            {/* <br />
            <label>Fotos de Obra</label>
            <br /><br />
            <img src={require('./images/obradeconstruccion.jpg')} />
            <br /> */}
          </div>
        </ModalBody>
        <ModalFooter>
         {/* <button className="btn btn-success" onClick={()=>editar()}>
            Modo Admin
          </button> */}
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

 {/* MODO LISTAR */}
 <Modal isOpen={modalEditarInfo}>
        <ModalHeader>
          <div>
            <h3>Información Completa</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <h5>Boleta Intimacion Nº</h5>
            {/* <h1>{inspeccionSeleccionado.señorseñora}</h1> */}
            <input
              className="form-control" type="text" name="boletaintnum" readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.boletaintnum}
              onChange={handleChange}
            />
            <br />
            <label>Fecha Intimación</label>
            <input
              className="form-control" type="text" name="señorseñora" readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.fechaintimacion}
              onChange={handleChange}
            />
            <br />
            <label>Hora Intimación</label>
            <input
              className="form-control" type="text" name="señorseñora" readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.horaintimacion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Expediente</label>
            <input
              className="form-control" type="text" name="numexpedienteint" 
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.numexpedienteint}
              onChange={handleChange}
            />
            <br />
            <label>ADREMA</label>
            <input
              className="form-control" type="text" name="adremaint" 
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.adremaint}
              onChange={handleChange}
            />
            <br />
            <label>Señor/a</label>
            <input
              className="form-control" type="text" name="señorseñora" readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.señorseñora}
              onChange={handleChange}
            />
            <br />
            <label>Domicilio Particular</label>
            <input
              className="form-control"
              type="text"
              name="domiciliopart"
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.domiciliopart}
              onChange={handleChange}
            />
            <br />
            <label>Lugar de Actuación</label>
            <input
              className="form-control"
              type="text"
              name="lugaractuacion"
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.lugaractuacion}
              onChange={handleChange}
            />
            <br />
            <label>Otorga un plazo de (Días)</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.otorgaplazode}
              onChange={handleChange}
            />
            <br />
            <label>Para el Cumplimiento a</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.paracumplimientoa}
              onChange={handleChange}
            />
            <br />
            <label>Notificado</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.notificadoint}
              onChange={handleChange}
            />
            <br />
            <label>Aclaración</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.aclaracion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Código Int.</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.numcodigoint}
              onChange={handleChange}
            />
            <br />
            <label>Inspector (Nombre y Apellido)</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={inspeccionSeleccionado && inspeccionSeleccionado.Inspectorint}
              onChange={handleChange}
            />
            <br/>
            <label className='fontNegraBold' >Fotos de Obra</label>
            <br/><br/>
            <img   
            className="imagenredondo"
            src={inspeccionSeleccionado && inspeccionSeleccionado.fotoint}            
            readOnly 
            width="380" 
            />
            <br/>
            {/* 
            <input 
            type="image" 
            className="imagenredondo"
            src={inspeccionSeleccionado && inspeccionSeleccionado.fotoint[1]}            
            readOnly 
            width="380" 
            >
            </input>
            <br/>
            <input 
            type="image" 
            className="imagenredondo"
            src={inspeccionSeleccionado && inspeccionSeleccionado.fotoint[2]}            
            readOnly 
            width="380" 
            >
            </input>
            <br/>
            <input 
            type="image" 
            className="imagenredondo"
            src={inspeccionSeleccionado && inspeccionSeleccionado.fotoint[3]}            
            readOnly 
            width="380" 
            >
            </input> */}
            {/* <br />
            
            <br /><br />
            <img className="imagenredondo" src={inspeccionSeleccionado.fotoint}/>
            {/* <img src={require('./images/obradeconstruccion.jpg')} /> */}
            <br />
          </div>
        </ModalBody>
        <ModalFooter>         
          <button
            className="btn btn-success"
            onClick={()=>setModalEditarInfo(false)}
          >
            Aceptar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar la Intimación Nº {inspeccionSeleccionado && inspeccionSeleccionado.boletaintnum}
          <br/>
          de la fecha {inspeccionSeleccionado && inspeccionSeleccionado.fechaintimacion}
        </ModalBody>
        <ModalFooter>
          {/* <form onSubmit={(p) => handleDelete(p)}>
              <button className="btn btn-primary" type='submit'> Eliminar Intimación </button>
          </form> */}
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
      </div>
    
  )}

export default ListInspeccion;





// import React from 'react';
// // import Button from '@material-ui/core/Button'; // importo estilo de boton
// // import Button from '@mui/material/Button'; // importo estilo de boton
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Button, Tablet, Container } from 'reactstrap'
// // import Pagination from '@mui/material/Pagination'

// import './styles/Home.css'; // importo los styles de mi Home.css

// //IMPORTO PORQUE USAMOS HOOKS
// import { useState, useEffect, Fragment } from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
// import { useDispatch, useSelector } from 'react-redux';
// import { getExpedientes, setPage, orderByName } from '../actions/index.js';//Siempre importo las acciones nuevas 

// //LINK nos sirve para poder movernos por nuestra aplicación
// //más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
// import { Link } from 'react-router-dom';

// //ME IMPORTO EL COMPONENTE Card y renderizo en linea 
// import CardInspeccion from './Cards/CardInspeccion';
// import SearchBarExp from './SearchBars/SearchBarInsp';
// import Paginado from './Paginado';

// export default function ListExpediente() {
//     const { expedientes, name, page, order } = useSelector(state => state);
//     const dispatch = useDispatch(); // PARA USAR HOOKS
//     const allExpedientes = useSelector((state) => state.expedientes) //HOOKS es lo mismo q maps.state.props
//     const [orden, setOrden] = useState(''); // es un estado local q arranca vacio para el Asc y Desc Order

//     //CREO VARIOS ESTADOS LOCALES y lo seteo en 1- ACA CALCULO LAS CARD POR PAGINAS
//     const [currentPage, setCurrentPage] = useState(1); //defino 2 stados 1 con pagina actual y otro q resetea pagina actual
//     const [expedientesPerPage, setExpedientesPerPage] = useState(10); // seteo los perros por pagina, depues usar variable para mostrar por cantidad elegida    
//     const indexOfLastexpediente = currentPage * expedientesPerPage // aca vale 0 a 14 = 15
//     const indexOfFirstexpediente = indexOfLastexpediente - expedientesPerPage // 0

//     //currentGames devuelve un arreglo q entra del 1 al 15
//     //creo una constante de los Games en la pagina actual y me traigo el array del estado de los Games 
//     //const currentExpedientes =  allExpedientes.slice(indexOfFirstexpediente, indexOfLastexpediente)  /// rompeee la pagina

//     const paginado = (pageNumber) => {
//         setCurrentPage(pageNumber)
//     }
//     // TRAIGO DEL ESTADO LOS Expedientes CUANDO EL COMPONENTE SE MONTA
//     useEffect(() => {
//         dispatch(getExpedientes());
//         // getListGenres para usar con filtrados por Genero
//     }, [dispatch])
//     // PARA RESETEAR AL TOCAR EL BOTON volver a cargar los Expedientes
//     function handleClick(p) {
//         p.preventDefault(); //PREVENTIVO PARA Q NO RECARGUE TODA LA PAGINA
//         dispatch(getExpedientes())
//     };
//     // ORDENAMIENTO DE PAGINA ASCENDENTE O DESCENDENTE
//     function handleSort(p) {
//         p.preventDefault();
//         dispatch(orderByName(p.target.value)) //despacho la accion
//         setCurrentPage(1); //ordenamiento seteado en pagina 1
//         setOrden(`Ordenado ${p.target.value}`)  //es un estado local vacio, lo uso para modif estado local y renderize
//     };

//     const listainspecciones = [{
//         numexpediente:"xxxxxxx",
//         fechaentradinspec:"12/12/2020",
//         inspecfecha:"20/01/2021",
//         inspector:"xxxxxxx xxxxxxx",
//         fotoinspeccion:"Foto",
//         intimacion:"105025",
//         infracciones:"No Posee",
//         observaciones:"No Posee",
//         paseanumdestino:"xxxxxxxxxxxxxx",
//         fecha:"20/02/2021",
//         pasea:"xxxxxxx",
//         fechapasea:"20/08/2022"
//     },{
//         numexpediente:"xxxxxxx",
//         fechaentradinspec:"12/12/2020",
//         inspecfecha:"20/01/2021",
//         inspector:"xxxxxxx xxxxxxx",
//         fotoinspeccion:"Foto",
//         intimacion:"105025",
//         infracciones:"No Posee",
//         observaciones:"No Posee",
//         paseanumdestino:"xxxxxxxxxxxxxx",
//         fecha:"20/02/2021",
//         pasea:"xxxxxxx",
//         fechapasea:"20/08/2022"
//     },{
//         numexpediente:"xxxxxxx",
//         fechaentradinspec:"12/12/2020",
//         inspecfecha:"20/01/2021",
//         inspector:"xxxxxxx xxxxxxx",
//         fotoinspeccion:"Foto",
//         intimacion:"105025",
//         infracciones:"No Posee",
//         observaciones:"No Posee",
//         paseanumdestino:"xxxxxxxxxxxxxx",
//         fecha:"20/02/2021",
//         pasea:"xxxxxxx",
//         fechapasea:"20/08/2022"
//     }]
    
//     return (

//         <div>
//             <div>
//                 <div>
//                     <br />
//                     <a href="/home"><img height="50" src={require('./images/logoMuni.png')} /></a><br/>
//                     <img height="130" src={require('./images/logoexpedientes.jpg')} />
//                     {/* <img height="200" src="./images/logoMuni.jpg" /> */}
//                     {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' height="110" alt="to home" /> */}

//                     <h1 className="colorLetras">Listado de Inspecciones</h1>
//                     {/* <Pagination count={10} color="primary" /> */}

//                     {/* <select className="selectfont">
//                         <option value="" selected disabled hidden>ORDENAR</option>                
//                         <option value='asc'>Fecha</option>
//                         <option value='desc'>Estado</option>
//                         {/* <option value='inicioexpediente'>Fecha Inicio Expediente</option>
//                         <option value='fecharegistrado'>Fecha Plano Registrado</option>
//                     </select>   */}

//                     <Link to='/InspecCreate'><Button color='primary'>CARGAR INSPECCION</Button></Link> <label> </label>
//                     <Button color='primary' onClick={p => { handleClick(p) }}>Recargar Inspeciones</Button> <label> </label>
//                     <Link to='/Home'><Button color="danger">Volver Menu Principal</Button></Link>
//                     <br /><br />
//                     <SearchBarExp
//                     />
//                     <br /><br />
//                     {/* <br /><br /> */}
//                     <img src={require('./images/separadorpagina.png')} />
//                     {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
//                     <br />
//                 </div>

//                 <div>
//                     {/* Rompía pagina */}
//                     <Paginado
//                         expedientesPerPage={expedientesPerPage}
//                         allExpedientes={allExpedientes.length}
//                         paginado={paginado}
//                     />
//                 </div>
//                 <div>
//                     {listainspecciones?.map((p) => {  // CON ? PREGUNTA SI EXISTE Y DESPUES MAPEA   
//                         return (
//                             <Fragment>
//                                 <div>
//                                     <Link
//                                         key={p.id}
//                                         to={`/expedientes/${p.id}`}>
//                                         <CardInspeccion
//                                             numexpediente={p.numexpediente}
//                                             // image={p.image ? p.image : p.image}
//                                             fechaentradinspec={p.fechaentradinspec}
//                                             inspecfecha={p.inspecfecha}
//                                             inspector={p.inspector}
//                                             fotoinspeccion={p.fotoinspeccion}
//                                             intimacion={p.intimacion}
//                                             infracciones={p.infracciones}
//                                         />
//                                     </Link>
//                                     {/* : (
//                             <div>
//                                 <h1>CARGANDO...</h1>                  
//                             </div>
//                             ) */}
//                                 </div>

//                             </Fragment>
//                         );
//                     })}
//                 </div>

//                 {/* <img className='logocorrientes' src="http://www.cij.gov.ar/adj/fotos/2019-03/44-0.971624001553273257_B.jpg" width="600" height="300" /> */}
//                 {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
//                 <img src={require('./images/separadorpagina.png')} />
//                 <br /><br />
//                 {/* <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
//             <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/> */}
//                 <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
//                 {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
//             <br/>
//             <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
//             <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/>*/}
//             </div>
//         </div>
//     )
// }