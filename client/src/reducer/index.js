// ** ACÁ EN REDUCER CREO MI ESTADO INICIAL - 
// ** Y HAGO LA LOGICA DE MIS FILTRADOS
const initialState = {
    numxpedientes: [],    
    expedientes:[],
    expedientesDetails:[],
    intimaciones:[],
    infracciones:[]
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
        case 'GET_INFRACCIONES':
                return{
                    ...state, // guardamos el estado anterior como buena practica
                    infracciones: action.payload,  
                    //Asi creamos en JSON - var json = await axios.get("http://localhost:3001/dogs",{});
                    // el payload lo creamos en actions como payload: json.data
                    allInfracciones: action.payload
                }  
        case 'GET_INTIMACIONES':
                    return{
                        ...state, // guardamos el estado anterior como buena practica
                        intimaciones: action.payload,  
                        //Asi creamos en JSON - var json = await axios.get("http://localhost:3001/dogs",{});
                        // el payload lo creamos en actions como payload: json.data
                        allIntimaciones: action.payload
                    }  
        case 'GET_NAME_EXPEDIENTES':
            return{
                ...state,
                expedientes: action.payload
            }  
        case 'GET_NAME_INTIMACIONES':
                return{
                    ...state,
                    intimaciones: action.payload
                } 
        case 'GET_NAME_INFRACCIONES':
            return{
                ...state,
                infracciones: action.payload
            }  
    

        case 'POST_EXPEDIENTES'://No se declara en actions, se declara en el reducer. 
                          //en action solo se trae la ruta
                 return{
                    ...state
                 }
        case 'POST_INFRACCIONES'://No se declara en actions, se declara en el reducer. 
                 //en action solo se trae la ruta
                return{
                    ...state
        }
        case 'POST_INTIMACIONES'://No se declara en actions, se declara en el reducer. 
        //en action solo se trae la ruta
                return{
                    ...state
        }

        case 'DELETE_EXPEDIENTES':
            return{
                ...state
        }

        case 'DELETE_INTIMACIONES':
            return{
                ...state
        }
        case 'DELETE_INFRACCIONES':
            return{
                ...state
        }

        case 'DELETE_INSPECCIONES':
            return{
                ...state
        }
        case 'GET_DETAILS_EXPEDIENTES':       
                return {                    
                    ...state,     
                    expedientesDetails: action.payload              
                                  
        }       
        case 'GET_DETAILS_INTIMACIONES': 
                // console.log (state)
                // console.log (action.payload)          
                return {                    
                    ...state,     
                    intimacionesDetails: action.payload              
                                  
                }   
        case 'GET_DETAILS_INFRACCIONES': 
            console.log (action.payload)          
            return {                    
            ...state,     
            infraccionesDetails: action.payload              
                                  
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

