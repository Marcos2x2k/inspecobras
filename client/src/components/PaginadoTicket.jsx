import React from 'react';

export default function PaginadoTickets ({ticketsPerPage, allTickets, paginadoTickets}){
    const pageNumbersTicket = []

    for (var i=1; i<=Math.ceil(allTickets/ticketsPerPage); i++){
        pageNumbersTicket.push(i)
    }
    return(
        <nav>                        
                <div  style={{
                    color: 'black',
                    display: 'flex',
                    flexdirection: 'row',                    
                    flexWrap: 'wrap',
                    justifyContent:'center',
                    alingItems: 'center',
                    margin: '5px',                    
                    decoration: 'none'
                    
                }}
                className='paginadoTickets' >
                    
                    {pageNumbersTicket &&                   
                     pageNumbersTicket.map ( number => (
                            <ul 
                                className='number' key={number} >
                                <button onClick={() => paginadoTickets(number)}>{ number }</button>
                            </ul>
                     )) }

                </div>
        </nav>

    )

}