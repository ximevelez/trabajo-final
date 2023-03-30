import { useState } from 'react'


function Mision() {
  /*  const [count, setCount] = useState(0) */

  return (
    <div className='container'>
      <div className=' mt-4 contenido-descubridores'>
        <div className='d-flex justify-content-center'>
          <img className='animación img-fluid d-flex justify-content-center' src="./images/compu.png" width="80%" alt="" />
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <h1 className='descubridores rounded' id="descubridores">Descubridores</h1>
        </div>

        <div className='d-flex justify-content-center'>
          <div className='contenido-d accordion accordion-flush mt-4' id="accordionFlushExample">
            <div className='accordion-item'>
              <h2 className='accordion-header' id="flush-headingOne">
                <button className='boton-b rounded accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Nosotros <img className='Baogan ms-2' src="./images/icono1.png" alt="" />
                </button>
              </h2>
              <div id="flush-collapseOne" className='accordion-collapse collapse' aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className='contenido-button accordion-body text-center'>Somos los creadores de Baogan y nuestro objetivo es exponer el uso negativo de la pólvora por medio de un videojuego.</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id="flush-headingTwo">
                <button className='boton-m rounded accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Misión <img className='mision ms-2' src="./images/icono2.png" alt="" />
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className='contenido-button accordion-body text-center'>Enseñar a los jóvenes mediante los videojuegos las consecuencias que ocasiona el uso de la pólvora en el medio ambiente, los animales y las personas.</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id="flush-headingThree">
                <button className='boton-v rounded accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Visión <img className='vision ms-2' src="./images/icono3.png" alt="" />
                </button>
              </h2>
              <div id="flush-collapseThree" className='accordion-collapse collapse' aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className='contenido-button accordion-body text-center'>Lograr un cambio positivo en la juventud frente a la pólvora y concientizarse de las consecuencias que ocasiona esta, generando una mejor calidad ambiental, para los animales y las personas.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mision