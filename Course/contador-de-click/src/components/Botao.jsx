import '../Stylesheets/Botao.css'


function Botao({ texto, botaoDeClick, dirigirClick }){
  return(
    <button 
    className={botaoDeClick ? "botao-click" : "botao-reiniciar"}
    onClick={dirigirClick}
    >
      {texto}
    </button>
  );
}

export default Botao