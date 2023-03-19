import '../stylesheets/Botao.css'


function Botao({children, nomeBotao}){
  return(
    <>
    <button
    className={nomeBotao ? "email" : "linkedin"}>
      <a href="#" className='link'>
          {children}
      </a>
    </button>
    </>
  )
}
export default Botao