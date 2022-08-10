import React, {useState, useEffect, Fragment} from 'react';
import logo from './styles/logo.svg';
import './styles/AppCrud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button, Label} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'; 
import {getInfracciones, postInfraccion, deleteInfracciones, getNameInfracciones} from '../actions';
import SearchBarInf from './SearchBars/SearchBarInf';
// import { applyMiddleware } from 'redux'; aprender ridux toolkin

// const upload = require('./libs/storage')
// import multer from 'multer';

// const multer = require ('multer')
// const upload = multer({
//   dest: 'Storage/imgs'  
// })
const dataInfraccionarray = [
  // { id: 1, 
  //   actainfnum: "7106",
  //   fechainfraccion:"06/06/2022",
  //   horainfraccion:"11:05",
  //   numexpedienteinf:"5454P2022",
  //   adremainf:"A1-232323-1",      
  //   apellidonombrepropietarioinf: "Jose Romero",
  //   dnipropietarioinf:"29825852",
  //   cuilpropietarioinf:"20298258521",
  //   lugardeconstitucioninf:"Las Margaritas 448",      
  //   Causasinf:"por estar realizando trabajos y no poseer en obra, y plano registrado",
  //   Ordenanzanum:"vigente",            
  //   articuloinf:"--",
  //   incisonum:"--",
  //   observacion:"se deja presente en la puerta de entrada",
  //   apellidonombretestigoinf:"Jose Carlos Amarilla",
  //   Inspectorinf:"Ramos Carlos Alegre",
  //   Inspectorcod:"07/045",
  //   detallegeneral:"se realizaron trabajos de elevacion de techo y mamposteria",
  //   informeinpecnum:"3939",
  //   inforinspecobsevaciones:"En el dia de la fecha se labro acta de infraccion, y paralizacion de obra numero 520",
  //   fotoinf:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/6JZ3CA5VYBBUFOKM7V7WYLOC4A.jpg"

  // }
];

