
function Botao (props){

  const operador = valor => {
// isNan verifica se o conjunto de caracteres nao e um numero
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }

  return(
    <div 
    className={`botao-recipente ${operador(props.children) ? 'operador' : null}`.trimEnd()}>
    {props.children}
    </div>
    
  );
}

export default Botao