import React from 'react';

export default function Paginado ({expedientesPerPage, allExpedientes, paginado}){
    const pageNumbers = []

    for (var i=1; i<=Math.ceil(allExpedientes/expedientesPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>                        
                <div  style={{
                    display: 'flex',
                    flexdirection: 'row',                    
                    flexWrap: 'wrap',
                    justifyContent:'center',
                    alingItems: 'center',
                    margin: '5px',                    
                    decoration: 'none'
                    
                }}
                className='paginado' >
                    
                    {pageNumbers &&                   
                     pageNumbers.map ( number => (
                            <ul 
                                className='number' key={number} >
                                <button onClick={() => paginado(number)}>{ number }</button>
                            </ul>
                     )) }

                </div>
        </nav>

    )

}