function InspecCreate() {
  const [errors, setErrors] = useState({});     
  const navigate = useNavigate();
  const dispatch = useDispatch(); // PARA USAR HOOKS
  const infracciones = useSelector((state) => state.infracciones) //HOOKS es lo mismo q maps.state.props
  const [orden, setOrden] = useState(''); // es un estado local q arranca vacio para el Asc y Desc Order
  //const { intimaciones, name, page, order } = useSelector(state => state);
  const alldatainf = dataInfraccionarray.concat(infracciones);

  function validate(input){
    let errors ={};
    if (!input.boletainfnum) {
            errors.boletainfnum = 'Requiere Numero de Boleta';
    }else if (!input.señorseñora) {
            errors.señorseñora = 'Requiere Nombre y Apellido'   
    return errors;
    };
 }  
  const [data, setData] = useState(alldatainf);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEditarInfo, setModalEditarInfo] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [InfraccionSeleccionado, setInfraccionSeleccionado] = useState({    
        actainfnum: '', 
        fechainfraccion:'',
        horainfraccion:'',
        numexpedienteinf:'',
        adremainf:'',
        apellidonombrepropietarioinf:'',
        dnipropietarioinf:'',
        cuilpropietarioinf:'',
        lugardeconstitucioninf:'',
        Causasinf:'',
        Ordenanzanum:'',
        articuloinf:'',
        incisonum:'',
        observacion:'',
        apellidonombretestigoinf:'',
        Inspectorinf:'',
        Inspectorcod:'',
        detallegeneral:'',
        informeinpecnum:'',
        inforinspecobsevaciones:'',
        fotoinf:''
  });
 // TRAIGO DEL ESTADO LAS INFRACCIONES CUANDO EL COMPONENTE SE MONTA
 useEffect(() => {
  dispatch(getInfracciones());
  // getListGenres para usar con filtrados por Genero
  }, [dispatch])
  const seleccionarIntimacion=(elemento, caso)=>{
  setInfraccionSeleccionado(elemento);
  if (caso==='EditarInfo') setModalEditarInfo(true)
  else
  if (caso==='Editar') setModalEditar(true)
  else
  if (caso==='Eliminar') setModalEliminar(true)
  
  // (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
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

  const handleChange=e=>{
    const {name, value}=e.target;
    setInfraccionSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }
  function handleClick(p) {
    p.preventDefault(); //PREVENTIVO PARA Q NO RECARGUE TODA LA PAGINA
    dispatch(getInfracciones())
  };
  function handleSelect(p){
    setInfraccionSeleccionado({
      ...InfraccionSeleccionado,
      //genre:[...input.genre, p.target.value] //para el array de Generos q concatene las selecciones
    })
  }

function handleDelete(p){
    p.preventDefault();
    //console.log(p)
    setErrors(validate({
      ...InfraccionSeleccionado,
      [p.target.boletainfnum]: p.target.value
    }));
    dispatch(deleteInfracciones(InfraccionSeleccionado.id)); // input es el payload
    alert("infracción Borrada!!!")
    dispatch(getInfracciones())
    navigate('/home');
  }

// function handleDelete(p){
//     p.preventDefault();
//     //console.log(p)
//     setErrors(validate({
//       ...IntimacionSeleccionado,
//       [p.target.boletaintnum]: p.target.value
//     }));
//     dispatch(deleteIntimacion(IntimacionSeleccionado)); // input es el payload
//     alert("Intimación Borrada!!!")
//     navigate('/home');
//   }


function handleSubmit(p) {
  p.preventDefault();
  //console.log(p)
  setErrors(validate({
    ...InfraccionSeleccionado,
    [p.target.boletainfnum]: p.target.value
  }));
  dispatch(postInfraccion(InfraccionSeleccionado)); // input es el payload
  alert("Infraccion Creada!!!")
  setInfraccionSeleccionado({ // seteo el input a cero
        actainfnum:'', 
        fechainfraccion:'',
        horainfraccion:'',
        numexpedienteinf:'',
        adremainf:'',
        apellidonombrepropietarioinf:'',
        dnipropietarioinf:'',
        cuilpropietarioinf:'',
        lugardeconstitucioninf:'',
        Causasinf:'',
        Ordenanzanum:'',
        articuloinf:'',
        incisonum:'',
        observacion:'',
        apellidonombretestigoinf:'',
        Inspectorinf:'',
        Inspectorcod:'',
        detallegeneral:'',
        informeinpecnum:'',
        inforinspecobsevaciones:'',
        fotoinf:'',
        userid:''
  })
  // history.push('/home')
  navigate('/home');
} 

  const editar =()=>{
    var dataNueva=data;
    dataNueva.map(infraccion=>{
      if(infraccion.id===InfraccionSeleccionado.id){
        infraccion.actainfnum=InfraccionSeleccionado.actainfnum;
        infraccion.fechainfraccion=InfraccionSeleccionado.fechainfraccion;
        infraccion.horainfraccion=InfraccionSeleccionado.horainfraccion;
        infraccion.numexpedienteinf=InfraccionSeleccionado.numexpedienteinf;
        infraccion.adremainf=InfraccionSeleccionado.adremainf;
        infraccion.apellidonombrepropietarioinf=InfraccionSeleccionado.apellidonombrepropietarioinf; 
        infraccion.dnipropietarioinf=InfraccionSeleccionado.dnipropietarioinf;
        infraccion.cuilpropietarioinf=InfraccionSeleccionado.cuilpropietarioinf;
        infraccion.lugardeconstitucioninf=InfraccionSeleccionado.lugardeconstitucioninf;
        infraccion.Causasinf=InfraccionSeleccionado.Causasinf;
        infraccion.Ordenanzanum=InfraccionSeleccionado.Ordenanzanum;
        infraccion.articuloinf=InfraccionSeleccionado.articuloinf;
        infraccion.incisonum=InfraccionSeleccionado.incisonum;
        infraccion.observacion=InfraccionSeleccionado.observacion;
        infraccion.apellidonombretestigoinf=InfraccionSeleccionado.apellidonombretestigoinf;
        infraccion.Inspectorinf=InfraccionSeleccionado.Inspectorinf;
        infraccion.Inspectorcod=InfraccionSeleccionado.Inspectorcod;
        infraccion.detallegeneral=InfraccionSeleccionado.detallegeneral;
        infraccion.informeinpecnum=InfraccionSeleccionado.informeinpecnum;
        infraccion.inforinspecobsevaciones=InfraccionSeleccionado.inforinspecobsevaciones;
        infraccion.fotoinf=InfraccionSeleccionado.fotoinf;
      }
    });  
    setData(dataNueva);
    setModalEditar(false);
    }

    const EditarInfo =()=>{
        var dataNueva=data;
        dataNueva.map(infraccion=>{
          if(infraccion.id===InfraccionSeleccionado.id){
            infraccion.actainfnum=InfraccionSeleccionado.actainfnum;
            infraccion.fechainfraccion=InfraccionSeleccionado.fechainfraccion;
            infraccion.horainfraccion=InfraccionSeleccionado.horainfraccion;
            infraccion.numexpedienteinf=InfraccionSeleccionado.numexpedienteinf;
            infraccion.adremainf=InfraccionSeleccionado.adremainf;
            infraccion.apellidonombrepropietarioinf=InfraccionSeleccionado.apellidonombrepropietarioinf; 
            infraccion.dnipropietarioinf=InfraccionSeleccionado.dnipropietarioinf;
            infraccion.cuilpropietarioinf=InfraccionSeleccionado.cuilpropietarioinf;
            infraccion.lugardeconstitucioninf=InfraccionSeleccionado.lugardeconstitucioninf;
            infraccion.Causasinf=InfraccionSeleccionado.Causasinf;
            infraccion.Ordenanzanum=InfraccionSeleccionado.Ordenanzanum;
            infraccion.articuloinf=InfraccionSeleccionado.articuloinf;
            infraccion.incisonum=InfraccionSeleccionado.incisonum;
            infraccion.observacion=InfraccionSeleccionado.observacion;
            infraccion.apellidonombretestigoinf=InfraccionSeleccionado.apellidonombretestigoinf;
            infraccion.Inspectorinf=InfraccionSeleccionado.Inspectorinf;
            infraccion.Inspectorcod=InfraccionSeleccionado.Inspectorcod;
            infraccion.detallegeneral=InfraccionSeleccionado.detallegeneral;
            infraccion.informeinpecnum=InfraccionSeleccionado.informeinpecnum;
            infraccion.inforinspecobsevaciones=InfraccionSeleccionado.inforinspecobsevaciones;
            infraccion.fotoinf=InfraccionSeleccionado.fotoinf;
          }
        });  
        setData(dataNueva);
        setModalEditarInfo(false);
        }

  const eliminar =()=>{
    setData(data.filter(infraccion=>infraccion.id!==InfraccionSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setInfraccionSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=InfraccionSeleccionado;
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
                

                    <h1 className="colorLetras">SECCIÓN DE CARGA DE MULTAS/INFRACIONES</h1>                       

                    <img className= 'imagenredondoint' height="200" src={require('./images/Multa-1.jpg')} /> <br/><br/>
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Instimaciones</Button></Link> {" - "}  */}
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Multas</Button></Link> {" - "}  */}
                    <button className="btn btn-danger" onClick={()=>abrirModalInsertar()}>Crear Multa/Infracción</button> {" - "}
                    <Link to= '/ListInspeccion'><Button  color='secondary'>Ir a Inspecciones</Button></Link> {" - "} 
                    <Link to= '/ListIntimacion'><Button  color='secondary'>Ir a Intimaciones</Button></Link> {" - "} 
                    <Link to= '/Home'><Button color='primary'>Volver Menu Principal</Button></Link>

                    <br/>                    

                    <br/>

                    <img src={require('./images/separadorpagina.png')} /> <br/>
                    <h1 className="">Lista de Multas</h1>         
                    <SearchBarInf
                    />
                    
                    
      {/* <h2>Países en los que la gente pasa más tiempo en redes sociales (2019)</h2> */}
      {/* <br /> */}
    
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Boleta Infracción Nº</th>
            <th>Propietario (AyN)</th>
            <th>Numero Expediente</th>
            <th>Numero Adrema</th>
            <th>Lugar Constitución</th>
            <th>fecha de infracción</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              {/* <td>{elemento.id}</td> */}
              <td>{elemento.actainfnum}</td>
              <td>{elemento.apellidonombrepropietarioinf}</td>
              <td>{elemento.numexpedienteinf}</td>
              <td>{elemento.adremainf}</td>
              <td>{elemento.lugardeconstitucioninf}</td>
              <td>{elemento.fechainfraccion}</td>

              <td><button className="btn btn-primary" onClick={()=>seleccionarIntimacion(elemento, 'EditarInfo')}>Info Completa</button> <button className="btn btn-primary" onClick={()=>seleccionarIntimacion(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarIntimacion(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      {/* // **** INSERTAR - CREAR **** */}
  <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Carga de Boleta Multa/Infracción</h3>
          </div>
        </ModalHeader>
        <ModalBody>
        <form method="post" enctype="multipart/form-data" action="/upload">
          <div className="form-group">
            {/* <label>ID</label> */}
            {/* <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            /> */}
            <br />
            <h5>Acta Infracción Nº</h5>
            <input
              className="form-control"
              type="text"
              name="actainfnum"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.actainfnum: ''}
              onChange={handleChange}
            />
            <br />
            <label>Fecha de Infracción (dd/mm/aaaa)</label>
            <input
              className="form-control"
              type="text"
              name="fechainfraccion"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.fechainfraccion: ''}
              onChange={handleChange}
            />
            <label>Hora Infracción (hora/minuto)</label>
            <input
              className="form-control"
              type="text"
              name="horainfraccion"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.horainfraccion: ''}
              onChange={handleChange}
            />
            <br />
            <label>Número de Expediente</label>
            <input
              className="form-control"
              type="text"
              name="numexpedienteinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.numexpedienteinf: ''}
              onChange={handleChange}
            />
            <br />
            <label>ADREMA</label>
            <input
              className="form-control"
              type="text"
              name="adremainf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.adremainf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Propietario (N y A)</label>
            <input
              className="form-control"
              type="text"
              name="apellidonombrepropietarioinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.apellidonombrepropietarioinf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Documento Nacional Identidad</label>
            <input
              className="form-control"
              type="text"
              name="dnipropietarioinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.dnipropietarioinf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Cuit / Cuit Propietario</label>
            <input
              className="form-control"
              type="text"
              name="cuilpropietarioinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.cuilpropietarioinf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Lugar de Constitución</label>
            <input
              className="form-control"
              type="text"
              name="lugardeconstitucioninf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.lugardeconstitucioninf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Causas</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="Causasinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.Causasinf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Ordenanza Nº</label>
            <input
              className="form-control"
              type="text"
              name="Ordenanzanum"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.Ordenanzanum: ''}
              onChange={handleChange}
            />
            <br />
            <label>Articulo Nº</label>
            <input
              className="form-control"
              type="text"
              name="articuloinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.articuloinf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Inciso Nº</label>
            <input
              className="form-control"
              type="text"
              name="incisonum"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.incisonum: ''}
              onChange={handleChange}
            />
            <br />
            <label>Observaciones</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="observacion"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.observacion: ''}
              onChange={handleChange}
            />
            <br />
            <label>Testigo (A y N)</label>
            <input
              className="form-control"
              type="text"
              name="apellidonombretestigoinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.apellidonombretestigoinf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Inspector (N y A)</label>
            <input
              className="form-control"
              type="text"
              name="Inspectorinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.Inspectorinf: ''}
              onChange={handleChange}
            />
            <br />
            <label>Código Inspector</label>
            <input
              className="form-control"
              type="text"
              name="Inspectorcod"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.Inspectorcod: ''}
              onChange={handleChange}
            />
            <br />
            <label>Detalle General</label>
            <textarea
              rows="3"
              className="form-control"
              type="text"
              name="detallegeneral"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.detallegeneral: ''}
              onChange={handleChange}
            />           
            <br />
            <label>Informe Inspección Nº</label>
            <input
              className="form-control"
              type="text"
              name="informeinpecnum"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.informeinpecnum: ''}
              onChange={handleChange}
            />
            <br />
            <label>Informe Inspector Observaciones</label>
            <textarea
              rows="3"
              className="form-control"
              type="text"
              name="inforinspecobsevaciones"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.inforinspecobsevaciones: ''}
              onChange={handleChange}
            />
            <br />
            {/* <label>Subir Fotos:</label> */}
            {/* <input
              className="form-control"
              type="file"
              name="fotoinf"
              value={InfraccionSeleccionado ? InfraccionSeleccionado.fotoinf:''}
              onChange={handleChange}
            /> */}
          </div>
        </form>
        </ModalBody>
        <ModalFooter>
        <form onSubmit={(p) => handleSubmit(p)}>
              <button className="btn btn-primary" type='submit'> Crear Intimación! </button>
          </form>
          {/* <button className="btn btn-danger"
          onClick={()=>insertar()}>
            Insertar
          </button> */}
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      {/* // ****************** MODO EDITAR ****************** */}
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Infraccion/Multa</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <h5 >Acta Infracción Nº</h5>
            {/* <h1>{InfraccionSeleccionado.señorseñora}</h1> */}
            <input
              className="form-control" 
              type="text" 
              name="actainfnum"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.actainfnum}
              onChange={handleChange}
            />
            <br />
            <label className="labelcreateediteliminarbold">Fecha Infracción</label>
            <input
              className="form-control" 
              type="text" 
              name="fechainfraccion"
            //    readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.fechainfraccion}
              onChange={handleChange}
            />
            <br />
            <label>Hora Infracción</label>
            <input
              className="form-control" type="text" name="horainfraccion"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.horainfraccion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Expediente</label>
            <input
              className="form-control" type="text" name="numexpedienteinf" 
              //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.numexpedienteinf}
              onChange={handleChange}
            />
            <br />
            <label>ADREMA</label>
            <input
              className="form-control" type="text" name="adremainf" 
              //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.adremainf}
              onChange={handleChange}
            />
            <br />
            <label>Propietario (AyN)</label>
            <input
              className="form-control" type="text" name="apellidonombrepropietarioinf" 
              //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.apellidonombrepropietarioinf}
              onChange={handleChange}
            />
            <br />
            <label>DNI Propietario</label>
            <input
              className="form-control"
              type="text"
              name="dnipropietarioinf"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.dnipropietarioinf}
              onChange={handleChange}
            />
            <br />
            <label>Cuil/Cuit Propietario</label>
            <input
              className="form-control"
              type="text"
              name="cuilpropietarioinf"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.cuilpropietarioinf}
              onChange={handleChange}
            />
            <br />
            <label>Lugar de Constitución</label>
            <input
              className="form-control"
              type="text"
              name="lugardeconstitucioninf"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.lugardeconstitucioninf}
              onChange={handleChange}
            />
            <br />
            <label>Causas</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="Causasinf"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.Causasinf}
              onChange={handleChange}
            />
            <br />
            <label>Ordenanza Nº</label>
            <input
              className="form-control"
              type="text"
              name="Ordenanzanum"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.Ordenanzanum}
              onChange={handleChange}
            />
            <br />
            <label>Articulo Nº</label>
            <input
              className="form-control"
              type="text"
              name="articuloinf"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.articuloinf}
              onChange={handleChange}
            />
            <br />
            <label>Inciso Nº</label>
            <input
              className="form-control"
              type="text"
              name="incisonum"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.incisonum}
              onChange={handleChange}
            />
            <br />
            <label>Observaciones</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="observacion"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.observacion}
              onChange={handleChange}
            />
            <br />
            <label>Testigo (N y A)</label>
            <input
              className="form-control"
              type="text"
              name="apellidonombretestigoinf"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.apellidonombretestigoinf}
              onChange={handleChange}
            />
            <br />
            <label>Inspector (N y A)</label>
            <input
              className="form-control"
              type="text"
              name="Inspectorinf"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.Inspectorinf}
              onChange={handleChange}
            />
            <br />
            <label>Código de Inspector</label>
            <input
              className="form-control"
              type="text"
              name="Inspectorcod"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.Inspectorcod}
              onChange={handleChange}
            />
            <br />
            <label>Detalle General</label>
            <textarea
              rows="3"
              className="form-control"
              type="text"
              name="detallegeneral"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.detallegeneral}
              onChange={handleChange}
            />
            <br />
            <label>Informe de Inspeccion Nº</label>
            <input
              className="form-control"
              type="text"
              name="informeinpecnum"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.informeinpecnum}
              onChange={handleChange}
            />
            <br />
            <label>Observaciones del Inf. de Inspección</label>
            <textarea
              rows="3"             
              className="form-control"
              type="text"
              name="inforinspecobsevaciones"
            //   readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.inforinspecobsevaciones}
              onChange={handleChange}
            />          
            <br />
            <label>Fotos de Obra</label>
            <br />
            <input             
              className="form-control"
              type="text"
              name="fotoinf"
              value={InfraccionSeleccionado && InfraccionSeleccionado.fotoinf}
              onChange={handleChange}
              // {/* <img className="imagenredondo" src={InfraccionSeleccionado.fotoinf}/> */}
              // {/* <img src={require('./images/obradeconstruccion.jpg')} /> */}
            />  
            <br />
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
            <h5>Acta Infracción Nº</h5>
            {/* <h1>{InfraccionSeleccionado.señorseñora}</h1> */}
            <input
              className="form-control" 
              type="text" 
              name="actainfnum"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.actainfnum}
              onChange={handleChange}
            />
            <br />
            <label className="labelcreateediteliminarbold">Fecha Infracción</label>
            <input
              className="form-control" 
              type="text" 
              name="fechainfraccion"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.fechainfraccion}
              onChange={handleChange}
            />
            <br />
            <label>Hora Infracción</label>
            <input
              className="form-control" type="text" name="horainfraccion"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.horainfraccion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Expediente</label>
            <input
              className="form-control" type="text" name="numexpedienteinf" 
                readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.numexpedienteinf}
              onChange={handleChange}
            />
            <br />
            <label>ADREMA</label>
            <input
              className="form-control" type="text" name="adremainf" 
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.adremainf}
              onChange={handleChange}
            />
            <br />
            <label>Propietario (AyN)</label>
            <input
              className="form-control" type="text" name="apellidonombrepropietarioinf" 
                readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.apellidonombrepropietarioinf}
              onChange={handleChange}
            />
            <br />
            <label>DNI Propietario</label>
            <input
              className="form-control"
              type="text"
              name="dnipropietarioinf"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.dnipropietarioinf}
              onChange={handleChange}
            />
            <br />
            <label>Cuil/Cuit Propietario</label>
            <input
              className="form-control"
              type="text"
              name="cuilpropietarioinf"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.cuilpropietarioinf}
              onChange={handleChange}
            />
            <br />
            <label>Lugar de Constitución</label>
            <input
              className="form-control"
              type="text"
              name="lugardeconstitucioninf"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.lugardeconstitucioninf}
              onChange={handleChange}
            />
            <br />
            <label>Causas</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="Causasinf"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.Causasinf}
              onChange={handleChange}
            />
            <br />
            <label>Ordenanza Nº</label>
            <input
              className="form-control"
              type="text"
              name="Ordenanzanum"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.Ordenanzanum}
              onChange={handleChange}
            />
            <br />
            <label>Articulo Nº</label>
            <input
              className="form-control"
              type="text"
              name="articuloinf"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.articuloinf}
              onChange={handleChange}
            />
            <br />
            <label>Inciso Nº</label>
            <input
              className="form-control"
              type="text"
              name="incisonum"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.incisonum}
              onChange={handleChange}
            />
            <br />
            <label>Observaciones</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="observacion"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.observacion}
              onChange={handleChange}
            />
            <br />
            <label>Testigo (N y A)</label>
            <input
              className="form-control"
              type="text"
              name="apellidonombretestigoinf"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.apellidonombretestigoinf}
              onChange={handleChange}
            />
            <br />
            <label>Inspector (N y A)</label>
            <input
              className="form-control"
              type="text"
              name="Inspectorinf"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.Inspectorinf}
              onChange={handleChange}
            />
            <br />
            <label>Código de Inspector</label>
            <input
              className="form-control"
              type="text"
              name="Inspectorcod"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.Inspectorcod}
              onChange={handleChange}
            />
            <br />
            <label>Detalle General</label>
            <textarea
              rows="3"
              className="form-control"
              type="text"
              name="detallegeneral"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.detallegeneral}
              onChange={handleChange}
            />
            <br />
            <label>Informe de Inspeccion Nº</label>
            <input
              className="form-control"
              type="text"
              name="informeinpecnum"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.informeinpecnum}
              onChange={handleChange}
            />
            <br />
            <label>Observaciones del Inf. de Inspección</label>
            <textarea
              rows="3"
              className="form-control"
              type="text"
              name="inforinspecobsevaciones"
              readOnly
              value={InfraccionSeleccionado && InfraccionSeleccionado.inforinspecobsevaciones}
              onChange={handleChange}
            />          
            <br />
            <label>Fotos de Obra</label>
            <br />
            <input 
            type="image" 
            className="imagenredondo"
            src={InfraccionSeleccionado && InfraccionSeleccionado.fotoinf} 
            readOnly 
            width="380" 
            >
            </input>
            <br />
            {/* <img className="imagenredondo" src={InfraccionSeleccionado.fotoinf}/> */}
            {/* <img src={require('./images/obradeconstruccion.jpg')} /> */}
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
         {/* <button className="btn btn-success" onClick={()=>editar()}>
            Modo Admin
          </button>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button> */}
          <button
            className="btn btn-success"
            onClick={()=>setModalEditarInfo(false)}
          >
            Aceptar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody className = "labelcreateediteliminarbold">

          Estás Seguro que deseas eliminar la Infracción Nº {InfraccionSeleccionado && InfraccionSeleccionado.actainfnum}
          <br/>
          de la fecha {InfraccionSeleccionado && InfraccionSeleccionado.fechainfraccion}
        </ModalBody>
        <ModalFooter>
        <form onSubmit={(p) => handleDelete(p)}>
              <button className="btn btn-primary" type='submit'> Eliminar Infracción </button>
          </form>
          {/* <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button> */}
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
      </div>
  );
}       
        

