import './App.css'
import freeCodeCamp from '/freecodecamp.svg'
import Botao from './components/Botao';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClick, setNumClick] = useState(0) 

  const click = () => {
    setNumClick(numClick + 1)
  }

  const reiniciarContador = () => {
    setNumClick(0)
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-recipiente">
        <img 
        className='freecodecamp-logo'
        src={freeCodeCamp} 
        alt='logo de freecodecamp' 
        />
      </div>
      <div className="recipiente-principal">
        <Contador numClick={numClick}/>
        <Botao
          texto='Click'
          botaoDeClick={true}
          dirigirClick={click}
        />
        <Botao 
          texto='Reiniciar'
          botaoDeClick={false}
          dirigirClick={reiniciarContador}
        />
      </div>
    </div>
  )
}

export default App
