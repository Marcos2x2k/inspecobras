import React, {useState, useEffect, Fragment} from 'react';
import logo from './styles/logo.svg';
import './styles/AppCrud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'; 
import {getIntimaciones, postIntimacion, deleteIntimacion, getNameIntimaciones} from '../actions';
import SearchBarInt from './SearchBars/SearchBarInt';


// import { applyMiddleware } from 'redux';
const dataIntimacionarray = [
  // { 
  //   id: 1, 
  //   boletaintnum: "7777",
  //   adremaint:"A1-232323-1",
  //   numexpedienteint:"5454P2022",
  //   señorseñora: "Jose Romero",
  //   domiciliopart:"Se Desconoce",
  //   lugaractuacion:"Santa Fé esquina Rivadavia",
  //   otorgaplazode:"2",
  //   paracumplimientoa:"proceder a reparar la vereda en mal estado, conforme normativas vigentes",
  //   fechaintimacion:"06/06/2022",
  //   horaintimacion:"11:05",
  //   vencimientoint:"08/06/2022",
  //   notificadoint:"propuetario o responsable de Adrema Ausente",
  //   aclaracion:"se deja presente en la puerta de entrada",
  //   numcodigoint:"07/046",
  //   Inspectorint:"Ramos Carlos Alegre",
  //   fotoint:"https://www.elindependiente.com/wp-content/uploads/2022/04/construccion-656x368.jpg"
  // }
  // ,{ id: 2, 
  //     boletaintnum: "8888", 
  //     adremaint:"A1-655656-1",
  //     numexpedienteint:"3354P2021",
  //     señorseñora: "Jose Romero",
  //     domiciliopart:"Gral Paz 5854",
  //     lugaractuacion:"Santa Fé esquina Rivadavia",
  //     otorgaplazode:"5",
  //     paracumplimientoa:"proceder a reparar la vereda en mal estado, conforme normativas vigentes",
  //     fechaintimacion:"06/06/2022",
  //     horaintimacion:"11:05",
  //     vencimientoint:"08/06/2022",
  //     notificadoint:"propuetario o responsable de Adrema Ausente",
  //     aclaracion:"se deja presente en la puerta de entrada",
  //     numcodigoint:"07/046",
  //     Inspectorint:"Ramos Carlos Alegre",
  //     fotoint:"https://www.elindependiente.com/wp-content/uploads/2022/04/construccion-656x368.jpg"
  //   },{ 
  //     id: 3, 
  //     boletaintnum: "9999", 
  //     adremaint:"A1-232323-1",
  //     numexpedienteint:"5454P2022",
  //     señorseñora: "Jose Romero",
  //     domiciliopart:"Se Desconoce",
  //     lugaractuacion:"Santa Fé esquina Rivadavia",
  //     otorgaplazode:"7",
  //     paracumplimientoa:"proceder a reparar la vereda en mal estado, conforme normativas vigentes",
  //     fechaintimacion:"06/06/2022",
  //     horaintimacion:"11:05",
  //     vencimientoint:"08/06/2022",
  //     notificadoint:"propuetario o responsable de Adrema Ausente",
  //     aclaracion:"se deja presente en la puerta de entrada",
  //     numcodigoint:"07/046",
  //     Inspectorint:"Ramos Carlos Alegre",
  //     fotoint:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-eihuwaWCZCE3nTplaz-ezykiIB8xezbhtWicPynTGOml7drYLxxqtHg6eq5YuDqKhA&usqp=CAU"
  //   },{  
  //     id: 4, 
  //     boletaintnum: "1111", 
  //     adremaint:"A1-662239-1",
  //     numexpedienteint:"1111P2019",
  //     señorseñora: "Jose Romero",
  //     domiciliopart:"Se Desconoce",
  //     lugaractuacion:"Santa Fé esquina Rivadavia",
  //     otorgaplazode:"30",
  //     paracumplimientoa:"proceder a reparar la vereda en mal estado, conforme normativas vigentes",
  //     fechaintimacion:"06/06/2019",
  //     horaintimacion:"11:05",
  //     vencimientoint:"08/06/2020",
  //     notificadoint:"propuetario o responsable Ausente",
  //     aclaracion:"se deja presente al propietario",
  //     numcodigoint:"07/046",
  //     Inspectorint:"Ramos Carlos Alegre",
  //     fotoint:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-eihuwaWCZCE3nTplaz-ezykiIB8xezbhtWicPynTGOml7drYLxxqtHg6eq5YuDqKhA&usqp=CAU"
  //   },{ 
  //     id: 5, 
  //     boletaintnum: "2222", 
  //     adremaint:"A1-00000-1",
  //     numexpedienteint:"1111P2019",
  //     señorseñora: "Sosa diego",
  //     domiciliopart:"Se perdio",
  //     lugaractuacion:"Tte. Ibañez",
  //     otorgaplazode:"60",
  //     paracumplimientoa:"proceder a reparar la vereda en mal estado",
  //     fechaintimacion:"05/076/2022",
  //     horaintimacion:"00:49",
  //     vencimientoint:"08/06/2022",
  //     notificadoint:"propuetario o responsable Ausente",
  //     aclaracion:"se deja presente al propietario",
  //     numcodigoint:"07/046",
  //     Inspectorint:"Ramos Carlos Alegre",
  //     fotoint:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTdWH9IB1MQ7DObxNsQXNh7Od82V3cUJZdqnLkGsc-HX1tek2zDj1g0dYDydy182kHpo&usqp=CAU"
  //   }
];