export default InspecCreate;

//   const dataExpedientes = [
//     { id: 1, 
//       numexpediente: "1221P2022", 
//       intimacion: 105025,
//       inspecfecha:"20/01/2021",
//       inspector:"José Romero",
//       vencintimacion:"22/01/2019"
//     },
//     { id: 2, numexpediente: "1221P2019", intimacion: 225,
//     inspecfecha:"20/01/2019",
//     inspector:"Carlos Soto", vencintimacion:"22/01/2019", fotoinspeccion:""},
//     { id: 3, numexpediente: "1561P2020", intimacion: 216,
//     inspecfecha:"20/01/2021",
//     inspector:"Marcelos Alegre", vencintimacion:"22/01/2019", fotoinspeccion:""},
//     { id: 4, numexpediente: "1289P2018", intimacion: 216,
//     inspecfecha:"20/01/2018",
//     inspector:"Fabián Zacarias", vencintimacion:"22/01/2019", fotoinspeccion:""},
//     { id: 5, numexpediente: "1037P2017", intimacion: 207,
//     inspecfecha:"20/01/2017",
//     inspector:"Martín Mesa", vencintimacion:"22/01/2019", fotoinspeccion:""},
//     { id: 6, numexpediente: "1221P2016", intimacion: 195,
//     inspecfecha:"20/01/2016",
//     inspector:"Agustin Sotomayor", vencintimacion:"22/01/2019", fotoinspeccion:""},
//     { id: 7, numexpediente: "1221P2021", intimacion: 191,
//     inspecfecha:"09/06/2021",
//     inspector:"Carlos Samudio", vencintimacion:"22/01/2019", fotoinspeccion:""},
//     { id: 8, numexpediente: "1221P2020", intimacion: 190,
//     inspecfecha:"20/01/2020",
//     inspector:"Armando Encina", vencintimacion:"22/01/2019", fotoinspeccion:""},
//     { id: 9, numexpediente: "1229P2015", intimacion: 190,
//     inspecfecha:"20/01/2015",
//     inspector:"Marcos Romero", vencintimacion:"22/01/2019", fotoinspeccion:""},
//     { id: 10, numexpediente: "1221P2022", intimacion: 186,
//     inspecfecha:"20/01/2021",
//     inspector:"Maximiliano Ayala", vencintimacion:"22/01/2019", fotoinspeccion:""},
//   ];

