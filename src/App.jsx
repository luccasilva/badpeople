import './App.css';
import React, { useState, useEffect } from 'react';
import badPeople from './data/badPeople';
import coupleQuestions from './data/coupleQuestions';
import Card from './components/Card/Card';

const initialQuestion = "Clique no botão para sortear uma carta.";

const gameOptions = [
  {
    id: 1,
    name: 'AMIGOS DE MERDA',
    value: "badPeople",
  },
  {
    id: 2,
    name: 'PERGUNTAS DE CASAL',
    value: "coupleQuestions",
  },
];

const games = {
  "badPeople": badPeople,
  "coupleQuestions": coupleQuestions,
};

const App = () => {
  const [game, setGame] = useState(badPeople);
  const [question, setQuestion] = useState(initialQuestion);

  const selectRandomQuestion = () => {
    const maxQuestions = game.length;
    const randomIndex = Math.floor(Math.random() * maxQuestions);
    const randomQuestion = game[randomIndex];
    setQuestion(randomQuestion);
  }

  const handleGameChange = (event) => {
    setQuestion(initialQuestion);
    setGame(games[event.target.value]);
  }

  return (
    <div className='app'>
      <div className='appCard'>

        <select className='select' onChange={(e) => handleGameChange(e)}>
          {gameOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        <Card nome='AMIGOS DE MERDA' descricao={question} />
      </div>
      <button className='butao' onClick={selectRandomQuestion}> SORTEAR CARTA </button>
    </div>
  );
};

export default App;
