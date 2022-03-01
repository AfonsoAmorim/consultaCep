import React from 'react';
import './styles/main.css';

function TrackerCep({events}){
    if (!events || events.legth === 0) return null;

    return (
        <>        
            <h1>CEP ENCONTRADO: </h1>
         <ul className="list-group">
            {events.map(item =>
                 <li className="list-group-item" key={item.cep}>
                     <span>CEP: {item.cep}</span>
                     <span>Logradouro: {item.logradouro}</span>
                     <span>Bairro: {item.bairro}</span>
                     <span>Nacionalidade: {item.nacionalidade}</span>
                     <span>Localidade: {item.localidade}</span>
                     <span>UF: {item.uf}</span>
                     </li>
            )}
            </ul>

        </>

    )
}

export default TrackerCep;