//   const [data, setData] = useState(dataExpedientes);
//   const [modalEditar, setModalEditar] = useState(false);
//   const [modalEliminar, setModalEliminar] = useState(false);
//   const [modalInsertar, setModalInsertar] = useState(false);

//   const [ExpedienteSeleccionado, setExpedienteSeleccionado] = useState({
//     id: '',
//     numexpediente: '',
//     intimacion: '',
//     inspecfecha:'',
//     inspector:'',
//     vencintimacion:"",
//     fotos:""
//   });

//   const seleccionarPais=(elemento, caso)=>{
// setExpedienteSeleccionado(elemento);
// (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
//   }

//   const handleChange=e=>{
//     const {name, value}=e.target;
//     setExpedienteSeleccionado((prevState)=>({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   const editar =()=>{
//     var dataNueva=data;
//     dataNueva.map(intimacion=>{
//       if(intimacion.id===ExpedienteSeleccionado.id){
//         intimacion.intimacion=ExpedienteSeleccionado.intimacion;
//         intimacion.numexpediente=ExpedienteSeleccionado.numexpediente;
//         intimacion.inspecfecha=ExpedienteSeleccionado.inspecfecha;
//         intimacion.inspector=ExpedienteSeleccionado.inspector; 
//         intimacion.vencintimacion=ExpedienteSeleccionado.vencintimacion;   
//       }
//     });  
//     setData(dataNueva);
//     setModalEditar(false);
//     }
  

