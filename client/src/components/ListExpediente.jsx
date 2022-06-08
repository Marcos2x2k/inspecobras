import React from 'react';
// import Button from '@material-ui/core/Button'; // importo estilo de boton
import Button from '@mui/material/Button'; // importo estilo de boton
// import Pagination from '@mui/material/Pagination'

import './styles/Home.css'; // importo los styles de mi Home.css

//IMPORTO PORQUE USAMOS HOOKS
import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import {useDispatch, useSelector} from 'react-redux'; 
import {getExpedientes, setPage, orderByName} from '../actions/index.js';//Siempre importo las acciones nuevas 

//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import {Link} from 'react-router-dom';

//ME IMPORTO EL COMPONENTE Card y renderizo en linea 
import Card from './Card';
import SearchBar from './SearchBar';
import Paginado from './Paginado';

export default function ListExpediente (){ 
    const { expedientes, name, page, order} = useSelector(state => state);    
    const dispatch = useDispatch(); // PARA USAR HOOKS
    const allExpedientes = useSelector((state) => state.expedientes) //HOOKS es lo mismo q maps.state.props
    const [orden, setOrden] = useState(''); // es un estado local q arranca vacio para el Asc y Desc Order

    //CREO VARIOS ESTADOS LOCALES y lo seteo en 1- ACA CALCULO LAS CARD POR PAGINAS
    const [currentPage, setCurrentPage] = useState(1); //defino 2 stados 1 con pagina actual y otro q resetea pagina actual
    const [expedientesPerPage, setExpedientesPerPage] = useState(10); // seteo los perros por pagina, depues usar variable para mostrar por cantidad elegida    
    const indexOfLastexpediente = currentPage * expedientesPerPage // aca vale 0 a 14 = 15
    const indexOfFirstexpediente = indexOfLastexpediente - expedientesPerPage // 0

    //currentGames devuelve un arreglo q entra del 1 al 15
    //creo una constante de los Games en la pagina actual y me traigo el array del estado de los Games 
    //const currentExpedientes =  allExpedientes.slice(indexOfFirstexpediente, indexOfLastexpediente)  /// rompeee la pagina
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    // TRAIGO DEL ESTADO LOS Expedientes CUANDO EL COMPONENTE SE MONTA
     useEffect (()=>{
        dispatch(getExpedientes());      
        // getListGenres para usar con filtrados por Genero
    },[dispatch])
    // PARA RESETEAR AL TOCAR EL BOTON volver a cargar los Expedientes
    function handleClick(p){
        p.preventDefault(); //PREVENTIVO PARA Q NO RECARGUE TODA LA PAGINA
        dispatch(getExpedientes())
    };
    // ORDENAMIENTO DE PAGINA ASCENDENTE O DESCENDENTE
    function handleSort(p){
        p.preventDefault();
        dispatch(orderByName(p.target.value)) //despacho la accion
        setCurrentPage(1); //ordenamiento seteado en pagina 1
        setOrden(`Ordenado ${p.target.value}`)  //es un estado local vacio, lo uso para modif estado local y renderize
    }; 
    return(
        
        <div>        
            <div>                    
                <div>
                    <br/>
                    
                    <img height="110" src={require('./images/logoMuni.png')}/>
                    {/* <img height="200" src="./images/logoMuni.jpg" /> */}
                    {/* <img src='https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/logo.png' height="110" alt="to home" /> */}
                
                    <h1 className="colorLetras">Listado de Expedientes</h1> 
                    {/* <Pagination count={10} color="primary" /> */}
                    <SearchBar
                    />  
                    <select className="selectfont">
                        <option value="" selected disabled hidden>ORDENAR</option>                
                        <option value='asc'>Fecha</option>
                        <option value='desc'>Estado</option>
                        {/* <option value='inicioexpediente'>Fecha Inicio Expediente</option>
                        <option value='fecharegistrado'>Fecha Plano Registrado</option> */}
                    </select>  
                    <br/><br/>
                    <Link to= '/Home'><Button variant="contained" component="span">Volver Menu Principal</Button></Link>  
                    <br/><br/> 
                    {/* <br /><br /> */}
                    <img src={require('./images/separadorpagina.png')}/>
                    {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
                    <br/>
                </div>
                
                <div>
                {/* Rompía pagina */}
                <Paginado
                        expedientesPerPage = {expedientesPerPage}
                        allExpedientes={allExpedientes.length}
                        paginado = {paginado}                    
                 />
                </div>
            <div>
                {expedientes?.map ((p) =>{  // CON ? PREGUNTA SI EXISTE Y DESPUES MAPEA   
                    return( 
                    <Fragment>                    
                        <div>                           
                            <Link 
                                key={p.id}
                                to={`/expedientes/${p.id}`}>
                                <Card
                                    numexpediente={p.numexpediente} 
                                    // image={p.image ? p.image : p.image}
                                    fechainicioentrada={p.fechainicioentrada}
                                    adrema={p.adrema}  
                                    estado={p.estado}  
                                    iniciadornomyape={p.iniciadornomyape}
                                />                        
                            </Link>
                            {/* : (
                            <div>
                                <h1>CARGANDO...</h1>                  
                            </div>
                            ) */}
                        </div>
                    
                    </Fragment> 
                );
                })}
            </div>
                       
            {/* <img className='logocorrientes' src="http://www.cij.gov.ar/adj/fotos/2019-03/44-0.971624001553273257_B.jpg" width="600" height="300" /> */}
            {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/> */}
            <img src={require('./images/separadorpagina.png')}/>
            <br/><br/>
            {/* <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/> */}
            <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2022</h5>
            {/* <img src="https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/bottom-bg.png"/>
            <br/>
            <img src=" https://ciudaddecorrientes.gov.ar/sites/default/themes/ciudaddecorrientes/images/call_negro.png"/>            
            <img src="https://ciudaddecorrientes.gov.ar/sites/default/files/direccion_negro.png"/>*/}
            </div>
        </div>        
)}