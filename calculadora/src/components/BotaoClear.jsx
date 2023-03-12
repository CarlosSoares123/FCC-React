import '../stylesheets/BotaoClear.css'

const BotaoClear = (props) => (
  <button 
  className="botao-clear"
  onClick={props.dirigirClick}
  >
    {props.children}
  </button>
)
export default BotaoClear