//   const eliminar =()=>{
//     setData(data.filter(intimacion=>intimacion.id!==ExpedienteSeleccionado.id));
//     setModalEliminar(false);
//   }

//   const abrirModalInsertar=()=>{
//     setExpedienteSeleccionado(null);
//     setModalInsertar(true);
//   }

//   const insertar =()=>{
//     var valorInsertar=ExpedienteSeleccionado;
//     valorInsertar.id=data[data.length-1].id+1;
//     var dataNueva = data;
//     dataNueva.push(valorInsertar);
//     setData(dataNueva);
//     setModalInsertar(false);
//   }

//   return (
    
//     <div className="App">
//                     <a href="/home"><img height="50" src={require('./images/logoMuni.png')} /></a><br/>    
//                     {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                
//                     <h2 className="colorLetrasGris">SECCIÓN DE CARGA DE MULTAS/INTIMACIONES</h2>                    
//                     <img className='logocorrientes' height="200" src={require('./images/Multa-1.jpg')} /> <br/><br/>
//                     {/* <select className="selectfont">
//                         <option value="" selected disabled hidden>ORDENAR</option>                
//                         <option value='asc'>Fecha</option>
//                         <option value='desc'>Estado</option>
//                         <option value='desc'>Fecha Inicio Expediente</option>
//                         <option value='desc'>Fecha Plano Registrado</option>
//                     </select>        */}
                    
