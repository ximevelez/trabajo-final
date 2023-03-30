import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Objetivo from './Objetivo'
import Baogan from './Baogan'
import Mision from './Mision'
import Titulo from './Titulo'
import Aventurate from './Aventurate'
import Carrusel from './Carrusel'
import Boton from './Boton'
import Footer from './Footer'





function App() {
  /*  const [count, setCount] = useState(0) */

  return (
    <div className="App">
      <Header />
     
        <Objetivo
      videoinicio="escenario.png"
      objetivo="Objetivo"
      contenido="Capacitar a personas que estén interesadas en conocer y aprender
      habilidades de primeros auxilios para los animales de compañía, ya sea porque quiere
      profesionalizarse en el área de salud de los animales o  simplemente quiere el el bienestar de ellos."
        />

      <Baogan
      game="game.gif"
      titulo="Baogan"
      baogan="Baogan” es un proyecto creado para dar solución a la problemática del uso de la pólvora, usando los videojuegos donde podremos enseñar las consecuencias que trae el uso de esta, y así evitar pasar un mal rato por querer simple diversión, ya que es perjudicial para todos."
      
      />
      <Mision />
      <Titulo/>

      <div className='row'>
        <div className='col-sm-6'>
      <Aventurate
      contenidov="El objetivo del videojuego es destruir los obstáculos lanzados por Baogan, para así poder salvar a las personas, animales y al mismo medio ambiente, y por último poder destruir a Baogan, el villano de la historia."
      videojuego="Videojuego"
      />
      </div>
      <div className='col-sm-6'>
      <Aventurate
      contenidov="Cada jugador podrá elegir una habilidad a su personaje que puede ser Evita o Evito, a medida de que pasen los niveles y los obstáculos estarán más fuertes, por lo que las habilidades o poderes para elegir serán diferentes, todo lo que se les suministre les servirá a la hora de esquivar y ayudar a la población contra los ataques de Baogan."
      videojuego="Pasos"
      />
      </div>
      </div>
      <Carrusel />
      <Boton />
      <Footer />
      

    </div>
  )
}

export default App
