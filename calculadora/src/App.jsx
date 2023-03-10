import './App.css'
import Botao from './components/Botao';
import freeCodeCamp from '/freecodecamp.svg';


function App() {
  return(
    <div className="App">
      <div className="freecodecamp-logo-recipiente">
        <img 
        src={freeCodeCamp}
        alt="Logo di FreeCodeCamp" 
        className='freecodecamp-logo'/>
      </div>
      <div className="recipiente-calculadora">
      <div className="fila">
        <Botao>1</Botao>
        <Botao>+</Botao>

      </div>
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>
      </div>
    </div>
  )
}

export default App
