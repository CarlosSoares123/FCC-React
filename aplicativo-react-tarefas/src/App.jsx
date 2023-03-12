import './App.css'
import freeCodeCamp from '/freecodecamp.svg'
import Tarefa from './components/Tarefa';

function App() {
  return (
    <div className="aplicacao-tarefas">
      <div className="freecodecamp-logo-recipiente">
        <img 
        src={freeCodeCamp}
      className='freecodecamp-logo' />
      </div>

      <div className="tarefas-listas-principal">
        <h1>Minhas tarefas</h1>
        <Tarefa texto='Aprender React' />
      </div>
    </div>
  )
}

export default App
