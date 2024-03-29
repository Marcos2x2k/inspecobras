import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getNameExpedientes} from '../../actions';

export default function SearchBarExp(){
     // aca usamos Hook
    const dispatch = useDispatch()
    const [numexpediente, setNumexpediente] = useState("")

    function handInputChange(p){
        p.preventDefault()
        setNumexpediente(p.target.value)
        // console.log(name)
    }
    function handleSubmit(p){
        p.preventDefault()
        dispatch(getNameExpedientes(numexpediente))
    }

    return (
        <div>
            {/* //cuando apreto enter el form hace en submit */}
            <form onSubmit={(p)=> handleSubmit(p)}> 
                <input
                type = 'text'
                placeholder = "Buscar..."
                onChange={(p) => handInputChange(p)}                
            />
                <button type='submit'>Buscar</button>
            </form>
        </div>
    )
}