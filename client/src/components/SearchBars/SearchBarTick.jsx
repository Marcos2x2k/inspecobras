// import React from 'react';
// import {useState} from 'react';
// import { useDispatch } from 'react-redux';
// import {getNameTickets} from '../actions';

// export default function SearchBarTick(){
//      // aca usamos Hook
//     const dispatch = useDispatch()
//     const [name, setName] = useState("")

//     function handInputChange(p){
//         p.preventDefault()
//         setName(p.target.value)
//         // console.log(name)
//     }
//     function handleSubmit(p){
//         p.preventDefault()
//         dispatch(getNameTickets(name))
//     }

//     return (
//         <div>
//             {/* //cuando apreto enter el form hace en submit */}
//             <form onSubmit={(p)=> handleSubmit(p)}> 
//                 <input
//                 type = 'text'
//                 placeholder = "Buscar..."
//                 onChange={(p) => handInputChange(p)}                
//             />
//                 <button type='submit'>Buscar</button>
//             </form>
//         </div>
//     )
// }