//                     {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Multas</Button></Link> {" - "}  */}
//                     {/* <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Crear Intimación</button> {" - "} */}
//                     <button className="btn btn-danger" onClick={()=>abrirModalInsertar()}>Crear Multa/Infracción</button> {" - "}
//                     <Link to= '/Home'><Button color='primary'>Volver Menu Principal</Button></Link> {" - "} 
//                     <Link to= '/ListIntimacion'><Button  color='secondary'>Ir a Intimaciones</Button></Link>
//                     <br/>
//                     <img src={require('./images/separadorpagina.png')} /> <br/>
//                     <h1 className="">Lista de Multas</h1>                     
//       {/* <h2>Países en los que la gente pasa más tiempo en redes sociales (2019)</h2> */}
//       {/* <br /> */}
    
    
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             {/* <th>ID</th> */}
//             <th>numero de expediente</th>
//             <th>Intimación</th>
//             <th>Fecha Inspección</th>
//             <th>Inspector</th>
//             <th>Vencimiento Intimación</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(elemento=>(
//             <tr>
//               {/* <td>{elemento.id}</td> */}
//               <td>{elemento.numexpediente}</td>
//               <td>{elemento.intimacion}</td>
//               <td>{elemento.inspecfecha}</td>
//               <td>{elemento.inspector}</td>
//               <td>{elemento.vencintimacion}</td>
//               <td><button className="btn btn-primary" onClick={()=>seleccionarPais(elemento, 'Editar')}>Editar</button> {"   "} 
//               <button className="btn btn-danger" onClick={()=>seleccionarPais(elemento, 'Eliminar')}>Eliminar</button></td>
//             </tr>
//           ))
//           }
//         </tbody>
//       </table>

