import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getNameExpedientes} from '../actions';

export default function SearchBar(){
     // aca usamos Hook
    const dispatch =useDispatch()
    const [name, setName] = useState("")

    function handInputChange(p){
        p.preventDefault()
        setName(p.target.value)
        console.log(name)
    }
    function handleSubmit(p){
        p.preventDefault()
        dispatch(getNameExpedientes(name))
    }

    return (
        <div>
            {/* //cuando apreto enter el form hace en submit */}
            <form onSubmit={(p)=> handleSubmit(p)}> 
                <input
                type = 'text'
                placeholder = "Buscar Expediente..."
                onChange={(p) => handInputChange(p)}                
            />
                <button type='submit'>Buscar</button>
            </form>
        </div>
    )

}


// import React from 'react';
// import {useState} from 'react';
// import { useDispatch } from 'react-redux';
// import {getNameGames} from '../actions';

// export default function SearchBar(){

//     return (
//         <div>

//         </div>
//     )}