import './Card.css';


import React, { useEffect } from 'react';

export default (props) => {


    return (
            <div className="card">
                <div className='titulo'>
                    <h6>AMIGOS DE MERDA</h6>
                </div>
                <div className="face">
                    <span>{props.descricao}</span>
                </div>
            </div>
    );
}