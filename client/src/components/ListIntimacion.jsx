import React, {useState} from 'react';
import logo from './styles/logo.svg';
import './styles/AppCrud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
// import { applyMiddleware } from 'redux';


function ListIntimacion() { 


  const dataIntimacion = [
    { id: 1, 
      boletaintnum: "7106",
      adremaint:"A1-232323-1",
      numexpedienteint:"5454P2022",
      señorseñora: "Jose Romero",
      domiciliopart:"Se Desconoce",
      lugaractuacion:"Santa Fé esquina Rivadavia",
      otorgaplazode:"48 hs",
      paracumplimientoa:"proceder a reparar la vereda en mal estado, conforme normativas vigentes",
      fechaintimacion:"06/06/2022",
      horaintimacion:"11:05",
      vencimientoint:"08/06/2022",
      notificadoint:"propuetario o responsable de Adrema Ausente",
      aclaracion:"se deja presente en la puerta de entrada",
      numcodigoint:"07/046",
      Inspectorint:"Ramos Carlos Alegre",
      fotoint:["https://www.elindependiente.com/wp-content/uploads/2022/04/construccion-656x368.jpg", 
      "https://www.infobae.com/new-resizer/GUVdWl-zD75lCXwnQSKkM2SCUOc=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/5ZAS7YKNLFGDDJFJWMK3RDWROI.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-eihuwaWCZCE3nTplaz-ezykiIB8xezbhtWicPynTGOml7drYLxxqtHg6eq5YuDqKhA&usqp=CAU",
      "data:image/jpeg;base64,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"]
    }
    ,{ id: 2, 
        boletaintnum: "7106", 
        adremaint:"A1-655656-1",
        numexpedienteint:"3354P2021",
        señorseñora: "Jose Romero",
        domiciliopart:"Gral Paz 5854",
        lugaractuacion:"Santa Fé esquina Rivadavia",
        otorgaplazode:"48 hs",
        paracumplimientoa:"proceder a reparar la vereda en mal estado, conforme normativas vigentes",
        fechaintimacion:"06/06/2022",
        horaintimacion:"11:05",
        vencimientoint:"08/06/2022",
        notificadoint:"propuetario o responsable de Adrema Ausente",
        aclaracion:"se deja presente en la puerta de entrada",
        numcodigoint:"07/046",
        Inspectorint:"Ramos Carlos Alegre",
        fotoint:"https://www.elindependiente.com/wp-content/uploads/2022/04/construccion-656x368.jpg"
      },{ id: 3, 
        boletaintnum: "7106", 
        adremaint:"A1-232323-1",
        numexpedienteint:"5454P2022",
        señorseñora: "Jose Romero",
        domiciliopart:"Se Desconoce",
        lugaractuacion:"Santa Fé esquina Rivadavia",
        otorgaplazode:"48 hs",
        paracumplimientoa:"proceder a reparar la vereda en mal estado, conforme normativas vigentes",
        fechaintimacion:"06/06/2022",
        horaintimacion:"11:05",
        vencimientoint:"08/06/2022",
        notificadoint:"propuetario o responsable de Adrema Ausente",
        aclaracion:"se deja presente en la puerta de entrada",
        numcodigoint:"07/046",
        Inspectorint:"Ramos Carlos Alegre",
        fotoint:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-eihuwaWCZCE3nTplaz-ezykiIB8xezbhtWicPynTGOml7drYLxxqtHg6eq5YuDqKhA&usqp=CAU"
      },{ id: 4, 
        boletaintnum: "7106", 
        adremaint:"A1-662239-1",
        numexpedienteint:"1111P2019",
        señorseñora: "Jose Romero",
        domiciliopart:"Se Desconoce",
        lugaractuacion:"Santa Fé esquina Rivadavia",
        otorgaplazode:"48 hs",
        paracumplimientoa:"proceder a reparar la vereda en mal estado, conforme normativas vigentes",
        fechaintimacion:"06/06/2019",
        horaintimacion:"11:05",
        vencimientoint:"08/06/2020",
        notificadoint:"propuetario o responsable Ausente",
        aclaracion:"se deja presente al propietario",
        numcodigoint:"07/046",
        Inspectorint:"Ramos Carlos Alegre",
        fotoint:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-eihuwaWCZCE3nTplaz-ezykiIB8xezbhtWicPynTGOml7drYLxxqtHg6eq5YuDqKhA&usqp=CAU"
      },{ id: 5, 
        boletaintnum: "0504", 
        adremaint:"A1-00000-1",
        numexpedienteint:"1111P2019",
        señorseñora: "Sosa diego",
        domiciliopart:"Se perdio",
        lugaractuacion:"Tte. Ibañez",
        otorgaplazode:"4 dias",
        paracumplimientoa:"proceder a reparar la vereda en mal estado",
        fechaintimacion:"05/076/2022",
        horaintimacion:"00:49",
        vencimientoint:"08/06/2022",
        notificadoint:"propuetario o responsable Ausente",
        aclaracion:"se deja presente al propietario",
        numcodigoint:"07/046",
        Inspectorint:"Ramos Carlos Alegre",
        fotoint:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTdWH9IB1MQ7DObxNsQXNh7Od82V3cUJZdqnLkGsc-HX1tek2zDj1g0dYDydy182kHpo&usqp=CAU"
      }
  ];

  const [data, setData] = useState(dataIntimacion);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEditarInfo, setModalEditarInfo] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [IntimacionSeleccionado, setIntimacionSeleccionado] = useState({
        id: '', 
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
        fotoint:[]
  });

  const seleccionarIntimacion=(elemento, caso)=>{
  setIntimacionSeleccionado(elemento);
  if (caso==='EditarInfo') setModalEditarInfo(true)
  else
  if (caso==='Editar') setModalEditar(true)
  else
  if (caso==='Eliminar') setModalEliminar(true)
  
//   (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;    
    setIntimacionSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
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

  return (
    
    <div className="AppCrud">
                    <a href="/home"><img height="50" src={require('./images/logoMuni.png')} /></a><br/>    
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                
                    <h1>SECCIÓN DE CARGA DE INTIMACIONES</h1>                    
                    <img height="200" src={require('./images/intimaciones.jpg')} /> <br/><br/>
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Instimaciones</Button></Link> {" - "}  */}
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Multas</Button></Link> {" - "}  */}
                                        
                    <button className='btn btn-success' onClick={()=>abrirModalInsertar()}>Crear Intimación</button> {" - "}
                    <Link to= '/Home'><Button color='primary'>Volver Menu Principal</Button></Link> {" - "} 
                    <Link to= '/InspecCreate'><Button color='secondary'>Ir a Multas/Infracciones</Button></Link>
                    <br/>
                    <img src={require('./images/separadorpagina.png')} />
                    <h1>Lista de Intimaciones</h1>  
    
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

      {/* ************* MODO EDITAR ***************/}
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Intimación</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Boleta Intimacion Nº</label>
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
            <label>Otorga un plazo de (Horas o Días)</label>
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
            <input
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
            <input
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
            <label className = "labelcreateediteliminar">Boleta Intimacion Nº</label>
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
            <label>Otorga un plazo de (Horas o Días)</label>
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
            <input
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
            <input
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
            <h3>Carga de Boleta Intimación</h3>
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
            <label>Boleta Intimación Nº</label>
            <input
              className="form-control"
              type="text"
              name="boletaintnum"
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
            <label>Otorgó el Plazo de (Horas/Días)</label>
            <input
              className="form-control"
              type="text"
              name="otorgaplazode"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.otorgaplazode: ''}
              onChange={handleChange}
            />
            <br />
            <label>Para el Cumplimiento a</label>
            <input
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
            <input
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
            <label>Subir Fotos:</label>
            {/* <input
              className="form-control"
              type="text"
              name="fotoint"
              value= {IntimacionSeleccionado ? IntimacionSeleccionado.fotoint: ''}
              onChange={handleChange}
            /> */}
          </div>
          <form method="post" enctype="multipart/form-data" action="/upload">
                <input type="file" name="file"></input>
                {/* <input type="submit" value="Submit"></input> */}
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Crear
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

export default ListIntimacion;