//       <Modal isOpen={modalEditar}>
//         <ModalHeader>
//           <div>
//             <h3>Editar Intimación</h3>
//           </div>
//         </ModalHeader>
//         <ModalBody>
//           <div className="form-group">
//             {/* <label>ID</label>
//             <input
//               className="form-control"
//               readOnly
//               type="text"
//               name="id"
//               value={ExpedienteSeleccionado && ExpedienteSeleccionado.id}
//             /> */}
//             <br />

//             <label>Expediente</label>
//             <input
//               className="form-control"
//               type="text"
//               name="numexpediente"
//               readOnly
//               value={ExpedienteSeleccionado && ExpedienteSeleccionado.numexpediente}
//               onChange={handleChange}
//             />
//             <br />

//             <label>Intimación</label>
//             <input
//               className="form-control"
//               type="text"
//               name="intimacion"
//               readOnly
//               value={ExpedienteSeleccionado && ExpedienteSeleccionado.intimacion}
//               onChange={handleChange}
//             />
//             <br />
//             <label>Fecha Intimación</label>
//             <input
//               className="form-control"
//               type="text"
//               name="inspecfecha"
//               readOnly
//               value={ExpedienteSeleccionado && ExpedienteSeleccionado.inspecfecha}
//               onChange={handleChange}
//             />
//             <br />
//             <label>Inspector</label>
//             <input
//               className="form-control"
//               type="text"
//               name="inspector"
//               value={ExpedienteSeleccionado && ExpedienteSeleccionado.inspector}
//               onChange={handleChange}
//             />
//             <br />
//             <label>Vencimiento Intimación</label>
//             <input
//               className="form-control"
//               type="text"
//               name="inspector"
//               value={ExpedienteSeleccionado && ExpedienteSeleccionado.vencintimacion}
//               onChange={handleChange}
//             />
            
