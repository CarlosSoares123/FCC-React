import './App.css'
import Botao from './components/Botao';
import BotaoClear from './components/BotaoClear';
import Tela from './components/Tela';
import freeCodeCamp from '/freecodecamp.svg';
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {

  const [input, setInput] = useState('0');

  const agregarInput = valor =>{
    setInput(input + valor)
  }

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input))
    }else{
        alert("Por favor dirite os valores para realizar o calculos")
    }
  };


  return(
    <div className="App">
      <div className="freecodecamp-logo-recipiente">
        <img 
        src={freeCodeCamp}
        alt="Logo di FreeCodeCamp" 
        className='freecodecamp-logo'/>
      </div>
      <div className="recipiente-calculadora">
        <Tela input={input}/>
      <div className="fila">
        <Botao dirigirClick={agregarInput}>1</Botao>
        <Botao dirigirClick={agregarInput}>2</Botao>
        <Botao dirigirClick={agregarInput}>3</Botao>
        <Botao dirigirClick={agregarInput}>+</Botao>
      </div>
      <div className="fila">
      <Botao dirigirClick={agregarInput}>4</Botao>
      <Botao dirigirClick={agregarInput}>5</Botao>
      <Botao dirigirClick={agregarInput}>6</Botao>
      <Botao dirigirClick={agregarInput}>-</Botao>
      </div>
      <div className="fila">
      <Botao dirigirClick={agregarInput}>7</Botao>
      <Botao dirigirClick={agregarInput}>8</Botao>
      <Botao dirigirClick={agregarInput}>9</Botao>
      <Botao dirigirClick={agregarInput}>*</Botao>
      </div>
      <div className="fila">
      <Botao dirigirClick={calcularResultado}>=</Botao>
      <Botao dirigirClick={agregarInput}>0</Botao>
      <Botao dirigirClick={agregarInput}>.</Botao>
      <Botao dirigirClick={agregarInput}>/</Botao>
      </div>
      <div className="fila">
        <BotaoClear dirigirClick={() => setInput('0') }>Clear</BotaoClear>
      </div>
      </div>
    </div>
  )
}

export default App
