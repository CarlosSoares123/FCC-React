import '../Stylesheets/Tarefa.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarefa({ texto, completada }){
  return(
    <div className="tarefa-recipiente">
      <div className="tarefa-texto">
        {texto}
      </div>
      <div className="tarefa-recipiente-icons">
        <AiOutlineCloseCircle  className='tarefa-icon'/>
      </div>
    </div>
  )
}

export default Tarefa