import './App.css';
import React, { useState, useEffect } from 'react';
import frases from './frases';
import CardProfissoes from './CardProfissoes';

export default (props) => {

  const [dados, setDados] = useState("NULL");
  const [searchTerm, setSearchTerm] = useState(0);

  function filterByID(obj) {
    if (obj.id === searchTerm) {
      return true;
    } else {
      return false;
    }
  }

  const randNumber = async () => {
    const min = Math.ceil(1);
    const max = Math.floor(154);
    const number = Math.floor(Math.random() * (max - min)) + min;
    setSearchTerm(number);
    console.log(searchTerm)
  };

  useEffect(async () => {

    var arrByID = frases.filter(filterByID);
    console.log(arrByID)

    const mapping = arrByID.map((frase) => (
      <CardProfissoes
          nome='AMIGOS DE MERDA'
          descricao={frase.quest}
      />
  ));

    setDados(mapping)

},[searchTerm]);

  return (
    <div className='app'>
      <div className='appCard'>
        {dados}
      </div>
      <button className='butao' onClick={randNumber}> SORTEAR CARTA </button>
    </div>
  );
}
