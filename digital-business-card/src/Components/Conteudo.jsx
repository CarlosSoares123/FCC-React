import '../stylesheets/Conteudo.css'

function Conteudo ({nomeSecao, descricao}){
  return(
    <div className="recipiente-conteudo">
      <h2 className="secao">{nomeSecao}</h2>
      <p className="descricao">{descricao}</p>
    </div>
  )
}
export default Conteudo
