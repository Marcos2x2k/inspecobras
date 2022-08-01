import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getNameTickets} from '../../actions';

export default function SearchBarTick(){
     // aca usamos Hook
    const dispatch = useDispatch()
    const [numticket, setNumticket] = useState("")

    function handInputChange(p){
        p.preventDefault()
        setNumticket(p.target.value)
        // console.log(name)
    }
    function handleSubmit(p){
        p.preventDefault()
        dispatch(getNameTickets(numticket))
    }

    return (
        <div>
            {/* //cuando apreto enter el form hace en submit */}
            <form onSubmit={(p)=> handleSubmit(p)}> 
                <input
                type = 'text'
                placeholder = "Buscar Tickets..."
                onChange={(p) => handInputChange(p)}                
            />
                <button type='submit'>Buscar</button>
            </form>
        </div>
    )
}