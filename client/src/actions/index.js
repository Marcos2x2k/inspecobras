import axios from 'axios';
export const SET_PAGE = 'SET_PAGE';

// *** aca se realiza la coneccion de back con el front ***
// ACA EN SYNC PERO ABAJO HAGO EN PROMISE MEJOR
// export function getGames(){
//     return function(dispatch){
//         var json = await axios.get("http://localhost:3001/games",{});
//     return dispatch({
//         type: 'GET_GAMES',
//         payload: json.data   
//     })}}; 
export function getExpedientes(){  // esta Action permite renderizar todos los Games
    return function(dispatch){
        axios.get('http://localhost:3001/expedientes',{})
        .then((json) => {
            dispatch({type: 'GET_EXPEDIENTES', payload: json.data})
        })
        .catch(() =>{
            console.log ('HUBO UN ERROR EN LOS DATOS');
        })
    }
}
export function getIntimaciones(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/intimaciones", {});
        // var info = await axios(`http://localhost:3001/types/${name}`); otra forma
        return dispatch({
            type: "GET_INTIMACIONES", 
            payload: json.data});
    };
}
export function getInfracciones(){  // esta Action permite renderizar todos los Games
    return function(dispatch){
        axios.get('http://localhost:3001/infracciones',{})
        .then((json) => {
            dispatch({type: 'GET_INFRACCIONES', payload: json.data})
        })
        .catch(() =>{
            console.log ('HUBO UN ERROR EN LOS DATOS');
        })
    }
}


export function getMultas(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/multas", {});
        // var info = await axios(`http://localhost:3001/types/${name}`); otra forma
        return dispatch({
            type: "GET_PLATFORMS", 
            payload: json.data});
    };
}
// esta Action permite BUSQUEDA todos los expedientes por numExpediente
export function getNameExpedientes(name){ 
    return async function (dispatch){
    try{
        var json = await axios.get("http://localhost:3001/expedientes?name=" + name);
        return dispatch({
            type: "GET_NAME_EXPEDIENTES",
            payload: json.data
        })
    } 
    catch (error) {
        console.log(error)
    }}
    }


    export function getNameIntimaciones(name){ 
        return async function (dispatch){
        try{
            var json = await axios.get("http://localhost:3001/Intimaciones?name=" + name);
            return dispatch({
                type: "GET_NAME_INTIMACIONES",
                payload: json.data
            })
        } 
        catch (error) {
            console.log(error)
        }}
        }



// PARA EL POST DE GENRES y CREAR AL NUEVO JUEGO
export function postExpediente(payload){ //recibe un objeto con toda la info del Game a crear (GameCreate)
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/newexpediente", payload)
        console.log (response);
        return response
    }
}

export function postIntimacion(payload){ //recibe un objeto con toda la info del Game a crear (GameCreate)
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/newIntimacion", payload)
        console.log (response);
        return response
    }
}

export function postTicket(payload){ //recibe un objeto con toda la info del Game a crear (GameCreate)
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/newticket", payload)
        console.log (response);
        return response
    }
}
export function postInspeccion(payload){ //recibe un objeto con toda la info del Game a crear (GameCreate)
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/newinspeccion", payload)
        console.log (response);
        return response
    }
}
// la logica siempre hacerla en reducer o en los components
export function getDetailsExpedientes(id){
    return function(dispatch){
        axios.get('http://localhost:3001/expedientes/'+id)
        .then((response)=>{
            dispatch({type:'GET_DETAILS_EXPEDIENTES', payload: response.data})
        })
        .catch(()=>{
            console.log('No se encuentra Id');
        })
    }
}

// la logica siempre hacerla en reducer o en los components
export function getDetailsIntimaciones(id){
    return function(dispatch){
        axios.get('http://localhost:3001/intimaciones/'+id)
        .then((response)=>{
            dispatch({type:'GET_DETAILS_INTIMACIONES', payload: response.data})
        })
        .catch(()=>{
            console.log('No se encuentra la Intimación Requerida');
        })
    }
}
//hacemos la accion de filtrar por API o Bdatos // payload trae el value de la accion q elija
export function filterCreated(value){ //payload es el value q me llega
    // console.log(payload)
    return{
        type: 'FILTER_CREATED',
        payload: value
    }
};

export function orderByExpediente(payload){
    return{
        type: 'ORDER_BY_EXPEDIENTE',
        payload
    }
}

export function orderByFecha(payload){
    return{
        type: 'ORDER_BY_FECHA',
        payload
    }
}

export function setPage(page){
    return {
        type: SET_PAGE,
        payload: page
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