//             <br />
//           </div>
//         </ModalBody>
//         <ModalFooter>
//          <button className="btn btn-success" onClick={()=>editar()}>
//             Modo Admin
//           </button>
//           <button className="btn btn-primary" onClick={()=>editar()}>
//             Actualizar
//           </button>
//           <button
//             className="btn btn-danger"
//             onClick={()=>setModalEditar(false)}
//           >
//             Cancelar
//           </button>
//         </ModalFooter>
//       </Modal>


//       <Modal isOpen={modalEliminar}>
//         <ModalBody>

//           Estás Seguro que deseas eliminar la Intimación Nº {ExpedienteSeleccionado && ExpedienteSeleccionado.intimacion}
//           <br/>
//           del Expediente Nº {ExpedienteSeleccionado && ExpedienteSeleccionado.numexpediente}
//         </ModalBody>
//         <ModalFooter>
//           <button className="btn btn-danger" onClick={()=>eliminar()}>
//             Sí
//           </button>
//           <button
//             className="btn btn-secondary"
//             onClick={()=>setModalEliminar(false)}
//           >
//             No
//           </button>
//         </ModalFooter>
//       </Modal>


//         <Modal isOpen={modalInsertar}>
//         <ModalHeader>
//           <div>
//             <h3>Acta de Infracción/Multa</h3>
//           </div>
//         </ModalHeader>
//         <ModalBody>
//           <div className="form-group">
//             {/* <label>ID</label>
//             <input
//               className="form-control"
//               readOnly
//               type="text"
//               name="id"
//               value={data[data.length-1].id+1}
//             /> */}
//             <br />
//             <label>Expediente Nº</label>
//             <input
//               className="form-control"
//               type="text"
//               name="numexpediente"
//               value={ExpedienteSeleccionado ? ExpedienteSeleccionado.numexpediente: ''}
//               onChange={handleChange}
//             />
//             <br />
//             <label>Intimación Nº</label>
//             <input
//               className="form-control"
//               type="text"
//               name="intimacion"
//               value={ExpedienteSeleccionado ? ExpedienteSeleccionado.intimacion: ''}
//               onChange={handleChange}
//             />
//             <br />
//             <label>Fecha Intimación (mes/dia/año)</label>
//             <input
//               className="form-control"
//               type="text"
//               name="inspecfecha"
//               value={ExpedienteSeleccionado ? ExpedienteSeleccionado.inspecfecha: ''}
//               onChange={handleChange}
//             />
//             <br />
//             <label>Inspector</label>
//             <input
//               className="form-control"
//               type="text"
//               name="inspector"
//               value={ExpedienteSeleccionado ? ExpedienteSeleccionado.inspector: ''}
//               onChange={handleChange}
//             />
//             <br />
//             <label>Vencimiento Intimación</label>
//             <input
//               className="form-control"
//               type="text"
//               name="vencintimacion"
//               value={ExpedienteSeleccionado ? ExpedienteSeleccionado.vencintimacion: ''}
//               onChange={handleChange}
//             />
//             <br />
//             <label>Subir Fotos:</label>
//             <input
//               className="form-control"
//               type="file"
//               name="fotoinspeccion"
//               value={ExpedienteSeleccionado ? ExpedienteSeleccionado.fotoinspeccion:''}
//               onChange={handleChange}
//             />
//           </div>
//         </ModalBody>
//         <ModalFooter>
//           <button className="btn btn-primary"
//           onClick={()=>insertar()}>
//             Insertar
//           </button>
//           <button
//             className="btn btn-danger"
//             onClick={()=>setModalInsertar(false)}
//           >
//             Cancelar
//           </button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default InspecCreate;
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