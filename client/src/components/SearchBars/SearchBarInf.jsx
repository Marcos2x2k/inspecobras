import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getNameInfracciones} from '../../actions';

export default function SearchBarExp(){
     // aca usamos Hook
    const dispatch = useDispatch()
    const [boletainfnum, setboletainfnum] = useState("")

    function handInputChange(p){
        p.preventDefault()
        setboletainfnum(p.target.value)
        // console.log(name)
    }
    function handleSubmit(p){
        p.preventDefault()
        dispatch(getNameInfracciones(boletainfnum))
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
                <button type='submit'>Buscar Infracción</button>
            </form>
        </div>
    )
}