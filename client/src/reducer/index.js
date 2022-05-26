// ** ACÁ EN REDUCER CREO MI ESTADO INICIAL - 
// ** Y HAGO LA LOGICA DE MIS FILTRADOS
const initialState = {
    numxpediente: [],    
    expediente:[],
    // anio:[],
    // fecha:[],
    // ticket: [],
    // ticketDelete: [],
}


//action.payload llega las opciones del select
export default function rootReducer(state =  initialState, action){ 
    switch(action.type){
        
        case 'GET_EXPEDIENTES':
            return{
                ...state, // guardamos el estado anterior como buena practica
                expediente: action.payload,  
                //Asi creamos en JSON - var json = await axios.get("http://localhost:3001/dogs",{});
                // el payload lo creamos en actions como payload: json.data
                allExpediente: action.payload
            }     
            default:
                return state;
        }
    } 

