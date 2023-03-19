import './App.css'
import Botao from './Components/Botao';
import Conteudo from './Components/Conteudo';
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Footer from './Components/Footer';


  function App() {
  return (
    <div className="App">
    
    <div className="Informacao-pessoal">
      <img src="/Carlos Soares (2).jpg" className='perfil'/>
      <div className="recipiente">
      <h1 className='nome'>Carlos Soares</h1>
      <p className="especialidade">FrontEnd Developer</p>
      <p className="site">caclas.netlify.app</p>
      </div>
    </div>

    <div className="recipiente-principal">

    <div className="butoes">
    <Botao nomeBotao={true}>
      <AiOutlineMail/> Email
    </Botao>
    <Botao nomeBotao={false}>
      <AiFillLinkedin/>Linkedin
    </Botao>
    </div>

    <Conteudo
    nomeSecao="Sobre"
    descricao="Oi, Eu sou o Carlos Soares, sou um desenvolvedor frontEnd junior 
    pretendo evoluir o máximo possível, sou bastante competitivo, busco sempre me
    aprofundar nessa incrível area que são as TI's ."/>

    <Conteudo
    nomeSecao="Desejos"
    descricao="Tenho muitos interesses e metas que eu quero alcançar, um deles é ~
    trabalhar numa empresa multiIternacional, seria uma realização fantástica kk."/>
    </div>

    <Footer />
    </div>
  )
}

export default App
