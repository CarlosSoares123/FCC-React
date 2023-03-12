import '../stylesheets/Botao.css'

function Botao (props){

  const operador = valor => {
// isNan verifica se o conjunto de caracteres nao e um numero
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }

  return(
    <div 
    className={`botao-recipiente ${operador(props.children) ? 'operador' : null}`.trimEnd()}
    onClick={() => props.dirigirClick(props.children)}>
    {props.children}
    </div>
    
  );
}

export default Botao