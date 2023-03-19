import './App.css'
import Testemunhos from './components/Testemunhos';


function App() {
  return (
    <div className="App">
      <div className="recipiente-principal">

      <h1>O que os alunos dizem sobre o FreCodeCamp</h1> 
      <Testemunhos
        nome='Carlos Soares'
        pais='Angola'
        imagem='../img/testemunho-carlos.png'
        cargo='Engenheiro de Software'
        empresa='Google'
        testemunho='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis velit reiciendis quos non voluptates fugit sunt. Blanditiis nisi minima impedit mollitia, soluta, voluptatem pariatur aliquam quaerat accusamus asperiores quasi?'
      />

      <Testemunhos
        nome='Soares Pedro'
        pais='França'
        imagem='../img/testemunho-Soares.jpeg'
        cargo='Programador Front end'
        empresa='Spotify'
        testemunho='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis velit reiciendis quos non voluptates fugit sunt. Blanditiis nisi minima impedit mollitia, soluta, voluptatem pariatur aliquam quaerat accusamus asperiores quasi?'
      />

      <Testemunhos
        nome='Kaila De Andrade'
        pais='Brasil'
        imagem='../img/testemunho-kaila.jpeg'
        cargo='Engenheiro de Software'
        empresa='Microsolft'
        testemunho='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis velit reiciendis quos non voluptates fugit sunt. Blanditiis nisi minima impedit mollitia, soluta, voluptatem pariatur aliquam quaerat accusamus asperiores quasi?'
      />
      </div>  
    </div>
  )
}
export default App
