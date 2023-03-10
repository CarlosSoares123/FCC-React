import '../stylesheets/Testemunho.css'


function Testemunhos(props) {
  return(
  <div className="recipiente-testemunho">
    <img  
    src={props.imagem}
    alt="Foto de Carlos"   
    className="imagem-testemunho" />

    <div className="recipiente-texto-testemunho">
      <p className="nome-testemunho"><strong>{props.nome}</strong> em {props.pais}</p>
      <p className="cargo-testemunho"> {props.cargo} em  <strong>{props.empresa}</strong></p>
      <p className="texto-textemunho">{props.testemunho}</p>
    </div>
  </div>
  );
}
export default Testemunhos
