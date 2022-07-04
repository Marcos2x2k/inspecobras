import React, {useState} from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { applyMiddleware } from 'redux';

// const upload = require('./libs/storage')
// import multer from 'multer';

// const multer = require ('multer')
// const upload = multer({
//   dest: 'Storage/imgs'  
// })

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
      Inspectorint:"Ramos Carlos Alegre"
    },{ id: 2, 
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
        Inspectorint:"Ramos Carlos Alegre"
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
        Inspectorint:"Ramos Carlos Alegre"
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
        fotosint:"Se Desconoce"
      },
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
        fotosint:''
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
        intimacion.fotosint=IntimacionSeleccionado.fotosint;
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
            intimacion.fotosint=IntimacionSeleccionado.fotosint;
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
    
    <div className="App">
                    <a href="/home"><img height="50" src={require('./images/logoMuni.png')} /></a><br/>    
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' alt="to home" /> */}
                
                    <h1 className="colorLetrasGris">SECCIÓN DE CARGA DE INTIMACIONES</h1>                    
                    <img className='logocorrientes' height="200" src={require('./images/intimaciones.jpg')} /> <br/><br/>
                    {/* <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        <option value='desc'>Fecha Inicio Expediente</option>
                        <option value='desc'>Fecha Plano Registrado</option>
                    </select>        */}
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Instimaciones</Button></Link> {" - "}  */}
                    {/* <Link to= '/ListInfraccion'><Button  color='secondary'>Lista Multas</Button></Link> {" - "}  */}
                    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Crear Intimación</button> {" - "}
                    <Link to= '/InspecCreate'><Button color='primary'>Volver a Multas</Button></Link> {" - "} 
                    <Link to= '/Home'><Button color='danger'>Volver Menu Principal</Button></Link> {" - "} 
                    <img src={require('./images/separadorpagina.png')} />
      {/* <h2>Países en los que la gente pasa más tiempo en redes sociales (2019)</h2> */}
      {/* <br /> */}
    
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
      {/* MODO EDITAR */}
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
            <br /><br />
            <img src={require('./images/obradeconstruccion.jpg')} />
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
            <label>Boleta Intimacion Nº</label>
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
            <br />
            <label>Fotos de Obra</label>
            <br /><br />
            <img src={require('./images/obradeconstruccion.jpg')} />
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
            className="btn btn-danger"
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
            <h3>Boleta Intimación</h3>
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
            <input
              className="form-control"
              type="file"
              name="fotosint"
              value={IntimacionSeleccionado ? IntimacionSeleccionado.fotosint:''}
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

export default ListIntimacion;