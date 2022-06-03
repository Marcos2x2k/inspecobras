// ** ACÁ EN REDUCER CREO MI ESTADO INICIAL - 
// ** Y HAGO LA LOGICA DE MIS FILTRADOS
const initialState = {
    numxpedientes: [],    
    expedientes:[],
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
                expedientes: action.payload,  
                //Asi creamos en JSON - var json = await axios.get("http://localhost:3001/dogs",{});
                // el payload lo creamos en actions como payload: json.data
                allExpedientes: action.payload
            }     
        case 'GET_NAME_EXPEDIENTES':
            return{
                ...state,
                expedientes: action.payload
            }  
        case 'POST_EXPEDIENTES'://No se declara en actions, se declara en el reducer. 
                          //en action solo se trae la ruta
                 return{
                    ...state
                 }
                
        case 'GET_DETAILS_EXPEDIENTES':            
                return {
                    ...state,                    
                    expedientesDetails: action.payload                    
                }        
        case 'ORDER_BY_NAME':
                let sortedArr = action.payload === 'asc' ?
                state.expedientes.sort(function(a,b){
                    if (a.expedientes > b.expedientes) {
                        return 1;
                    }
                    if (a.expedientes < b.expedientes) {
                        return -1;
                    }
                    return 0;
                }) :
                state.expedientes.sort(function(a,b){
                    if (a.expedientes > b.expedientes) {
                        return -1;
                    }
                    if (a.expedientes < b.expedientes) {
                        return 1;
                    }
                    return 0;
                })        
                
                return{
                   ...state,
                   expedientes: sortedArr // paso al estado el ordenamiento
            }
            default:
                return state;
        }
    } 

