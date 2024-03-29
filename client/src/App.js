//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Municipalidad de Corrientes - Area de Inspecciones de Obras Publicas</h1>
//       <br/> <br/> <br/> <br/> <br/>
//       <h5>TODOS LOS DERECHOS RESERVADOS • MUNICIPALIDAD DE LA CIUDAD DE CORRIENTES • © 2020</h5>
//     </div>
//   );
// }

// export default App;


import './App.css';
// IMPORTO ROUTES Y ROUTER, SWITCH EN ESTA VERSION YA NO ANDA /
// SOLO ANDA Routes/BrowserRouter
import {Routes, Route} from 'react-router-dom'; //, BrowserRouter

// IMPORTO LOS COMPONENTES
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx';

import ExpedCreate from './components/ExpedCreate.jsx';
import InspecCreate from './components/InspecCreate.jsx';
import IntimCreate from './components/IntimCreate.jsx';
// import Infraccion from './components/ListInfraccionCreate.jsx'
import TicketCreate from './components/TicketCreate';

import ListExpediente from './components/ListExpediente.jsx'
import ListInspeccion from './components/ListInspeccion.jsx'
import ListIntimacion from './components/ListIntimacion.jsx'
import ListInfraccion from './components/ListInfraccion.jsx'
import ListTicket from './components/ListTicket.jsx'

import Details from './components/Details.jsx'
import DetailsTickets from './components/DetailsTicket.jsx'

import Estadisticas from './components/Estadisticas.jsx'
import Construccion from './components/Construccion.jsx'

import PaginaLogin  from './components/PaginaLogin.jsx'
// import Upload from './components/Upload.jsx'
// import uploads from './components/uploads'


//function App() { // me gusta mas trabajar con constantes
const App = () => {
   // ACA RENDEDIZAMOS LAS RUTAS
  return (
    // <BrowserRouter>
    <div className="App">    
      {/* <h1>PROYECTO MUNICIPALIDAD CTES</h1> */}
      {/* <h3>by Marcos Dacunda</h3> */}
        <Routes>         
          {/* <Route  path='/' element={<LandingPage/>}/>    */}
          <Route  path='/' element={<PaginaLogin/>}/>
          <Route  path='/LandingPage' element={<LandingPage/>}/>
          <Route  path='/Home' element={<Home/>}/>    

          <Route  path='/ExpedCreate' element={<ExpedCreate/>}/>          
          <Route  path='/InspecCreate' element={<InspecCreate/>}/>
          <Route  path='/IntimCreate' element={<IntimCreate/>}/>
          {/* <Route path='/InfracCreate' element={<InfracCreate>} */}
          <Route  path='/TicketCreate' element={<TicketCreate/>}/>


          
          <Route  path='/expedientes/:id' element={<Details/>}/>
          <Route  path='/tickets/:id' element={<DetailsTickets/>}/>
          
          <Route  path='/Estadisticas' element={<Estadisticas/>}/>
          <Route  path='/Construccion' element={<Construccion/>}/>

          <Route  path='/ListExpediente' element={<ListExpediente/>}/>         
          <Route  path='/ListInspeccion' element={<ListInspeccion/>}/>
          <Route  path='/ListIntimacion' element={<ListIntimacion/>}/>
          <Route  path='/ListInfraccion' element={<ListInfraccion/>}/>
          <Route  path='/ListTicket' element={<ListTicket/>}/>
          {/* <Route  path='/Upload' element={<Upload/>}/> */}
          {/* <Route  path='/uploads' element={<uploads/>}/>  subir imagenes */}
          {/* <Route exact path='/expedientes/:id' element={<Details/>}/> */}
          {/* <Route path='/expedcreate' element={<ExpedCreate/>}/>         */}
        </Routes>   
    </div>
  //  </BrowserRouter>
  );
}

export default App;