function ListIntimacion() { 
  const [errors, setErrors] = useState({});     
  const navigate = useNavigate();
  const dispatch = useDispatch(); // PARA USAR HOOKS
  const intimaciones = useSelector((state) => state.intimaciones) //HOOKS es lo mismo q maps.state.props
  const [orden, setOrden] = useState(''); // es un estado local q arranca vacio para el Asc y Desc Order
  //const { intimaciones, name, page, order } = useSelector(state => state);
  const alldata = dataIntimacionarray.concat(intimaciones);

  function validate(input){
    let errors ={};
    if (!input.boletaintnum) {
            errors.boletaintnum = 'Requiere Numero de Boleta';
    }else if (!input.señorseñora) {
            errors.señorseñora = 'Requiere Nombre y Apellido'   
    return errors;
    };
 }  
  const [data, setData] = useState(alldata);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEditarInfo, setModalEditarInfo] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [IntimacionSeleccionado, setIntimacionSeleccionado] = useState({
        boletaintnum: '', 
        adremaint:'',
        numexpedienteint:'',
        señorseñora:'',
        domiciliopart:'',
        lugaractuacion:'',
        otorgaplazode:'',
        paracumplimientoa:'',
        fechaintimacion:'',
        horaintimacion:'',
        vencimientoint:'',
        notificadoint:'',
        aclaracion:'',
        numcodigoint:'',
        Inspectorint:'',
        fotoint:''
  });
 // TRAIGO DEL ESTADO LOS Expedientes CUANDO EL COMPONENTE SE MONTA
  useEffect(() => {
  dispatch(getIntimaciones());
  // getListGenres para usar con filtrados por Genero
  }, [dispatch])
  const seleccionarIntimacion=(elemento, caso)=>{
  setIntimacionSeleccionado(elemento);
  if (caso==='EditarInfo') setModalEditarInfo(true)
  else
  if (caso==='Editar') setModalEditar(true)
  else
  if (caso==='Eliminar') setModalEliminar(true)
  
//   (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  //     //------------- PARTE DE HANDLES ---------------------
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
  setIntimacionSeleccionado((prevState)=>({
    ...prevState,
    [name]: value
  }));
}
function handleClick(p) {
  p.preventDefault(); //PREVENTIVO PARA Q NO RECARGUE TODA LA PAGINA
  dispatch(getIntimaciones())
};
function handleSelect(p){
  setIntimacionSeleccionado({
    ...IntimacionSeleccionado,
    //genre:[...input.genre, p.target.value] //para el array de Generos q concatene las selecciones
    })
}
function handleDelete(p){
    p.preventDefault();
    //console.log(p)
    setErrors(validate({
      ...IntimacionSeleccionado,
      [p.target.boletaintnum]: p.target.value
    }));
    dispatch(deleteIntimacion(IntimacionSeleccionado)); // input es el payload
    alert("Intimación Borrada!!!")
    navigate('/home');
  }
  
  function handleSubmit(p) {
    p.preventDefault();
    //console.log(p)
    setErrors(validate({
      ...IntimacionSeleccionado,
      [p.target.boletaintnum]: p.target.value
    }));
    dispatch(postIntimacion(IntimacionSeleccionado)); // input es el payload
    alert("Intimación Creada!!!")
    setIntimacionSeleccionado({ // seteo el input a cero
      boletaintnum: '',
      adremaint: '',
      numexpedienteint: '',
      señorseñora: '',
      domiciliopart: '',
      lugaractuacion: '',
      otorgaplazode: '',
      paracumplimientoa: '',
      fechaintimacion: '',
      horaintimacion: '',
      vencimientoint: '',
      notificadoint: '',
      aclaracion: '',
      numcodigoint: '',
      Inspectorint: '',
      fotoint: ''
    })
    // history.push('/home')
    navigate('/home');
  } 


  const editar =()=>{
    var dataNueva=data;
    dataNueva.map(intimacion=>{
      if(intimacion.id===IntimacionSeleccionado.id){
        intimacion.boletaintnum=IntimacionSeleccionado.boletaintnum;
        intimacion.numexpedienteint=IntimacionSeleccionado.numexpedienteint;
        intimacion.adremaint=IntimacionSeleccionado.adremaint;
        intimacion.señorseñora=IntimacionSeleccionado.señorseñora;
        intimacion.domiciliopart=IntimacionSeleccionado.domiciliopart;
        intimacion.lugaractuacion=IntimacionSeleccionado.lugaractuacion; 
        intimacion.otorgaplazode=IntimacionSeleccionado.otorgaplazode;
        intimacion.paracumplimientoa=IntimacionSeleccionado.paracumplimientoa;
        intimacion.fechaintimacion=IntimacionSeleccionado.fechaintimacion;
        intimacion.horaintimacion=IntimacionSeleccionado.horaintimacion;
        intimacion.vencimientoint=IntimacionSeleccionado.vencimientoint;
        intimacion.notificadoint=IntimacionSeleccionado.notificadoint;
        intimacion.aclaracion=IntimacionSeleccionado.aclaracion;
        intimacion.numcodigoint=IntimacionSeleccionado.numcodigoint;
        intimacion.Inspectorint=IntimacionSeleccionado.Inspectorint;
        intimacion.fotoint=IntimacionSeleccionado.fotoint;
      }
    });  
    setData(dataNueva);
    setModalEditar(false);
    }

    const EditarInfo =()=>{
        var dataNueva=data;
        dataNueva.map(intimacion=>{
          if(intimacion.id===IntimacionSeleccionado.id){
            intimacion.boletaintnum=IntimacionSeleccionado.boletaintnum;
            intimacion.numexpedienteint=IntimacionSeleccionado.numexpedienteint;
            intimacion.adremaint=IntimacionSeleccionado.adremaint;
            intimacion.señorseñora=IntimacionSeleccionado.señorseñora;
            intimacion.domiciliopart=IntimacionSeleccionado.domiciliopart;
            intimacion.lugaractuacion=IntimacionSeleccionado.lugaractuacion; 
            intimacion.otorgaplazode=IntimacionSeleccionado.otorgaplazode;
            intimacion.paracumplimientoa=IntimacionSeleccionado.paracumplimientoa;
            intimacion.fechaintimacion=IntimacionSeleccionado.fechaintimacion;
            intimacion.horaintimacion=IntimacionSeleccionado.horaintimacion;
            intimacion.vencimientoint=IntimacionSeleccionado.vencimientoint;
            intimacion.notificadoint=IntimacionSeleccionado.notificadoint;
            intimacion.aclaracion=IntimacionSeleccionado.aclaracion;
            intimacion.numcodigoint=IntimacionSeleccionado.numcodigoint;
            intimacion.Inspectorint=IntimacionSeleccionado.Inspectorint;
            intimacion.fotoint=IntimacionSeleccionado.fotoint;
          }
        });  
        setData(dataNueva);
        setModalEditarInfo(false);
        }

  const eliminar =()=>{
    setData(data.filter(intimacion=>intimacion.id!==IntimacionSeleccionado.id));

    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setIntimacionSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=IntimacionSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

//   function handleSubmit(p) {
//     p.preventDefault();
//     //console.log(p)
//     setErrors(validate({
//       ...input,
//       [p.target.numexpediente]: p.target.value
//     }));
//     dispatch(postExpediente(input)); // input es el payload
//     alert("Intimación Creada!!!")
//     setInput({ // seteo el input a cero
//       id: '',
//       boletaintnum: '',
//       adremaint: '',
//       numexpedienteint: '',
//       señorseñora: '',
//       domiciliopart: '',
//       lugaractuacion: '',
//       otorgaplazode: '',
//       paracumplimientoa: '',
//       fechaintimacion: '',
//       horaintimacion: '',
//       vencimientoint: '',
//       notificadoint: '',
//       aclaracion: '',
//       numcodigoint: '',
//       Inspectorint: '',
//       fotoint: ''
//     })
//     // history.push('/home')
//     navigate('/home');
// } 




return (
    
    <div>
                    <a href="/home"><img height="50" src={require('./images/logoMuni.png')} /></a><br/>    
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                
                    <h1>SECCIÓN DE CARGA DE INTIMACIONES</h1>                     
                                  
                    <img className= 'imagenredondoint' height="200" src={require('./images/Multa-1.jpg')} /> <br/>
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
                    <button className='btn btn-success' onClick={()=>abrirModalInsertar()}>Crear Intimación</button> {" - "}
                    <Link to= '/Home'><Button color='primary'>Volver Menu Principal</Button></Link> {" - "} 
                    <Link to= '/InspecCreate'><Button color='secondary'>Ir a Multas/Infracciones</Button></Link>
                    {/* <Button to= '/ListIntimacion'>Recargar Exp.</Button> <label> </label> */}
                    <br/>
                    <img src={require('./images/separadorpagina.png')} />
                    <h1>Lista de Intimaciones</h1>  
                    <SearchBarInt
                    />     
    
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Boleta Intimacion Nº</th>
            <th>Señor/a</th>
            <th>Numero Expediente</th>
            <th>Numero Adrema</th>
            <th>Lugar Actuación</th>
            <th>Otorga el plazo de</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              {/* <td>{elemento.id}</td> */}
              <td>{elemento.boletaintnum}</td>
              <td>{elemento.señorseñora}</td>
              <td>{elemento.numexpedienteint}</td>
              <td>{elemento.adremaint}</td>
              <td>{elemento.otorgaplazode}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarIntimacion(elemento, 'EditarInfo')}>Info Completa</button> <button className="btn btn-primary" onClick={()=>seleccionarIntimacion(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarIntimacion(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>


      {/* // ***** INSERTAR - CREAR ****** */}      
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Carga de Boleta Intimación</h3>
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
            <h5>Boleta Intimación Nº</h5>
            <input
              className="form-control"
              type="text"
              name="boletaintnum"
              required
              value={IntimacionSeleccionado ? IntimacionSeleccionado.boletaintnum: ''}
              onChange={handleChange}
            />
            <br />
            <label>ADREMA (en el caso que tenga)</label>
            <input
              className="form-control"
              type="text"
              name="adremaint"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.adremaint: ''}
              onChange={handleChange}
            />
            <br />
            <label>EXPEDIENTE Nº (en el caso que tenga)</label>
            <input
              className="form-control"
              type="text"
              name="numexpedienteint"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.numexpedienteint: ''}
              onChange={handleChange}
            />
            <br />
            <label>Fecha Intimación (mes/dia/año)</label>
            <input
              className="form-control"
              type="text"
              name="fechaintimacion"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.fechaintimacion: ''}
              onChange={handleChange}
            />
            <label>Hora Intimación (hora/minuto)</label>
            <input
              className="form-control"
              type="text"
              name="horaintimacion"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.horaintimacion: ''}
              onChange={handleChange}
            />
            <br />
            <label>Vencimiento Intimación:</label>
            <input
              className="form-control"
              type="text"
              name="vencimientoint"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.vencimientoint: ''}
              onChange={handleChange}
            />
            <br />
            <label>Nombre y Apellido (señor/a)</label>
            <input
              className="form-control"
              type="text"
              name="señorseñora"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.señorseñora: ''}
              onChange={handleChange}
            />
            <br />
            <label>Domicilio Particular</label>
            <input
              className="form-control"
              type="text"
              name="domiciliopart"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.domiciliopart: ''}
              onChange={handleChange}
            />
            <br />
            <label>Domicilio/Lugar Actuación</label>
            <input
              className="form-control"
              type="text"
              name="lugaractuacion"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.lugaractuacion: ''}
              onChange={handleChange}
            />
            <br />
            <label>Otorgó el Plazo de (Días)</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.otorgaplazode: ''}
              onChange={handleChange}
            />
            <br />
            <label>Para el Cumplimiento a</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="paracumplimientoa"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.paracumplimientoa: ''}
              onChange={handleChange}
            />
            <br />
            <label>NOTIFICADO</label>
            <input
              className="form-control"
              type="text"
              name="notificadoint"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.notificadoint: ''}
              onChange={handleChange}
            />
            <br />
            <label>ACLARACIÓN</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="aclaracion"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.aclaracion: ''}
              onChange={handleChange}
            />
            <br />
            <label>Inspector</label>
            <input
              className="form-control"
              type="text"
              name="Inspectorint"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.Inspectorint: ''}
              onChange={handleChange}
            />
            <br />
            <label>Número Código Interno</label>
            <input
              className="form-control"
              type="text"
              name="numcodigoint"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.numcodigoint: ''}
              onChange={handleChange}
            />
            <br />
            {/* <label>Subir Fotos:</label>
            <br/><br/>             */}
              {/* <input
                className="form-control"
                type="text"
                name="fotoint"
                value={IntimacionSeleccionado ? IntimacionSeleccionado.fotoint : ''}
                onChange={handleChange}
              /> */}
              {/* <br /> */}

          </div>      
          
              <input 
              type="file" 
              name="fotoint"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.fotoint: ''}
              // value={IntimacionSeleccionado ? IntimacionSeleccionado.fotoint : ''}
              onChange={handleChange}>              
              </input>              
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
            <h5>Boleta Intimacion Nº</h5>
            {/* <h1>{IntimacionSeleccionado.señorseñora}</h1> */}
            <input
              className="form-control" 
              type="text" 
              name="boletaintnum"
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.boletaintnum}
              onChange={handleChange}
            />
            <br />
            <label>Fecha Intimación</label>
            <input
              className="form-control" 
              type="text" 
              name="fechaintimacion"
            //    readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.fechaintimacion}
              onChange={handleChange}
            />
            <br />
            <label>Hora Intimación</label>
            <input
              className="form-control" type="text" name="horaintimacion"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.horaintimacion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Expediente</label>
            <input
              className="form-control" type="text" name="numexpedienteint" 
              //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.numexpedienteint}
              onChange={handleChange}
            />
            <br />
            <label>ADREMA</label>
            <input
              className="form-control" type="text" name="adremaint" 
              //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.adremaint}
              onChange={handleChange}
            />
            <br />
            <label>Señor/a</label>
            <input
              className="form-control" type="text" name="señorseñora" 
              //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.señorseñora}
              onChange={handleChange}
            />
            <br />
            <label>Domicilio Particular</label>
            <input
              className="form-control"
              type="text"
              name="domiciliopart"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.domiciliopart}
              onChange={handleChange}
            />
            <br />
            <label>Lugar de Actuación</label>
            <input
              className="form-control"
              type="text"
              name="lugaractuacion"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.lugaractuacion}
              onChange={handleChange}
            />
            <br />
            <label>Otorga un plazo de (Días)</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.otorgaplazode}
              onChange={handleChange}
            />
            <br />
            <label>Para el Cumplimiento a</label>
            <textarea
              rows="2"
              className="form-control"
              type="text"
              name="paracumplimientoa"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.paracumplimientoa}
              onChange={handleChange}
            />
            <br />
            <label>Notificado</label>
            <input
              className="form-control"
              type="text"
              name="notificadoint"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.notificadoint}
              onChange={handleChange}
            />
            <br />
            <label>Aclaración</label>
            <textarea
              rows="2"              
              className="form-control"
              type="text"
              name="aclaracion"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.aclaracion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Código Int.</label>
            <input
              className="form-control"
              type="text"
              name="numcodigoint"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.numcodigoint}
              onChange={handleChange}
            />
            <br />
            <label>Inspector (Nombre y Apellido)</label>
            <input
              className="form-control"
              type="text"
              name="Inspectorint"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.Inspectorint}
              onChange={handleChange}
            />
            <br />
            <label>Fotos de Obra</label>
            <br />
            <input
              className="form-control"
              type="text"
              name="fotoint"
            //   readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.fotoint}
              onChange={handleChange}
            />
            {/* <img className="imagenredondo" src={IntimacionSeleccionado.fotoint}/> */}
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
            {/* <h1>{IntimacionSeleccionado.señorseñora}</h1> */}
            <input
              className="form-control" type="text" name="boletaintnum" readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.boletaintnum}
              onChange={handleChange}
            />
            <br />
            <label>Fecha Intimación</label>
            <input
              className="form-control" type="text" name="señorseñora" readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.fechaintimacion}
              onChange={handleChange}
            />
            <br />
            <label>Hora Intimación</label>
            <input
              className="form-control" type="text" name="señorseñora" readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.horaintimacion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Expediente</label>
            <input
              className="form-control" type="text" name="numexpedienteint" 
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.numexpedienteint}
              onChange={handleChange}
            />
            <br />
            <label>ADREMA</label>
            <input
              className="form-control" type="text" name="adremaint" 
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.adremaint}
              onChange={handleChange}
            />
            <br />
            <label>Señor/a</label>
            <input
              className="form-control" type="text" name="señorseñora" readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.señorseñora}
              onChange={handleChange}
            />
            <br />
            <label>Domicilio Particular</label>
            <input
              className="form-control"
              type="text"
              name="domiciliopart"
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.domiciliopart}
              onChange={handleChange}
            />
            <br />
            <label>Lugar de Actuación</label>
            <input
              className="form-control"
              type="text"
              name="lugaractuacion"
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.lugaractuacion}
              onChange={handleChange}
            />
            <br />
            <label>Otorga un plazo de (Días)</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.otorgaplazode}
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
              value={IntimacionSeleccionado && IntimacionSeleccionado.paracumplimientoa}
              onChange={handleChange}
            />
            <br />
            <label>Notificado</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.notificadoint}
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
              value={IntimacionSeleccionado && IntimacionSeleccionado.aclaracion}
              onChange={handleChange}
            />
            <br />
            <label>Número de Código Int.</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.numcodigoint}
              onChange={handleChange}
            />
            <br />
            <label>Inspector (Nombre y Apellido)</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              readOnly
              value={IntimacionSeleccionado && IntimacionSeleccionado.Inspectorint}
              onChange={handleChange}
            />
            <br/>
            <label className='fontNegraBold' >Fotos de Obra</label>
            <br/><br/>
            <img   
            className="imagenredondo"
            src={IntimacionSeleccionado && IntimacionSeleccionado.fotoint}            
            readOnly 
            width="380" 
            />
            <br/>
            {/* 
            <input 
            type="image" 
            className="imagenredondo"
            src={IntimacionSeleccionado && IntimacionSeleccionado.fotoint[1]}            
            readOnly 
            width="380" 
            >
            </input>
            <br/>
            <input 
            type="image" 
            className="imagenredondo"
            src={IntimacionSeleccionado && IntimacionSeleccionado.fotoint[2]}            
            readOnly 
            width="380" 
            >
            </input>
            <br/>
            <input 
            type="image" 
            className="imagenredondo"
            src={IntimacionSeleccionado && IntimacionSeleccionado.fotoint[3]}            
            readOnly 
            width="380" 
            >
            </input> */}
            {/* <br />
            
            <br /><br />
            <img className="imagenredondo" src={IntimacionSeleccionado.fotoint}/>
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
          Estás Seguro que deseas eliminar la Intimación Nº {IntimacionSeleccionado && IntimacionSeleccionado.boletaintnum}
          <br/>
          de la fecha {IntimacionSeleccionado && IntimacionSeleccionado.fechaintimacion}
        </ModalBody>
        <ModalFooter>
          <form onSubmit={(p) => handleDelete(p)}>
              <button className="btn btn-primary" type='submit'> Eliminar Intimación </button>
          </form>
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

export default ListIntimacion;